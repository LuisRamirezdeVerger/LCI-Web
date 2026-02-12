import React from "react";
import { Mail, Linkedin, GithubIcon, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-bloque px-[5%] border-t-2 border-black bg-white flex flex-col md:flex-row justify-between items-center gap-[1rem]">
      <div className="text-[0.8rem] font-black uppercase tracking-tighter">
        @{currentYear} LA CASA DE LOS INVENTOS. Todos los derechos reservados.
      </div>
      <div className="flex gap-[2rem] text-[0.7rem] font-bold uppercase tracking-widest text-gray-400">
        <span>Diseñado por Wito</span>
        <span className="text-black">Desarrollado en React</span>
      </div>
    </footer>
  );
};
