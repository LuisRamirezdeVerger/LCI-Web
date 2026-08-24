import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";

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
  return { title: project.title, description: project.description };
}

export default async function ProyectoDetallePage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-[100svh] w-full bg-white text-black px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)]">
      <Link
        href="/proyectos"
        className="inline-flex items-center gap-[0.5rem] self-start text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight hover:opacity-60 active:scale-[0.98] transition-all duration-300"
      >
        <ArrowLeft size="1rem" className="shrink-0" />
        Volver a proyectos
      </Link>

      <header className="flex flex-col gap-[clamp(1rem,2dvh,1.5rem)] max-w-[48rem]">
        <span className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70">
          {project.discipline}
        </span>
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-[900] uppercase tracking-tighter leading-[0.9] break-words hyphens-auto">
          {project.title}
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.35rem)] leading-relaxed text-black/80 break-words">
          {project.description}
        </p>
      </header>
    </main>
  );
}
