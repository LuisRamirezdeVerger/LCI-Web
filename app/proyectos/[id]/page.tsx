import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Code2,
  Crown,
  Database,
  KeyRound,
  Layers,
  Lock,
  Music,
  Palette,
  Star,
  ScrollText,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, type IconKey } from "@/data/projects";

const ICONS: Record<IconKey, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  layers: Layers,
  zap: Zap,
  database: Database,
  scroll: ScrollText,
  crown: Crown,
  wrench: Wrench,
  music: Music,
  key: KeyRound,
  shield: ShieldCheck,
  server: Server,
  bolt: Zap,
  bell: Bell,
  palette: Palette,
  users: Users,
  calendar: CalendarDays,
  star: Star,
  lock: Lock,
};

const H2 =
  "text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter wrap-break-word hyphens-auto";
const EYEBROW =
  "text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70";
const VOLVER =
  "inline-flex items-center gap-2 self-start text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight hover:opacity-60 active:scale-[0.98] transition-all duration-300";
const CARD =
  "border-2 border-black p-6 flex flex-col gap-3 transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98]";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.caseStudy ? `${project.title} · Caso de Estudio` : project.title,
    description: project.caseStudy?.tagline ?? project.description,
  };
}

export default async function ProyectoDetallePage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <main className="min-h-svh w-full bg-white text-black px-8 md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-24 flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-24">
      {/* Navegación flotante — glassmorphism */}
      <nav className="fixed bottom-[clamp(5.5rem,10svh,6.5rem)] right-[clamp(1.5rem,3vw,3rem)] z-50">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.65rem,2vw,0.8rem)] font-bold uppercase tracking-wider leading-tight shadow-lg hover:bg-black/80 hover:translate-y-[-0.15rem] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
        >
          <ArrowLeft size="1rem" className="shrink-0" aria-hidden="true" />
          Volver a proyectos
        </Link>
      </nav>

      {/* HERO */}
      <header className="flex flex-col gap-8 animate-fade-in-up">
        <span className={EYEBROW}>{project.discipline}</span>

        <h1
          className={`text-[2.5rem] sm:text-[4rem] md:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] wrap-break-word hyphens-auto pb-[0.1em] ${
            project.gradient
              ? `bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`
              : ""
          }`}
        >
          {project.title}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          {cs?.tagline ?? project.description}
        </p>

        {cs?.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-[clamp(0.6rem,2.2vw,0.7rem)] font-bold border-2 border-black px-3 py-1.5 uppercase tracking-wider md:tracking-widest leading-tight whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* STACK · BENTO */}
      {cs?.stack && (
        <Reveal>
          <section aria-labelledby="stack" className="flex flex-col gap-10">
            <h2 id="stack" className={H2}>
              Stack tecnológico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[12rem] grid-flow-dense gap-6">
              {cs.stack.map(
                ({ nombre, version, descripcion, icono, cols, invertido }) => {
                  const Icono = ICONS[icono];
                  return (
                    <article
                      key={nombre}
                      className={`${cols} border-2 border-black p-8 flex flex-col justify-between gap-4 transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98] ${
                        invertido ? "bg-black text-white" : "bg-white text-black"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icono size="1.5rem" className="shrink-0" />
                        <span className={EYEBROW}>{version}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter wrap-break-word">
                          {nombre}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed opacity-90 wrap-break-word">
                          {descripcion}
                        </p>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </section>
        </Reveal>
      )}

      {/* ARQUITECTURA */}
      {cs?.arquitectura && (
        <Reveal>
          <section
            aria-labelledby="arquitectura"
            className="flex flex-col gap-10"
          >
            <h2 id="arquitectura" className={H2}>
              {cs.arquitectura.titulo}
            </h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed">
              {cs.arquitectura.intro}
            </p>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.arquitectura.capas.map(({ num, titulo, texto }) => (
                <li key={num} className={CARD}>
                  <span className={EYEBROW}>Capa</span>
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                    {num}
                  </span>
                  <h3 className="text-base md:text-lg font-bold leading-snug">
                    {titulo}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90 wrap-break-word">
                    {texto}
                  </p>
                </li>
              ))}
            </ol>

            <Reveal delay={150}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-black pt-10">
                {cs.arquitectura.metricas.map(({ valor, etiqueta }) => (
                  <li key={etiqueta} className="flex flex-col gap-1">
                    <span className="text-[2.5rem] md:text-[4.5rem] font-black tracking-tighter leading-none wrap-break-word">
                      {valor}
                    </span>
                    <span className="text-[clamp(0.65rem,2.5vw,0.85rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70 wrap-break-word">
                      {etiqueta}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        </Reveal>
      )}

      {/* ROLES */}
      {cs?.roles && (
        <Reveal>
          <section aria-labelledby="roles" className="flex flex-col gap-10">
            <h2 id="roles" className={H2}>
              {cs.roles.titulo}
            </h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed">
              {cs.roles.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.roles.items.map(
                ({ nombre, icono, permisos, descripcion, invertido }) => {
                  const Icono = ICONS[icono];
                  return (
                    <article
                      key={nombre}
                      className={`border-2 border-black p-8 flex flex-col gap-4 transition-colors duration-300 active:scale-[0.98] ${
                        invertido
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white"
                      }`}
                    >
                      <Icono size="2rem" className="shrink-0" />
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                        {nombre}
                      </h3>
                      <p className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-80 wrap-break-word">
                        {permisos}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed opacity-90 wrap-break-word">
                        {descripcion}
                      </p>
                    </article>
                  );
                },
              )}
            </div>
          </section>
        </Reveal>
      )}

      {/* SEGURIDAD */}
      {cs?.seguridad && (
        <Reveal>
          <section
            aria-labelledby="seguridad"
            className="flex flex-col gap-10"
          >
            <h2 id="seguridad" className={H2}>
              {cs.seguridad.titulo}
            </h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed">
              {cs.seguridad.intro}
            </p>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.seguridad.capas.map(({ numero, titulo, icono, descripcion }) => {
                const Icono = ICONS[icono];
                return (
                  <li key={numero} className={`${CARD} gap-4`}>
                    <div className="flex items-center justify-between">
                      <Icono size="1.5rem" className="shrink-0" />
                      <span className={EYEBROW}>{numero}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                      {titulo}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 wrap-break-word">
                      {descripcion}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>
        </Reveal>
      )}

      {/* CTA EXTERNO */}
      {project.externalLink && (
        <Reveal>
          <section
            aria-labelledby="visitar"
            className="flex flex-col items-center gap-6 text-center"
          >
            <h2 id="visitar" className={EYEBROW}>
              Proyecto en producción
            </h2>
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/cta relative inline-flex items-center gap-3 rounded-full px-[clamp(2rem,4vw,4rem)] py-[clamp(1rem,2vw,2rem)] text-[clamp(0.85rem,2vw,1.1rem)] font-black uppercase tracking-wider leading-tight text-white overflow-hidden shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out ${
                project.gradient
                  ? `bg-linear-to-r ${project.gradient}`
                  : "bg-black"
              }`}
            >
              Ir a la página
              <ArrowUpRight size="1.25rem" className="shrink-0 group-hover/cta:translate-x-[0.15rem] group-hover/cta:translate-y-[-0.15rem] transition-transform duration-300" />
            </a>
          </section>
        </Reveal>
      )}

      {/* CIERRE */}
      <Reveal>
        <section className="border-t-2 border-black pt-12 md:pt-16 flex flex-col gap-6">
          <p className={EYEBROW}>
            {cs ? "Caso de estudio" : "Proyecto"}
          </p>
          {cs?.cierre && (
            <p className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight max-w-160 wrap-break-word hyphens-auto">
              {cs.cierre}
            </p>
          )}
          <Link href="/proyectos" className={`${VOLVER} mt-4`}>
            <ArrowLeft size="1rem" className="shrink-0" />
            Volver a proyectos
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
