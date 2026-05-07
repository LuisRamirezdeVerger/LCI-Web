"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface MetodologiaInteractivaProps {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
}

export const MetodologiaInteractiva = ({
  icono,
  titulo,
  descripcion,
}: MetodologiaInteractivaProps) => {
  const ref = useRef<HTMLElement>(null);
  const [enFoco, setEnFoco] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop (≥ 48rem) preserva el comportamiento de :hover sin observer.
    const mql = window.matchMedia("(min-width: 48rem)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEnFoco(entry.isIntersecting),
      // Banda central del 40% del viewport — mismo "foco de lectura" que el resto
      // de cards interactivas de la app (ProyectoCardInteractiva, TechItemInteractivo).
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const focoClasses = enFoco ? "bg-black text-white" : "";

  return (
    <article
      ref={ref}
      className={`group border-2 border-black p-[2rem] flex flex-col gap-[1rem] hover:bg-black hover:text-white transition-colors duration-300 ${focoClasses}`}
    >
      <div className="flex items-center gap-[0.8rem]">
        {icono}
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
          {titulo}
        </h3>
      </div>
      <p className="text-base md:text-lg leading-relaxed opacity-90">
        {descripcion}
      </p>
    </article>
  );
};
