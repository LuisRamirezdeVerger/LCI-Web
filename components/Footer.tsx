import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

/*export const Footer = () => {
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
};*/
export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white p-[5%] border-t-2 border-black">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
        
        {/* Branding */}
        <div className="flex flex-col">
          <h2 className="text-[1.5rem] font-[900] tracking-tighter uppercase leading-none">
            La Casa de <br /> los Inventos
          </h2>
          <p className="mt-[1rem] text-[0.8rem] text-gray-400 max-w-[15rem]">
            Desarrollo profesional con enfoque en privacidad e innovación.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-[1.2rem]">
          <h3 className="text-[0.7rem] uppercase font-black tracking-[0.2em] text-gray-500">Contacto</h3>
          
          <a href="mailto:luis.ramirezdeverger@gmail.com" className="flex items-center gap-[0.8rem] hover:text-gray-400 transition-colors group">
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-[0.9rem]">luis.ramirezdeverger@gmail.com</span>
          </a>
          
          <a href="tel:+34680300273" className="flex items-center gap-[0.8rem] hover:text-gray-400 transition-colors group">
            <Phone size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-[0.9rem]">+34 680 300 273</span>
          </a>
        </div>

        {/* Redes */}
        <div className="flex flex-col gap-[1.2rem]">
          <h3 className="text-[0.7rem] uppercase font-black tracking-[0.2em] text-gray-500">Redes</h3>
          <div className="flex gap-[1.5rem]">
            <a href="https://linkedin.com/in/luis-rdv" target="_blank" className="flex items-center gap-[0.5rem] bg-white text-black px-[1rem] py-[0.5rem] rounded-full font-bold text-[0.8rem] hover:bg-gray-200 transition-all">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/LuisRamirezdeVerger" target="_blank" className="flex items-center gap-[0.5rem] border border-white px-[1rem] py-[0.5rem] rounded-full font-bold text-[0.8rem] hover:bg-white hover:text-black transition-all">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[4rem] pt-[2rem] border-t border-white/10 flex justify-between text-[0.7rem] font-bold text-gray-600 uppercase tracking-widest">
        <span>© {anioActual} Luis Ramírez de Verger a.k.a Wito</span>
      </div>
    </footer>
  );
};