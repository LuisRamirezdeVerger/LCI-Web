import Link from "next/link";
import { MIS_PROYECTOS } from "@/lib/proyectos";
import { PageHeader } from "@/components/PageHeader";
import { AccionProyecto } from "@/components/AccionProyecto";
import { ProyectoCardInteractiva } from "@/components/ProyectoCardInteractiva";

export default function ProyectosPage() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Laboratorio de"
        acento="Proyectos"
        descripcion={
          <>
            Aquí podrás ver los proyectos en los que estamos trabajando actualmente,
            con detalles sobre su estado y las tecnologías que estamos utilizando.
            Soluciones web y móviles diseñadas bajo la filosofía de &#34;no hay
            límites&#34;, buscando siempre innovar y crear experiencias únicas
            para los usuarios.
          </>
        }
      />

      <section
        aria-label="Listado de proyectos"
        className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]"
      >
        {MIS_PROYECTOS.map((proyecto) => (
          <ProyectoCardInteractiva key={proyecto.id} proyecto={proyecto}>
            <div>
              <ul className="list-none flex flex-wrap gap-[0.5rem] mb-[1.5rem]">
                {proyecto.tecnologias.map((tech) => (
                  <li
                    key={tech}
                    className="text-[clamp(0.6rem,2.2vw,0.7rem)] font-bold border border-current px-[0.6rem] py-[0.2rem] uppercase tracking-wider md:tracking-widest leading-tight whitespace-nowrap"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <h2 className="text-[2.5rem] font-black uppercase mb-[1rem] leading-none">
                {proyecto.urlCaso ? (
                  <Link
                    href={proyecto.urlCaso}
                    className="before:absolute before:inset-0 before:content-[''] hover:underline"
                  >
                    {proyecto.titulo}
                  </Link>
                ) : (
                  proyecto.titulo
                )}
              </h2>
              <p className="text-[1.1rem] opacity-80 leading-relaxed">
                {proyecto.descripcion}
              </p>
              <AccionProyecto proyecto={proyecto} />
            </div>
            <div className="flex justify-between items-end pt-[1rem] mt-[2rem] border-t border-current/20">
              <div className="flex flex-col">
                <span className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold opacity-50 tracking-wider md:tracking-widest leading-tight">
                  Estado actual
                </span>
                <span className="text-[1rem] font-bold">{proyecto.estado}</span>
              </div>
              <span className="text-[2rem] group-hover:translate-x-3 transition-transform duration-300">
                →
              </span>
            </div>
          </ProyectoCardInteractiva>
        ))}
      </section>
    </main>
  );
}
