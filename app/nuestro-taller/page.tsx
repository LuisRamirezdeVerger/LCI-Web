import type { Metadata } from "next";
import {
  ArrowUpRight,
  Gauge,
  Mail,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nuestro Taller | La Casa de los Inventos",
  description:
    "Diferentes niveles de servicio para llevar tu idea al siguiente nivel: Presencia digital de alto rendimiento, MVPs y apps móviles transaccionales, y optimización o adaptación para proyectos en React / Next.js existentes.",
};

const EMAIL = "lacasadelosinventos@gmail.com";
const mailto = (asunto: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}`;

const PILARES = [
  {
    icono: Gauge,
    titulo: "Velocidad extrema",
    descripcion:
      "Next.js + Vercel con carga de página por debajo de 1.2s. Usamos tecnologías avanzadas para que tu producto cargue antes de que el usuario parpadee.",
  },
  {
    icono: ShieldCheck,
    titulo: "Seguridad",
    descripcion:
      "Arquitectura server-side por defecto, reglas de seguridad robustas en backend y validación en cada capa. Nada de superficies expuestas.",
  },
  {
    icono: TrendingUp,
    titulo: "Escalabilidad",
    descripcion:
      "Código limpio, tipado y modular. Cuando tu negocio crezca, el código está pensado para escalar contigo.",
  },
] as const;

export default function NuestroTallerPage() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white text-black px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Nuestro"
        acento="Taller"
        descripcion={
          <>
            No vendemos plantillas. Cada{" "}
            <span className="font-black">invento</span> sale del taller hecho a
            medida, optimizado y listo para crecer.
          </>
        }
      />

      {/* Sección 1: Niveles de servicio (Bento Grid asimétrico) */}
      <section
        aria-labelledby="niveles"
        className="flex flex-col gap-[2.5rem]"
      >
        <SectionTitle id="niveles">Niveles de servicio</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[18rem] gap-[1.5rem]">
          {/* Nivel 1 — Escaparate (esquina superior izquierda, peso visual ligero) */}
          <article className="md:col-span-2 border-2 border-black p-[2rem] flex flex-col justify-between gap-[1rem] bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300">
            <div className="flex items-center justify-between gap-[1rem]">
              <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                Nivel 01 · El Escaparate
              </span>
              <Sparkles size="1.25rem" className="shrink-0" />
            </div>

            <div className="flex flex-col gap-[0.75rem]">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter break-words hyphens-auto">
                Presencia digital
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                Landing pages de alto rendimiento con Next.js, SEO técnico
                y diseño responsivo. Ideal para PYMES y
                servicios profesionales.
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-[1rem] pt-[1rem] border-t border-current/30">
              <div className="flex flex-col">
                <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                  Desde
                </span>
                <span className="text-3xl font-black tracking-tighter">
                  200€
                </span>
              </div>
              <a
                href={mailto("Presupuesto · El Escaparate")}
                className="inline-flex items-center gap-[0.5rem] bg-current px-[1.25rem] py-[0.65rem] text-sm font-black uppercase tracking-[0.1em] hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
              >
                <span className="text-white mix-blend-difference">
                  Pedir presupuesto
                </span>
              </a>
            </div>
          </article>

          {/* Nivel 2 — Motor (peso visual dominante: 2x2, invertido, posición destacada) */}
          <article className="md:col-span-2 md:row-span-2 relative border-2 border-black p-[2.5rem] md:p-[3rem] flex flex-col justify-between gap-[1.5rem] bg-black text-white active:scale-[0.99] transition-transform duration-300">
            <div className="flex items-center justify-between gap-[1rem]">
              <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                Nivel 02 · El Motor
              </span>
              <span className="inline-flex items-center gap-[0.4rem] text-[clamp(0.55rem,2vw,0.65rem)] uppercase font-black tracking-wider md:tracking-[0.2em] leading-tight bg-white text-black px-[0.6rem] py-[0.25rem]">
                <Zap size="0.75rem" className="shrink-0" />
                Más popular
              </span>
            </div>

            <div className="flex flex-col gap-[1.25rem]">
              <h3 className="text-[2.5rem] md:text-[4rem] font-[900] uppercase tracking-tighter leading-[0.95] break-words hyphens-auto">
                MVP & Web Apps
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-[28rem] break-words">
                Aplicaciones web transaccionales a medida. Incluye bases de
                datos (Firebase), autenticación de usuarios, lógica de negocio
                compleja y arquitectura escalable.
              </p>

              <ul className="flex flex-wrap gap-[0.5rem] mt-[0.5rem]">
                {[
                  "Next.js + TS",
                  "Firebase",
                  "Auth",
                  "Server Actions",
                ].map((tag) => (
                  <li
                    key={tag}
                    className="text-[clamp(0.6rem,2.2vw,0.7rem)] font-bold border border-current px-[0.6rem] py-[0.25rem] uppercase tracking-wider md:tracking-widest leading-tight whitespace-nowrap"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-[1rem] pt-[1.5rem] border-t-2 border-white/30">
              <div className="flex flex-col">
                <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                  Desde
                </span>
                <span className="text-[2.75rem] md:text-[3.5rem] font-[900] tracking-tighter leading-none">
                  800€
                </span>
              </div>
              <a
                href={mailto("Presupuesto · El Motor (MVP)")}
                className="inline-flex items-center gap-[0.5rem] bg-white text-black px-[1.5rem] py-[0.85rem] text-sm font-black uppercase tracking-[0.1em] hover:bg-gray-200 hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
              >
                Pedir presupuesto
                <ArrowUpRight size="1rem" className="shrink-0" />
              </a>
            </div>
          </article>

          {/* Nivel 3 — Chapa y Pintura (esquina inferior izquierda, peso visual ligero) */}
          <article className="md:col-span-2 border-2 border-black p-[2rem] flex flex-col justify-between gap-[1rem] bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300">
            <div className="flex items-center justify-between gap-[1rem]">
              <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                Nivel 03 · Chapa y Pintura
              </span>
              <Wrench size="1.25rem" className="shrink-0" />
            </div>

            <div className="flex flex-col gap-[0.75rem]">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter break-words hyphens-auto">
                Optimización
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                Auditoría de código, optimización de rendimiento, corrección de
                bugs y actualización tecnológica de proyectos en React /
                Next.js.
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-[1rem] pt-[1rem] border-t border-current/30">
              <div className="flex flex-col">
                <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                  Modelo
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">
                  Bolsa de horas
                </span>
              </div>
              <a
                href={mailto("Presupuesto · Chapa y Pintura (Consultoría)")}
                className="inline-flex items-center gap-[0.5rem] bg-current px-[1.25rem] py-[0.65rem] text-sm font-black uppercase tracking-[0.1em] hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
              >
                <span className="text-white mix-blend-difference">
                  Pedir presupuesto
                </span>
              </a>
            </div>
          </article>

          {/* Nivel 4 — El Bolsillo (full width, cierre del bento) */}
          <article className="md:col-span-4 border-2 border-black p-[clamp(1.5rem,4vw,3rem)] flex flex-col md:flex-row md:items-stretch justify-between gap-[clamp(1.5rem,3vw,2.5rem)] bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300">
            <div className="flex flex-col gap-[1rem] flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-[1rem]">
                <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                  Nivel 04 · El Bolsillo (App Móvil)
                </span>
                <Smartphone size="1.25rem" className="shrink-0" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter break-words hyphens-auto">
                Apps Nativas
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-[40rem] break-words">
                Lleva tu idea directamente al bolsillo de tus usuarios.
                Desarrollo nativo de alto rendimiento, interfaces fluidas y
                experiencia premium.
              </p>

              <ul className="flex flex-wrap gap-[0.5rem] mt-[0.25rem]">
                {["Android", "Kotlin", "Jetpack Compose", "Firebase"].map(
                  (tag) => (
                    <li
                      key={tag}
                      className="text-[clamp(0.6rem,2.2vw,0.7rem)] font-bold border border-current px-[0.6rem] py-[0.25rem] uppercase tracking-wider md:tracking-widest leading-tight whitespace-nowrap"
                    >
                      {tag}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="flex flex-wrap items-end justify-between md:flex-col md:items-end md:justify-between gap-[1rem] pt-[1rem] md:pt-0 md:pl-[clamp(1.5rem,3vw,2.5rem)] border-t md:border-t-0 md:border-l border-current/30">
              <div className="flex flex-col md:items-end">
                <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
                  Desde
                </span>
                <span className="text-3xl md:text-4xl font-black tracking-tighter">
                  1.500€
                </span>
              </div>
              <a
                href={mailto("Presupuesto · El Bolsillo (App Móvil)")}
                className="inline-flex items-center gap-[0.5rem] bg-current px-[1.25rem] py-[0.65rem] text-sm font-black uppercase tracking-[0.1em] hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
              >
                <span className="text-white mix-blend-difference">
                  Pedir presupuesto
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Sección 2: Justificación tecnológica */}
      <section
        aria-labelledby="por-que-nosotros"
        className="flex flex-col gap-[2.5rem]"
      >
        <SectionTitle id="por-que-nosotros">Por qué nosotros</SectionTitle>

        <p className="text-base md:text-lg max-w-[42rem] leading-relaxed">
          No usamos plantillas genéricas. Cada proyecto sale del taller con
          tres garantías técnicas no negociables — son las mismas que aplicamos
          a nuestros propios productos.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          {PILARES.map(({ icono: Icono, titulo, descripcion }) => (
            <li
              key={titulo}
              className="border-2 border-black p-[1.75rem] flex flex-col gap-[1rem] hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300"
            >
              <Icono size="1.75rem" className="shrink-0" />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter break-words">
                {titulo}
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                {descripcion}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA final */}
      <section
        aria-labelledby="cta-final"
        className="border-2 border-black bg-black text-white p-[2.5rem] md:p-[4rem] flex flex-col gap-[2rem]"
      >
        <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
          Primera sesión sin coste
        </span>
        <h2
          id="cta-final"
          className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-[900] uppercase tracking-tighter leading-[0.95] break-words hyphens-auto"
        >
          ¿Listo para sacar tu invento del cajón?
        </h2>
        <p className="text-base md:text-lg max-w-[42rem] leading-relaxed opacity-90 break-words">
          Cuéntanos tu idea en una sesión de consultoría sin compromiso.
          Salimos con un plan, un alcance y un precio cerrado.
        </p>

        <div className="flex flex-wrap gap-[0.75rem] mt-[1rem]">
          <a
            href={mailto("Reserva · Primera sesión de consultoría")}
            className="inline-flex items-center gap-[0.5rem] bg-white text-black border-2 border-white px-[2rem] py-[1rem] text-sm font-black uppercase tracking-[0.1em] hover:bg-transparent hover:text-white hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
          >
            <Mail size="1rem" className="shrink-0" />
            Reservar primera sesión
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-[0.5rem] bg-transparent text-white border-2 border-white px-[2rem] py-[1rem] text-sm font-black uppercase tracking-[0.1em] hover:bg-white hover:text-black hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out break-all"
          >
            {EMAIL}
            <ArrowUpRight size="1rem" className="shrink-0" />
          </a>
        </div>
      </section>
    </main>
  );
}
