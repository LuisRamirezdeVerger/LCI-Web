import Link from "next/link";
import { NavLink } from "./NavLink";

const ENLACES = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/nuestro-taller", etiqueta: "Nuestro Taller" },
  { href: "/sobre-nosotros", etiqueta: "Sobre Nosotros" },
] as const;

export const Navbar = () => {
  return (
    <nav className="backdrop-blur bg-white/75 w-full min-h-[10vh] flex flex-col md:flex-row items-center justify-between px-[5%] py-[1rem] md:py-0 border-b-2 border-black sticky top-0 z-50">
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
    </nav>
  );
};
