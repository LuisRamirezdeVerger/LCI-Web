"use client";

import { useEffect, useRef, useState } from "react";
import { Code2 } from "lucide-react";
import type { Tecnologia } from "@/lib/sobre-nosotros";

export const TechItemInteractivo = ({
  nombre,
  version,
  descripcion,
}: Tecnologia) => {
  const ref = useRef<HTMLLIElement>(null);
  const [enFoco, setEnFoco] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop (≥ 48rem) preserva el comportamiento de :hover sin observer.
    const mql = window.matchMedia("(min-width: 48rem)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEnFoco(entry.isIntersecting),
      // Banda central del 40% del viewport como "foco de lectura".
      // Igual que ProyectoCardInteractiva → coherencia visual entre páginas.
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
    <li
      ref={ref}
      className={`border-2 border-black p-[1.5rem] flex flex-col gap-[0.5rem] hover:bg-black hover:text-white transition-colors duration-300 ${focoClasses}`}
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
  );
};
