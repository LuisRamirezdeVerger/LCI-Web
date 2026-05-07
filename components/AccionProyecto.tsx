import { Download, Send } from "lucide-react";
import Link from "next/link";
import type { Proyecto } from "@/lib/proyectos";

interface AccionProyectoProps {
  proyecto: Proyecto;
}

export const AccionProyecto = ({ proyecto }: AccionProyectoProps) => {
  const tieneDescarga =
    proyecto.estado === "Fase abierta" && Boolean(proyecto.urlDescarga);

  return (
    <div className="flex flex-wrap gap-[0.75rem] mt-[1.5rem]">
      {tieneDescarga && proyecto.urlDescarga && (
        <a
          href={proyecto.urlDescarga}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center gap-[0.5rem] bg-black text-white border-2 border-black px-[1.5rem] py-[0.75rem] font-black uppercase tracking-[0.1em] text-sm hover:bg-white hover:text-black active:scale-[0.98] transition-all"
        >
          <Download size="1rem" className="shrink-0" />
          Descárgala aquí
        </a>
      )}
      <Link
        href="/unirse-tester"
        className="inline-flex flex-wrap items-center gap-[0.5rem] bg-white text-black border-2 border-black px-[1.5rem] py-[0.75rem] font-black uppercase tracking-[0.1em] text-sm hover:bg-black hover:text-white active:scale-[0.98] transition-all"
      >
        <Send size="1rem" className="shrink-0" />
        Postular como Tester
      </Link>
    </div>
  );
};
