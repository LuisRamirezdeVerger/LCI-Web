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

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect 1 — Mount gate. Solo marca el árbol como hidratado en cliente.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect 2 — Observador. Solo se conecta cuando el árbol ya está hidratado.
  useEffect(() => {
    if (!isMounted) return;
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isMounted]);

  const showCompact = isMounted && isScrolled;

  return (
    <nav className="w-full sticky top-0 z-50 border-b-2 border-black bg-white/95 md:bg-white/75 md:backdrop-blur-md">
      {/* Contenedor con position:relative para anclar la vista compacta absoluta.
          La altura la define la vista completa en flujo — constante para cualquier
          estado de scroll. NO se anima max-h ni padding. */}
      <div className="relative px-[5%]">
        {/* Vista completa — en flujo, define la altura del nav */}
        <div
          aria-hidden={showCompact}
          className={`flex flex-col md:flex-row items-center justify-between gap-[1rem] md:gap-0 py-[2rem] md:py-0 md:min-h-[10dvh] will-change-transform transition-[opacity,transform] duration-300 ease-in-out ${
            showCompact
              ? "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
              : "opacity-100 translate-y-0"
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

        {/* Vista compacta — overlay absoluto (solo móvil) */}
        <div
          aria-hidden={!showCompact}
          className={`md:hidden absolute inset-0 flex items-center justify-center will-change-transform transition-[opacity,transform] duration-300 ease-in-out ${
            showCompact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <Link
            href="/"
            className="text-[1rem] font-[900] tracking-tighter text-black uppercase active:opacity-60 transition-opacity duration-300"
          >
            LA CASA DE LOS INVENTOS
          </Link>
        </div>
      </div>
    </nav>
  );
};
