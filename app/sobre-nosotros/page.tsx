import type { Metadata } from "next";
import { Zap } from "lucide-react";
import { METODOLOGIAS, TECNOLOGIAS } from "@/lib/sobre-nosotros";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { TechItemInteractivo } from "@/components/TechItemInteractivo";
import { MetodologiaInteractiva } from "@/components/MetodologiaInteractiva";

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Casa de los Inventos",
  description:
    "Conoce cómo trabajamos en La Casa de los Inventos: nuestra metodología, principios de diseño y el stack tecnológico que utilizamos para construir productos web y móviles bajo la filosofía de \"no hay límites\".",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Sobre"
        acento="Nosotros"
        descripcion={
          <>
            Somos un laboratorio de ideas. Diseñamos y
            desarrollamos experiencias web y móviles bajo una sola regla:{" "}
            <span className="font-black">no hay límites</span>.
          </>
        }
      />

      {/* Sección 1: Cómo funcionamos */}
      <section
        aria-labelledby="como-funcionamos"
        className="flex flex-col gap-[2.5rem]"
      >
        <SectionTitle id="como-funcionamos">Cómo funcionamos</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[2.5rem]">
          {METODOLOGIAS.map((metodologia) => {
            const Icono = metodologia.icono;
            return (
              <MetodologiaInteractiva
                key={metodologia.titulo}
                icono={<Icono className="w-[1.5rem] h-[1.5rem] shrink-0" />}
                titulo={metodologia.titulo}
                descripcion={metodologia.descripcion}
              />
            );
          })}
        </div>
      </section>

      {/* Sección 2: Tecnologías que usamos */}
      <section aria-labelledby="tecnologias" className="flex flex-col gap-[2.5rem]">
        <SectionTitle id="tecnologias">Tecnologías que usamos</SectionTitle>

        <p className="text-base md:text-lg text-gray-700 max-w-[40rem] leading-relaxed">
          Apostamos por un stack moderno, tipado y con buen soporte a largo
          plazo. Cada herramienta está elegida para mantener la base del
          proyecto sólida y escalable.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {TECNOLOGIAS.map((tecnologia) => (
            <TechItemInteractivo key={tecnologia.nombre} {...tecnologia} />
          ))}
        </ul>

        <div className="mt-[3rem] md:mt-[4rem] border-t-2 border-black pt-[2.5rem] md:pt-[3rem] flex items-center gap-[1rem] text-black">
          <Zap size="1.25rem" className="shrink-0" />
          <p className="text-[clamp(0.75rem,2.5vw,1rem)] font-bold uppercase tracking-wider md:tracking-[0.15em] leading-tight">
            Construido con foco en privacidad, accesibilidad y rendimiento.
          </p>
        </div>
      </section>
    </main>
  );
}
