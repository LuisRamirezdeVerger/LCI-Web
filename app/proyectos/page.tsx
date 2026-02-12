import React from "react";
//import { Navbar } from '../components/Navbar';

const MIS_PROYECTOS = [
  {
    id: 1,
    titulo: "Miau!",
    descripcion:
      "App móvil para interactuar con tu gato a distancia, con sonidos y reclamos.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Empezando fase de testeo",
  },
  {
    id: 2,
    titulo: "Miau! Gold",
    descripcion: "Versión premium de la app Miau! con funciones exclusivas.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Finalizando fase de testeo",
  },
];

export default function ProyectosPage() {
  return (
    <main className="min-h-[90vh] bg-white p-[5%]">
      <header className="mb-seccion border-b-4 border-black pb-bloque">
        <h1 className="text-[3rem] md:text-[5rem] font-[900] text-black tracking-tighter uppercase leading-none">
          Laboratorio de <br />
          <span className="text-gray-400">Proyectos</span>
        </h1>
        <p className="mt-[1rem] text-[1.2rem] text-black font-medium max-w-[40rem]">
          Aquí podrás ver los proyectos en los que estamos trabajando actualmente,
          con detalles sobre su estado y las tecnologías que estamos utilizando.
          <br />
          Soluciones web y móviles diseñadas bajo la filosofía de &#34;no hay
          límites&#34;, buscando siempre innovar y crear experiencias únicas
          para los usuarios.
        </p>
        <br />
      </header>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]">
        {MIS_PROYECTOS.map((proyecto) => (
          <article
            key={proyecto.id}
            className="group border-2 border-black p-[2rem] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300"
          >
            <div>
              <div className="flex gap-[0.5rem] mb-[1.5rem]">
                {proyecto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.7rem] font-bold border border-current px-[0.6rem] py-[0.2rem] uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="text-[2.5rem] font-black uppercase mb-[1rem] leading-none">
                {proyecto.titulo}
              </h2>
              <p className="text-[1.1rem] opacity-80 leading-relaxed mb-[2rem]">
                {proyecto.descripcion}
              </p>
            </div>
            <div className="flex justify-between items-end pt-[1rem] border-t border-current/20">
              <div className="flex flex-col">
                <span className="text-[0.7rem] uppercase font-bold opacity-50">
                  Estado actual
                </span>
                <span className="text-[1rem] font-bold">{proyecto.estado}</span>
              </div>
              <span className="text-[2rem] group-hover:translate-x-3 transition-transform duration-300">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
