"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";

const ENLACES = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/nuestro-taller", etiqueta: "Nuestro Taller" },
  { href: "/sobre-nosotros", etiqueta: "Sobre Nosotros" },
] as const;

// Clases que mutan según el estado del scroll. Se extraen como tuplas para
// que `classList.add/remove` reciba string[] sin overhead de parsing en cada
// frame. Mantenerlas fuera del componente garantiza referencia estable.
const FULL_VISIBLE = ["max-h-[24rem]", "py-[2rem]", "opacity-100"] as const;
const FULL_HIDDEN = [
  "max-h-0",
  "py-0",
  "opacity-0",
  "pointer-events-none",
] as const;
const COMPACT_VISIBLE = ["max-h-[5rem]", "py-[1.5rem]", "opacity-100"] as const;
const COMPACT_HIDDEN = [
  "max-h-0",
  "py-0",
  "opacity-0",
  "pointer-events-none",
] as const;

export const Navbar = () => {
  // Refs a los dos contenedores. Toda la animación se conduce desde aquí,
  // sin pasar por el reconciler de React.
  const fullRef = useRef<HTMLDivElement>(null);
  const compactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fullEl = fullRef.current;
    const compactEl = compactRef.current;
    if (!fullEl || !compactEl) return;

    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    // DELTA de tolerancia (1rem): filtro paso-bajo contra el jitter del
    // touch en móvil. Por debajo de este umbral el movimiento se ignora.
    const DELTA = 1 * oneRem;
    // Zona superior: cerca del top el menú completo siempre es visible.
    const TOP_ZONE = 2 * oneRem;

    let lastScrollY = window.scrollY;
    // Estado local en clausura, NO en React. Evita por completo el ciclo
    // render → reconciliation → commit que rompía la transición CSS.
    let isCompact = false;
    let rafId: number | null = null;

    const setCompact = (next: boolean) => {
      if (next === isCompact) return; // idempotencia: nada que hacer
      isCompact = next;

      if (next) {
        // Mostrar versión condensada (logo), ocultar versión completa.
        fullEl.classList.remove(...FULL_VISIBLE);
        fullEl.classList.add(...FULL_HIDDEN);
        fullEl.setAttribute("aria-hidden", "true");

        compactEl.classList.remove(...COMPACT_HIDDEN);
        compactEl.classList.add(...COMPACT_VISIBLE);
        compactEl.setAttribute("aria-hidden", "false");
      } else {
        // Restaurar versión completa, ocultar condensada.
        fullEl.classList.remove(...FULL_HIDDEN);
        fullEl.classList.add(...FULL_VISIBLE);
        fullEl.setAttribute("aria-hidden", "false");

        compactEl.classList.remove(...COMPACT_VISIBLE);
        compactEl.classList.add(...COMPACT_HIDDEN);
        compactEl.setAttribute("aria-hidden", "true");
      }
    };

    const evaluate = () => {
      rafId = null;
      const currentScrollY = window.scrollY;

      // 1) Anclaje al top: dentro de la zona superior, expandido siempre.
      if (currentScrollY < TOP_ZONE) {
        lastScrollY = currentScrollY;
        setCompact(false);
        return;
      }

      // 2) Filtro de tolerancia. NO actualizamos lastScrollY: dejamos que
      //    los micro-movimientos se acumulen hasta cruzar DELTA de verdad.
      if (Math.abs(currentScrollY - lastScrollY) < DELTA) return;

      // 3) Dirección inequívoca tras cruzar el umbral.
      const goingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
      setCompact(goingDown);
    };

    const onScroll = () => {
      // Coalescencia: un solo evaluate por frame de pintado.
      if (rafId !== null) return;
      rafId = requestAnimationFrame(evaluate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className="backdrop-blur bg-white/75 w-full sticky top-0 z-50 border-b-[0.125rem] border-black px-[5%]">
      {/* Vista compacta — solo móvil. Estado inicial: oculta.
          Las clases de transición viven en el className base, no se tocan.
          Solo mutamos las clases binarias de visibilidad vía classList. */}
      <div
        ref={compactRef}
        aria-hidden="true"
        className="md:hidden flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out max-h-0 py-0 opacity-0 pointer-events-none"
      >
        <Link
          href="/"
          className="text-[1rem] font-[900] tracking-tighter text-black uppercase active:opacity-60 transition-opacity duration-300"
        >
          LA CASA DE LOS INVENTOS
        </Link>
      </div>

      {/* Vista completa — siempre en desktop, oculta en móvil con scroll.
          Estado inicial: visible. Las utilidades md: garantizan que en
          desktop nunca se respeten los valores móviles (max-h-none,
          opacity-100, pointer-events-auto) aunque el listener intente
          ocultarla — defensa en profundidad contra resize cross-breakpoint. */}
      <div
        ref={fullRef}
        aria-hidden="false"
        className="flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 ease-in-out gap-[1rem] md:gap-0 md:min-h-[10dvh] md:max-h-none md:py-0 md:opacity-100 md:pointer-events-auto max-h-[24rem] py-[2rem] opacity-100"
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
