"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Proyecto } from "@/lib/proyectos";

interface ProyectoCardInteractivaProps {
  proyecto: Proyecto;
  children: ReactNode;
}

export const ProyectoCardInteractiva = ({
  proyecto,
  children,
}: ProyectoCardInteractivaProps) => {
  const ref = useRef<HTMLElement>(null);
  const [enFoco, setEnFoco] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop (≥ 48rem): preservamos el comportamiento de :hover sin observer.
    const mql = window.matchMedia("(min-width: 48rem)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEnFoco(entry.isIntersecting),
      // Banda central del 40% del viewport como "foco de lectura".
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  // Opacidad de la capa de degradado:
  //  - En móvil: 0 ↔ 100 según `enFoco` (scroll observer).
  //  - En desktop (md:): siempre 0 por defecto, 100 en `group-hover`.
  // El conflicto Tailwind se resuelve por especificidad CSS: la regla con `:hover`
  // gana frente a la base en md:, por lo que el cambio se aplica solo al hacer hover.
  const opacidadMovil = enFoco ? "opacity-100" : "opacity-0";

  return (
    <article
      ref={ref}
      className="group relative border-2 border-black bg-white text-black overflow-hidden"
    >
      {/* Capa de degradado: misma fuente de verdad (`colorBranding`) en mobile y desktop.
          Animamos solo `opacity` — soluciona la limitación de CSS para transicionar
          `background-image` (gradients no se interpolan nativamente). */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 ${proyecto.colorBranding} transition-opacity duration-500 ${opacidadMovil} md:opacity-0 md:group-hover:opacity-100`}
      />

      {/* Contenido por encima del degradado. El padding y el flex viven aquí
          para que la capa de fondo pueda extenderse hasta los bordes del article. */}
      <div
        className={`relative z-10 p-[2rem] flex flex-col justify-between h-full transition-colors duration-500 group-hover:text-white ${
          enFoco ? "text-white" : ""
        }`}
      >
        {children}
      </div>
    </article>
  );
};
