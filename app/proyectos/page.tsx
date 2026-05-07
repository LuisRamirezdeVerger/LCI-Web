import { MIS_PROYECTOS } from "@/lib/proyectos";
import { PageHeader } from "@/components/PageHeader";
import { AccionProyecto } from "@/components/AccionProyecto";
import { ProyectoCardInteractiva } from "@/components/ProyectoCardInteractiva";

export default function ProyectosPage() {
  return (
    <main className="min-h-[90vh] bg-white px-[2rem] md:px-[5%] py-[4rem] md:py-[6rem] flex flex-col gap-[4rem] md:gap-[6rem]">
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
                    className="text-[0.7rem] font-bold border border-current px-[0.6rem] py-[0.2rem] uppercase tracking-widest whitespace-nowrap"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <h2 className="text-[2.5rem] font-black uppercase mb-[1rem] leading-none">
                {proyecto.titulo}
              </h2>
              <p className="text-[1.1rem] opacity-80 leading-relaxed">
                {proyecto.descripcion}
              </p>
              <AccionProyecto proyecto={proyecto} />
            </div>
            <div className="flex justify-between items-end pt-[1rem] mt-[2rem] border-t border-current/20">
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
          </ProyectoCardInteractiva>
        ))}
      </section>
    </main>
  );
}
