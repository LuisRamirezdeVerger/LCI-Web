"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";

const ENLACES = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/nuestro-taller", etiqueta: "Nuestro Taller" },
  { href: "/sobre-nosotros", etiqueta: "Sobre Nosotros" },
] as const;

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // useRef → no dispara re-render con cada actualización del scroll
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);

    // Resolución dinámica de "1rem en píxeles" a partir del root font-size
    // real del usuario. Si tiene accesibilidad activada con tamaño > 16px,
    // los thresholds escalan con él automáticamente.
    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    const HIDE_DELTA = 5 * oneRem; // 5rem hacia abajo → ocultar
    const SHOW_DELTA = 1 * oneRem; // 1rem hacia arriba → mostrar
    const TOP_ZONE = 2 * oneRem;   // 2rem desde el top → siempre visible

    lastScrollY.current = window.scrollY;
    let rafId: number | null = null;

    const evaluate = () => {
      rafId = null;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < TOP_ZONE) {
        setIsScrolled(false);
        lastScrollY.current = currentY;
        return;
      }
      if (delta > HIDE_DELTA) {
        // Bajada significativa → ocultar menú
        setIsScrolled(true);
        lastScrollY.current = currentY;
      } else if (delta < -SHOW_DELTA) {
        // Subida significativa → mostrar menú
        setIsScrolled(false);
        lastScrollY.current = currentY;
      }
      // Zona muerta entre thresholds: NO se actualiza estado ni lastScrollY.
      // Esto es la histéresis: micro-movimientos no producen flicker.
    };

    const onScroll = () => {
      // Coalescemos múltiples eventos en un solo rAF para no saturar el render
      if (rafId !== null) return;
      rafId = requestAnimationFrame(evaluate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const showCompact = isMounted && isScrolled;

  return (
    <nav className="backdrop-blur bg-white/75 w-full sticky top-0 z-50 border-b-2 border-black px-[5%]">
      {/* Vista compacta — solo en móvil cuando hay scroll */}
      <div
        aria-hidden={!showCompact}
        className={`md:hidden flex items-center justify-center overflow-hidden transition-all duration-300 ease-out ${
          showCompact
            ? "max-h-[5rem] py-[1.5rem] opacity-100 translate-y-0"
            : "max-h-0 py-0 opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="text-[1rem] font-[900] tracking-tighter text-black uppercase active:opacity-60 transition-opacity duration-300"
        >
          LA CASA DE LOS INVENTOS
        </Link>
      </div>

      {/* Vista completa — siempre en desktop, oculta en móvil con scroll */}
      <div
        aria-hidden={showCompact}
        className={`flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 ease-out gap-[1rem] md:gap-0 md:min-h-[10dvh] md:max-h-none md:py-0 md:opacity-100 md:translate-y-0 md:pointer-events-auto ${
          showCompact
            ? "max-h-0 py-0 opacity-0 -translate-y-full pointer-events-none"
            : "max-h-[24rem] py-[2rem] opacity-100 translate-y-0"
        }`}
      >
        <Link
          href="/"
          className="text-[1.2rem] font-[900] tracking-tighter text-black uppercase"
        >
          LA CASA DE LOS INVENTOS
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[2.5rem] text-[clamp(0.65rem,2vw,0.85rem)] font-bold text-black uppercase tracking-wider md:tracking-[0.1em] leading-tight">
          {ENLACES.map(({ href, etiqueta }) => (
            <NavLink key={href} href={href}>
              {etiqueta}
            </NavLink>
          ))}
          <NavLink href="/contacto" variant="cta">
            Contacto
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
