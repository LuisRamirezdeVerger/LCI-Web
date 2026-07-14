"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    tabIndex={0}
    className={`group/card relative cursor-pointer border-2 border-black rounded-[clamp(0.5rem,1vw,1.5rem)] p-[clamp(1.5rem,3vw,3rem)] bg-white text-black group-hover:scale-[0.85] group-focus-within:scale-[0.85] hover:bg-black hover:text-white hover:!scale-[1.08] hover:z-10 focus:!scale-[1.08] focus:z-10 active:!scale-[1.08] active:z-10 active:bg-black active:text-white focus:bg-black focus:text-white hover:shadow-[0_clamp(1rem,2vw,2rem)_clamp(2rem,4vw,4rem)_rgba(0,0,0,0.25)] focus:outline-none will-change-transform transition-all duration-500 ease-out overflow-hidden ${
      project.featured ? "md:col-span-2 md:row-span-2" : ""
    }`}
  >
    {project.gradient && (
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-100 group-focus/card:opacity-100 group-active/card:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
    )}
    <div className="relative z-10 flex flex-col justify-between gap-[1.5rem] h-full group-hover/card:text-white group-focus/card:text-white group-active/card:text-white transition-colors duration-500">
      <span className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70">
        {project.discipline}
      </span>
      <div className="flex flex-col gap-[0.75rem]">
        <h3
          className={`font-black uppercase tracking-tighter leading-none break-words hyphens-auto ${
            project.featured
              ? "text-[clamp(1.75rem,5vw,3rem)]"
              : "text-[clamp(1.25rem,3.5vw,1.875rem)]"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-[clamp(0.85rem,2vw,1rem)] leading-relaxed opacity-90 break-words">
          {project.description}
        </p>
      </div>
    </div>
  </article>
);

const ProjectsGrid = ({ projects }: { projects: Project[] }) => (
  <div className="group grid grid-cols-1 md:grid-cols-3 md:auto-rows-[16rem] gap-[clamp(1rem,2vw,2rem)]">
    {projects.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}
  </div>
);

export const ProyectosGallery = () => {
  const clientProjects = PROJECTS.filter((p) => p.category === "client");
  const internalProjects = PROJECTS.filter((p) => p.category === "internal");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        aria-labelledby="destacados"
        className="flex flex-col gap-[clamp(2rem,4dvh,3rem)]"
      >
        <SectionTitle id="destacados">Proyectos Destacados</SectionTitle>
        <ProjectsGrid projects={clientProjects} />
      </section>

      <section
        aria-labelledby="labs"
        className="mt-[clamp(3rem,5vw,5rem)] flex flex-col items-center gap-[clamp(2rem,4dvh,3rem)]"
      >
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="labs-panel"
          className="group/toggle inline-flex items-center gap-[0.75rem] border-2 border-black rounded-full px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1.25rem)] bg-white text-black font-black uppercase tracking-wider md:tracking-[0.15em] text-[clamp(0.7rem,1.8vw,0.9rem)] leading-tight hover:bg-black hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out"
        >
          {isOpen ? "Ocultar Laboratorio" : "Desbloquear Laboratorio"}
          <ChevronDown
            size="1.1rem"
            className={`shrink-0 transition-transform duration-500 ease-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          id="labs-panel"
          className={`grid w-full transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-[clamp(2rem,4vw,4rem)]"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="[margin:calc(clamp(1.5rem,3vw,3rem)*-1)] p-[clamp(1.5rem,3vw,3rem)] flex flex-col gap-[clamp(2rem,4dvh,3rem)]">
              <div>
                <SectionTitle id="labs">
                  Laboratorio de La Casa de los Inventos
                </SectionTitle>
                <p className="text-gray-400 text-[clamp(0.875rem,1.2vw,1rem)] mt-[clamp(0.5rem,1vw,1rem)]">
                  Nuestras ideas y proyectos internos en fase de desarrollo.
                </p>
              </div>
              <ProjectsGrid projects={internalProjects} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
