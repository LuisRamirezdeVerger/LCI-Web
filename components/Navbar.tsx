"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "./NavLink";

const ENLACES = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/sobre-nosotros", etiqueta: "Sobre Nosotros" },
] as const;

export const Navbar = () => {
  const pathname = usePathname();
  const contactoActivo = pathname === "/contacto";

  return (
    <nav className="backdrop-blur bg-white/75 w-full min-h-[10vh] flex flex-col md:flex-row items-center justify-between px-[5%] py-[1rem] md:py-0 border-b-2 border-black sticky top-0 z-50">
      <div className="text-[1.2rem] font-black tracking-tighter text-black">
        <Link
          href="/"
          className="text-[1.2rem] font-[900] tracking-tighter text-black uppercase cursor-pointer"
        >
          LA CASA DE LOS INVENTOS
        </Link>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[2.5rem] text-[0.7rem] md:text-[0.85rem] font-bold text-black uppercase tracking-[0.1em]">
        {ENLACES.map(({ href, etiqueta }) => (
          <NavLink key={href} href={href}>
            {etiqueta}
          </NavLink>
        ))}

        <li
          className={`rounded-full transition-all text-[0.65rem] md:text-[0.85rem] ${contactoActivo ? "bg-gray-800" : "bg-black hover:bg-gray-800"}`}
        >
          <Link
            href="/contacto"
            className="inline-block text-white px-[1rem] py-[0.5rem] md:px-[1.5rem] md:py-[0.7rem]"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
