"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  // Función para determinar si el link está activo
  const isActive = (path: string) => pathname === path;

  return (
    // 'sticky top-0' para que te siga al bajar, 'backdrop-blur' para efecto cristal
    <nav className="backdrop-blur bg-white/75 w-full min-h-[10vh] flex flex-col md:flex-row items-center justify-between px-[5%] py-4 md:py-0 border-b-2 border-black sticky top-0 z-50">
      <div className="text-[1.2rem] font-black tracking-tighter text-black">
        <Link
          href="/"
          className="text-[1.2rem] font-[900] tracking-tighter text-black uppercase cursor-pointer"
        >
          LA CASA DE LOS INVENTOS
        </Link>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[2.5rem] text-[0.7rem] md:text-[0.85rem] font-bold text-black uppercase tracking-[0.1em]">
        {/* Inicio */}
        <li className="relative group cursor-pointer transition-colors">
          <Link
            href="/"
            className={`${isActive("/") ? "text-black" : "text-gray-400 hover:text-black"} transition-colors`}
          >
            Inicio
          </Link>
          <div
            className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </li>

        {/* Proyectos */}
        <li className="relative group cursor-pointer transition-colors">
          <Link
            href="/proyectos"
            className={`${isActive("/proyectos") ? "text-black" : "text-gray-400 hover:text-black"} transition-colors`}
          >
            Proyectos
          </Link>
          <div
            className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${isActive("/proyectos") ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </li>

        {/* Sobre mí */}
        <li className="relative group cursor-pointer transition-colors">
          <Link
            href="/sobre-mi"
            className={`${isActive("/sobre-mi") ? "text-black" : "text-gray-400 hover:text-black"} transition-colors`}
          >
            Sobre mí
          </Link>
          <div
            className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${isActive("/sobre-mi") ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </li>

        {/* Botón Contacto */}
        <li
          className={`rounded-full transition-all text-[0.65rem] md:text-[0.85rem] ${isActive("/contacto") ? "bg-gray-800" : "bg-black hover:bg-gray-800"}`}
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
