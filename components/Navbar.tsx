import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    // 'sticky top-0' para que te siga al bajar, 'backdrop-blur' para efecto cristal
    <nav className="sticky top-0 z-50 w-full h-[10vh] bg-white/80 backdrop-blur-md flex items-center justify-between px-[5%] border-b border-gray-100">
      <div className="text-[1.2rem] font-black tracking-tighter text-black">
        <Link href="/" className="text -[1.2rem] font-[900] tracking-tighter text-black uppercase cursor-pointer">
          LA CASA DE LOS INVENTOS
        </Link>
      </div>
      
      <ul className="flex items-center gap-[2.5rem] text-[0.9rem] font-bold text-black uppercase tracking-widest">
        <li className="hover:text-gray-500 hover:opacity-50 transition-opacity cursor-pointer">
          <Link href="/">Inicio</Link>
        </li>
        <li className="hover:text-gray-500 hover:opacity-50 transition-opacity cursor-pointer">
          <Link href="/proyectos">Proyectos</Link>
        </li>
        <li className="hover:text-gray-500 hover:opacity-50 transition-opacity cursor-pointer">
          <Link href="/sobre-mi">Sobre mí</Link>
        </li>
        <li className="bg-black text-white hover:opacity-50 transition-opacity px-[1.2rem] py-[0.5rem] rounded-full hover:bg-gray-800 transition-all cursor-pointer">
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};