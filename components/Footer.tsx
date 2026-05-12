import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white px-[5%] py-[2rem] border-t-2 border-black">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[2rem] md:gap-[5rem] text-center sm:text-left">
        
        {/* Branding */}
        <div className="flex flex-col items-center sm:items-start gap-[1.2rem]">
          <h2 className="text-[1.5rem] font-[900] tracking-tighter uppercase leading-none break-words">
            La Casa de <br /> los Inventos
          </h2>
          <p className="text-center sm:text-left mt-[0.3rem] text-[0.8rem] text-gray-400 max-w-[15rem]">
            Desarrollo profesional con enfoque en privacidad e innovación.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center sm:items-start gap-[1.2rem]">
          <h3 className="text-[0.7rem] uppercase font-black tracking-[0.2em] text-gray-500">Contacto</h3>
          
          <a href="mailto:lacasadelosinventos@gmail.com" className="flex items-center gap-[0.8rem] hover:text-gray-400 active:text-gray-400 transition-colors duration-300 group break-all">
            <Mail size="1.125rem" className="shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[0.9rem]">lacasadelosinventos@gmail.com</span>
          </a>

          <a href="tel:+34680300273" className="flex items-center gap-[0.8rem] hover:text-gray-400 active:text-gray-400 transition-colors duration-300 group">
            <Phone size="1.125rem" className="shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[0.9rem]">+34 680 300 273</span>
          </a>
        </div>

          {/* Redes Sociales */}
      </div>

      {/* Copyright */}
      <div className="mt-[0.3rem] pt-[0.3rem] border-t border-white/10 flex justify-between text-[0.7rem] font-bold text-gray-600 uppercase tracking-widest">
        <span>© {currentYear} Luis Ramírez de Verger a.k.a Wito</span>
      </div>
    </footer>
  );
};