"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATARIO = "lacasadelosinventos@gmail.com";
// Por defecto usamos el dominio sandbox de Resend. Cuando se verifique el dominio
// propio, basta con definir RESEND_FROM en el .env (ej. "Wito <hola@lacasa.dev>").
const REMITENTE = process.env.RESEND_FROM ?? "onboarding@resend.dev";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export interface EstadoFormulario {
  success: boolean;
  error?: string;
}

/**
 * Esquema único de verdad para la entrada del formulario.
 *
 * Por qué sustituye a los `if` manuales:
 * - Los `.max()` acotan el tamaño del cuerpo del email: sin ellos, un POST
 *   directo (el formulario HTML no es la única puerta a una Server Action)
 *   podría enviar megabytes y agotar la cuota de Resend.
 * - `z.email()` valida el formato en servidor, y eso importa porque ese valor
 *   viaja en la cabecera `replyTo` de un email real.
 * - `.trim()` normaliza antes de validar, así " a " no pasa el `min(2)`.
 */
const TesterSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre es obligatorio.")
    .max(80, "El nombre no puede superar los 80 caracteres."),
  // 254 es el máximo que el RFC 5321 permite para una dirección completa.
  email: z.email("Introduce un correo electrónico válido.").max(254),
  interes: z
    .string()
    .trim()
    .max(2000, "El mensaje no puede superar los 2000 caracteres.")
    .optional()
    .default(""),
  // El checkbox solo llega en el FormData si está marcado, y su valor es "on".
  acepta: z.literal(
    "on",
    "Debes aceptar la Política de Privacidad para enviar el formulario.",
  ),
  // Token que inyecta el widget de Turnstile en el cliente.
  "cf-turnstile-response": z
    .string()
    .min(1, "Completa la verificación de seguridad antes de enviar."),
});

/**
 * Escapa los valores que vienen del usuario antes de inyectarlos en HTML
 * para evitar inyección de markup en el cuerpo del email.
 */
function escaparHtml(valor: string): string {
  return valor.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] ?? c,
  );
}

/**
 * Valida el token de Turnstile contra el endpoint `siteverify` de Cloudflare.
 *
 * El widget del cliente es solo UI: cualquiera puede hacer POST a la Server
 * Action sin pasar por él, así que la única verificación que cuenta es esta.
 *
 * Sin `TURNSTILE_SECRET_KEY`: en desarrollo avisa y deja pasar (para no
 * bloquear el trabajo local antes de configurar el `.env.local`); en
 * producción rechaza — un despliegue sin secreto no debe dejar el formulario
 * abierto a bots en silencio.
 */
async function verificarTurnstile(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[turnstile] TURNSTILE_SECRET_KEY no definida en producción: envío rechazado.",
      );
      return false;
    }
    console.warn(
      "[turnstile] Sin TURNSTILE_SECRET_KEY: verificación omitida en desarrollo.",
    );
    return true;
  }

  try {
    // `remoteip` es opcional, pero ata el token a la IP que resolvió el reto.
    const cabeceras = await headers();
    const ip =
      cabeceras.get("cf-connecting-ip") ??
      cabeceras.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      undefined;

    const cuerpo = new URLSearchParams({
      secret: TURNSTILE_SECRET,
      response: token,
    });
    if (ip) cuerpo.set("remoteip", ip);

    const respuesta = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: cuerpo,
      cache: "no-store",
    });

    const datos = (await respuesta.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!datos.success) {
      console.warn("[turnstile] token rechazado:", datos["error-codes"]);
    }
    return datos.success;
  } catch (excepcion) {
    // Fail closed: si no podemos hablar con Cloudflare, no enviamos el email.
    console.error("[turnstile] error de verificación:", excepcion);
    return false;
  }
}

export async function enviarPostulacionTester(
  _estadoPrevio: EstadoFormulario | null,
  formData: FormData,
): Promise<EstadoFormulario> {
  const resultado = TesterSchema.safeParse(Object.fromEntries(formData));

  if (!resultado.success) {
    // Devolvemos solo el primer mensaje: el formulario muestra un único aviso.
    return { success: false, error: resultado.error.issues[0].message };
  }

  const {
    nombre,
    email,
    interes,
    "cf-turnstile-response": turnstileToken,
  } = resultado.data;

  if (!(await verificarTurnstile(turnstileToken))) {
    return {
      success: false,
      error:
        "No hemos podido verificar que eres humano. Recarga la página e inténtalo de nuevo.",
    };
  }

  const interesLimpio = interes || "(no indicado)";

  try {
    const { error } = await resend.emails.send({
      from: REMITENTE,
      to: DESTINATARIO,
      subject: "Nuevo Tester para La Casa de los Inventos",
      replyTo: email,
      text: [
        "Nueva postulación de tester:",
        "",
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Interés: ${interesLimpio}`,
        `Consentimiento RGPD: aceptado el ${new Date().toISOString()}`,
      ].join("\n"),
      html: `
        <h2 style="font-family: Arial, sans-serif;">Nuevo Tester</h2>
        <p style="font-family: Arial, sans-serif;"><strong>Nombre:</strong> ${escaparHtml(nombre)}</p>
        <p style="font-family: Arial, sans-serif;"><strong>Email:</strong> ${escaparHtml(email)}</p>
        <p style="font-family: Arial, sans-serif;"><strong>Interés:</strong> ${escaparHtml(interesLimpio)}</p>
        <p style="font-family: Arial, sans-serif; color:#555; font-size:0.85rem;"><strong>Consentimiento RGPD:</strong> aceptado el ${escaparHtml(new Date().toISOString())}</p>
      `,
    });

    if (error) {
      console.error("[enviarPostulacionTester] Resend error:", error);
      return {
        success: false,
        error: "No pudimos enviar la postulación. Inténtalo de nuevo en unos minutos.",
      };
    }

    return { success: true };
  } catch (excepcion) {
    console.error("[enviarPostulacionTester] excepción:", excepcion);
    return {
      success: false,
      error: "Error inesperado al procesar el envío.",
    };
  }
}
