import type { Metadata } from "next";
import { MapPin, Clock, Send } from "lucide-react";
import { CANALES } from "@/lib/contacto";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contacto | La Casa de los Inventos",
  description:
    "Ponte en contacto con La Casa de los Inventos. Hablemos de tu próximo proyecto, una colaboración o cualquier idea que merezca convertirse en producto.",
};

async function enviarMensaje(formData: FormData) {
  "use server";
  // TODO: integrar envío real (email transaccional, base de datos o webhook).
  // Placeholder preparado para Server Action: la firma ya es la definitiva.
  void formData;
}

export default function ContactoPage() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Hablemos"
        acento="en serio"
        descripcion={
          <>
            ¿Una idea, un proyecto, una colaboración? Escríbenos por el canal que
            prefieras. Respondemos en menos de{" "}
            <span className="font-black">48 horas</span>.
          </>
        }
      />

      {/* Sección 1: Formulario */}
      

      {/* Sección 2: Canales directos */}
      <section aria-labelledby="canales" className="flex flex-col gap-[2.5rem]">
        <SectionTitle id="canales">Canales directos</SectionTitle>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {CANALES.map(({ icono: Icono, etiqueta, valor, href, externo }) => (
            <li key={etiqueta}>
              <a
                href={href}
                {...(externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group border-2 border-black p-[1.5rem] flex items-center gap-[1rem] hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Icono size="1.5rem" className="shrink-0" />
                <div className="flex flex-col gap-[0.25rem] min-w-0">
                  <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                    {etiqueta}
                  </span>
                  <span className="text-base md:text-lg font-bold truncate">
                    {valor}
                  </span>
                </div>
                <span className="ml-auto text-2xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Sección 3: Contexto */}
      <section
        aria-labelledby="contexto"
        className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]"
      >
        <h2 id="contexto" className="sr-only">
          Información adicional
        </h2>

        <div className="border-2 border-black p-[1.5rem] flex items-start gap-[1rem]">
          <MapPin size="1.5rem" className="shrink-0 mt-[0.25rem]" />
          <div className="flex flex-col gap-[0.25rem]">
            <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight text-gray-500">
              Ubicación
            </span>
            <p className="text-base md:text-lg font-bold text-black">
              España · Trabajamos en remoto
            </p>
          </div>
        </div>

        <div className="border-2 border-black p-[1.5rem] flex items-start gap-[1rem]">
          <Clock size="1.5rem" className="shrink-0 mt-[0.25rem]" />
          <div className="flex flex-col gap-[0.25rem]">
            <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight text-gray-500">
              Disponibilidad
            </span>
            <p className="text-base md:text-lg font-bold text-black">
              Lun – Vie · 09:00 – 19:00 (CET)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
