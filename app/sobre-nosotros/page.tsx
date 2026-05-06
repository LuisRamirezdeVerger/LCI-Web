import type { Metadata } from "next";
import { Code2, Zap } from "lucide-react";
import { METODOLOGIAS, TECNOLOGIAS } from "@/lib/sobre-nosotros";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Casa de los Inventos",
  description:
    "Conoce cómo trabajamos en La Casa de los Inventos: nuestra metodología, principios de diseño y el stack tecnológico que utilizamos para construir productos web y móviles bajo la filosofía de \"no hay límites\".",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-[90vh] bg-white px-[2rem] md:px-[5%] py-[4rem] md:py-[6rem] flex flex-col gap-[4rem] md:gap-[6rem]">
      <PageHeader
        titulo="Sobre"
        acento="Nosotros"
        descripcion={
          <>
            Somos un laboratorio de ideas convertidas en producto. Diseñamos y
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
          {METODOLOGIAS.map(({ icono: Icono, titulo, descripcion }) => (
            <article
              key={titulo}
              className="group border-2 border-black p-[2rem] flex flex-col gap-[1rem] hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="flex items-center gap-[0.8rem]">
                <Icono size="1.5rem" className="shrink-0" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                  {titulo}
                </h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {descripcion}
              </p>
            </article>
          ))}
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
          {TECNOLOGIAS.map(({ nombre, version, descripcion }) => (
            <li
              key={nombre}
              className="border-2 border-black p-[1.5rem] flex flex-col gap-[0.5rem] hover:bg-inventor-principal hover:text-white hover:border-inventor-principal transition-colors duration-300"
            >
              <div className="flex items-center gap-[0.5rem]">
                <Code2 size="1.125rem" className="shrink-0" />
                <span className="text-xs uppercase font-bold tracking-[0.2em] opacity-70">
                  Stack
                </span>
              </div>
              <div className="flex items-baseline gap-[0.5rem] mt-[0.5rem]">
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  {nombre}
                </span>
                <span className="text-sm font-bold opacity-70">{version}</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                {descripcion}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-[3rem] md:mt-[4rem] border-t-2 border-black pt-[2.5rem] md:pt-[3rem] flex items-center gap-[1rem] text-black">
          <Zap size="1.25rem" className="shrink-0" />
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.15em]">
            Construido con foco en privacidad, accesibilidad y rendimiento.
          </p>
        </div>
      </section>
    </main>
  );
}
