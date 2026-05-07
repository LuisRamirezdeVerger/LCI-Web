"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATARIO = "lacasadelosinventos@gmail.com";
// Por defecto usamos el dominio sandbox de Resend. Cuando se verifique el dominio
// propio, basta con definir RESEND_FROM en el .env (ej. "Wito <hola@lacasa.dev>").
const REMITENTE = process.env.RESEND_FROM ?? "onboarding@resend.dev";

export interface EstadoFormulario {
  success: boolean;
  error?: string;
}

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

export async function enviarPostulacionTester(
  _estadoPrevio: EstadoFormulario | null,
  formData: FormData,
): Promise<EstadoFormulario> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const interes = String(formData.get("interes") ?? "").trim();
  const verificacion = String(formData.get("verificacion") ?? "").trim();

  // Validación de campos obligatorios.
  if (!nombre || !email) {
    return {
      success: false,
      error: "El nombre y el correo son obligatorios.",
    };
  }

  // Validación servidor del anti-bot — la regla `pattern` HTML es bypassable.
  if (!/^[Ii][Nn][Vv][Ee][Nn][Tt][Oo]$/.test(verificacion)) {
    return {
      success: false,
      error:
        "Verificación humana incorrecta. Escribe exactamente la palabra INVENTO.",
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
      ].join("\n"),
      html: `
        <h2 style="font-family: Arial, sans-serif;">Nuevo Tester</h2>
        <p style="font-family: Arial, sans-serif;"><strong>Nombre:</strong> ${escaparHtml(nombre)}</p>
        <p style="font-family: Arial, sans-serif;"><strong>Email:</strong> ${escaparHtml(email)}</p>
        <p style="font-family: Arial, sans-serif;"><strong>Interés:</strong> ${escaparHtml(interesLimpio)}</p>
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
