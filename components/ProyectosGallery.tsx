"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";

interface CardProps {
  project: Project;
  isActive: boolean;
  cardRef: (el: HTMLElement | null) => void;
}

const ProjectCard = ({ project, isActive, cardRef }: CardProps) => (
  <article
    ref={cardRef}
    data-id={project.id}
    data-active={isActive}
    className={`group/card relative cursor-pointer border-2 border-black rounded-[clamp(0.5rem,1vw,1.5rem)] p-[clamp(1.5rem,3vw,3rem)] bg-white text-black group-hover/grid:scale-[0.85] group-data-[has-active=true]/grid:scale-[0.85] hover:bg-black hover:text-white hover:!scale-[1.08] hover:z-10 data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:!scale-[1.08] data-[active=true]:z-10 hover:shadow-[0_clamp(1rem,2vw,2rem)_clamp(2rem,4vw,4rem)_rgba(0,0,0,0.25)] data-[active=true]:shadow-[0_clamp(1rem,2vw,2rem)_clamp(2rem,4vw,4rem)_rgba(0,0,0,0.25)] will-change-transform transition-all duration-500 ease-out overflow-hidden ${
      project.featured ? "md:col-span-2 md:row-span-2" : ""
    }`}
  >
    {project.gradient && (
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-100 group-data-[active=true]/card:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
    )}
    <div className="relative z-10 flex flex-col justify-between gap-[1.5rem] h-full group-hover/card:text-white group-data-[active=true]/card:text-white transition-colors duration-500">
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

interface GridProps {
  projects: Project[];
  activeId: string | null;
  registerRef: (id: string) => (el: HTMLElement | null) => void;
}

const ProjectsGrid = ({ projects, activeId, registerRef }: GridProps) => {
  const hasActive = activeId != null && projects.some((p) => p.id === activeId);
  return (
    <div
      data-has-active={hasActive}
      className="group/grid grid grid-cols-1 md:grid-cols-3 md:auto-rows-[16rem] gap-[clamp(1rem,2vw,2rem)]"
    >
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          isActive={activeId === p.id}
          cardRef={registerRef(p.id)}
        />
      ))}
    </div>
  );
};

export const ProyectosGallery = () => {
  const clientProjects = PROJECTS.filter((p) => p.category === "client");
  const internalProjects = PROJECTS.filter((p) => p.category === "internal");
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const cardsRef = useRef<Map<string, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Solo en móvil — en desktop dominan los estados :hover del cursor.
    const mql = window.matchMedia("(min-width: 48rem)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (!id) return;
          if (entry.isIntersecting) intersectingRef.current.add(id);
          else intersectingRef.current.delete(id);
        });
        const first =
          intersectingRef.current.values().next().value ?? null;
        setActiveCard(first);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    observerRef.current = observer;
    cardsRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      observerRef.current = null;
      intersectingRef.current.clear();
    };
  }, []);

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    const prev = cardsRef.current.get(id);
    if (prev && observerRef.current) observerRef.current.unobserve(prev);
    if (el) {
      cardsRef.current.set(id, el);
      observerRef.current?.observe(el);
    } else {
      cardsRef.current.delete(id);
      intersectingRef.current.delete(id);
    }
  };

  return (
    <>
      <section
        aria-labelledby="destacados"
        className="flex flex-col gap-[clamp(2rem,4dvh,3rem)]"
      >
        <SectionTitle id="destacados">Proyectos Destacados</SectionTitle>
        <ProjectsGrid
          projects={clientProjects}
          activeId={activeCard}
          registerRef={registerRef}
        />
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
              <ProjectsGrid
                projects={internalProjects}
                activeId={activeCard}
                registerRef={registerRef}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
