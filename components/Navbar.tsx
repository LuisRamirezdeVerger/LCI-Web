"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";

const ENLACES = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/nuestro-taller", etiqueta: "Nuestro Taller" },
  { href: "/sobre-nosotros", etiqueta: "Sobre Nosotros" },
] as const;

// Distancia en píxeles del scroll del viewport antes de colapsar el navbar.
// Es un valor de comparación interna del DOM, no un estilo CSS renderizado.
const UMBRAL_SCROLL = 50;

export const Navbar = () => {
  // Ambos states inicializados en `false` literal — sin acceso a `window`.
  // Esto garantiza que el primer render del cliente sea idéntico al del
  // servidor → cero divergencias durante la hidratación.
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1) Marcar el componente como montado tras la hidratación.
    setIsMounted(true);

    // 2) Toda la lectura de `window` vive AQUÍ, dentro del effect — que
    //    React solo ejecuta en el cliente y después del primer paint.
    const onScroll = () => setIsScrolled(window.scrollY > UMBRAL_SCROLL);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Sincroniza el estado por si la página carga ya scrolleada.
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gate de doble candado: la vista compacta solo se activa cuando
  // sabemos a ciencia cierta (a) que estamos en cliente y (b) que el
  // usuario ha scrolleado.
  const showCompact = isMounted && isScrolled;

  return (
    <nav className="backdrop-blur bg-white/75 w-full sticky top-0 z-50 border-b-2 border-black px-[5%]">
      {/* Vista compacta — solo en móvil cuando hay scroll */}
      <div
        aria-hidden={!showCompact}
        className={`md:hidden flex items-center justify-center overflow-hidden transition-all duration-300 ease-out ${
          showCompact
            ? "max-h-[5rem] py-[1.5rem] opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-[1rem] font-[900] tracking-tighter text-black uppercase">
          LA CASA DE LOS INVENTOS
        </span>
      </div>

      {/* Vista completa — siempre en desktop, oculta en móvil con scroll */}
      <div
        className={`flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 ease-out gap-[1rem] md:gap-0 md:min-h-[10vh] md:max-h-none md:py-0 md:opacity-100 md:pointer-events-auto ${
          showCompact
            ? "max-h-0 py-0 opacity-0 pointer-events-none"
            : "max-h-[24rem] py-[2rem] opacity-100"
        }`}
      >
        <Link
          href="/"
          className="text-[1.2rem] font-[900] tracking-tighter text-black uppercase"
        >
          LA CASA DE LOS INVENTOS
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[2.5rem] text-[0.7rem] md:text-[0.85rem] font-bold text-black uppercase tracking-[0.1em]">
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
