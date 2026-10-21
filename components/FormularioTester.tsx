"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import {
  enviarPostulacionTester,
  type EstadoFormulario,
} from "@/app/actions/tester";

const ESTADO_INICIAL: EstadoFormulario | null = null;

/**
 * Clave pública del widget. Si no hay `NEXT_PUBLIC_TURNSTILE_SITE_KEY` en el
 * entorno caemos a la clave de prueba oficial de Cloudflare (siempre supera el
 * reto), para que el formulario siga funcionando en local sin configuración.
 * Es segura de exponer: es pública por diseño y no valida nada en servidor.
 */
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";

export const FormularioTester = () => {
  const [estado, formAction, pendiente] = useActionState(
    enviarPostulacionTester,
    ESTADO_INICIAL,
  );

  if (estado?.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-2 border-black bg-black text-white p-[2.5rem] md:p-[3rem] max-w-[40rem] flex flex-col gap-[1.5rem]"
      >
        <div className="flex flex-wrap items-center gap-[0.75rem]">
          <CheckCircle2 size="1.5rem" className="shrink-0" />
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
            ¡Gracias por unirte!
          </h3>
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          Te contactaremos pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="border-2 border-black p-[2.5rem] md:p-[3rem] max-w-[40rem] flex flex-col gap-[2rem]"
    >
      <div className="flex flex-col">
        <label
          htmlFor="nombre"
          className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight text-black mb-[0.75rem]"
        >
          Nombre o apodo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          disabled={pendiente}
          className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight text-black mb-[0.75rem]"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pendiente}
          className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="interes"
          className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight text-black mb-[0.75rem]"
        >
          ¿Qué te interesa probar?{" "}
          <span className="opacity-50 normal-case font-medium tracking-normal">
            (opcional)
          </span>
        </label>
        <textarea
          id="interes"
          name="interes"
          rows={4}
          disabled={pendiente}
          className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors resize-y min-h-[6rem] disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/*
        Verificación humana con Cloudflare Turnstile. Sustituye al captcha
        manual de escribir "INVENTO": aquel era texto fijo en el HTML, así que
        un bot lo resolvía con una línea de código. Turnstile analiza señales
        del navegador y emite un token firmado que el servidor valida contra
        Cloudflare, sin pedirle nada al usuario en el caso normal.
        El widget inyecta por sí mismo el input oculto `cf-turnstile-response`,
        que el FormData arrastra hasta la Server Action.
      */}
      <div className="border-2 border-dashed border-black p-[1.25rem] flex flex-col gap-[1rem]">
        <div className="flex flex-wrap items-center gap-[0.5rem]">
          <ShieldCheck size="1rem" className="shrink-0" />
          <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight">
            Verificación humana
          </span>
        </div>
        {/* max-w-full evita que el iframe del widget desborde en móvil. */}
        <div className="max-w-full overflow-x-hidden">
          <Turnstile
            siteKey={SITE_KEY}
            options={{ theme: "light", size: "flexible", language: "es" }}
          />
        </div>
      </div>

      <div className="flex items-start gap-[0.75rem]">
        <input
          id="acepta"
          name="acepta"
          type="checkbox"
          required
          disabled={pendiente}
          className="mt-[0.25rem] w-[1.1rem] h-[1.1rem] shrink-0 accent-black disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <label
          htmlFor="acepta"
          className="text-sm leading-relaxed break-words"
        >
          He leído y acepto la{" "}
          <Link
            href="/privacidad"
            className="underline font-bold hover:opacity-70"
          >
            Política de Privacidad
          </Link>
          . <span className="opacity-70">Consentimiento obligatorio para procesar tu solicitud (RGPD).</span>
        </label>
      </div>

      {estado?.error && (
        <div
          role="alert"
          aria-live="assertive"
          className="border-2 border-black bg-white text-black p-[1rem] text-sm font-bold leading-relaxed break-words"
        >
          {estado.error}
        </div>
      )}

      <div className="flex flex-wrap gap-[0.75rem]">
        <button
          type="submit"
          disabled={pendiente}
          aria-busy={pendiente}
          className="self-start mt-[0.5rem] inline-flex items-center gap-[0.5rem] bg-black text-white px-[2rem] py-[1rem] rounded-full font-bold uppercase tracking-[0.1em] text-sm hover:bg-white hover:text-black border-2 border-black active:bg-black active:text-white active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white transition-all duration-300"
        >
          <Send size="1rem" className="shrink-0" />
          {pendiente ? "Enviando..." : "Enviar postulación"}
        </button>
      </div>
    </form>
  );
};
