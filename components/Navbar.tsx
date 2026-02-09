import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    // h-[10vh] asegura que el alto sea relativo a la pantalla
    // bg-inventor-oscuro usa el color que definiste en el config
    <nav className="w-full h-[10vh] bg-inventor-oscuro text-white flex items-center justify-between px-[5%] shadow-md">
      <div className="text-[1.5rem] font-bold tracking-tighter">
        INVENTOS<span className="text-inventor-acento">.LAB</span>
      </div>
      
      <ul className="flex gap-[2rem] text-[1rem] font-medium">
        <li className="hover:text-inventor-acento transition-colors cursor-pointer">
          <Link href="/">Inicio</Link>
        </li>
        <li className="hover:text-inventor-acento transition-colors cursor-pointer">
          <Link href="/inventos">Proyectos</Link>
        </li>
        <li className="px-[1rem] py-[0.4rem] bg-inventor-principal rounded-inventor-sm hover:opacity-90 transition-opacity">
          Contacto
        </li>
      </ul>
    </nav>
  );
};