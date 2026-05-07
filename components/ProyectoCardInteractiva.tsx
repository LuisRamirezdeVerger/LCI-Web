"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Proyecto } from "@/lib/proyectos";

/**
 * Extrae el color CSS del fragmento `hover:to-...` del string Tailwind.
 * Soporta valores arbitrarios `[#RRGGBB]` y palabras clave CSS (`black`, `white`).
 * Devuelve null si el token no es un valor CSS directo (p.ej. `blue-800`),
 * de modo que el efecto de scroll degrada con elegancia a "sin fondo activo".
 */
function extraerColorTo(claseColor: string): string | null {
  const match = claseColor.match(/hover:to-(?:\[([^\]]+)\]|(\S+))/);
  if (!match) return null;
  const valor = match[1] ?? match[2];
  if (valor === "black" || valor === "white") return valor;
  if (valor.startsWith("#")) return valor;
  return null;
}

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
    // En desktop (≥ 48rem = 768px) preservamos el comportamiento original de :hover.
    const mql = window.matchMedia("(min-width: 48rem)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEnFoco(entry.isIntersecting),
      // El recorte deja una banda central del 40% del viewport como "foco de lectura".
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const colorFondo = extraerColorTo(proyecto.color);
  const styleActivo: CSSProperties | undefined =
    enFoco && colorFondo
      ? { backgroundColor: colorFondo, color: "#ffffff" }
      : undefined;

  return (
    <article
      ref={ref}
      style={styleActivo}
      className={`group border-2 border-black p-[2rem] flex flex-col justify-between bg-gradient-to-br ${proyecto.color} hover:text-white transition-colors duration-500`}
    >
      {children}
    </article>
  );
};
