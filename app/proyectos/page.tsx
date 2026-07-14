import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProyectosGallery } from "@/components/ProyectosGallery";

export const metadata: Metadata = {
  title: "Proyectos | La Casa de los Inventos",
  description:
    "Laboratorio de proyectos filtrables por categoría: Apps móviles, Sistemas de gestión y Web. Cada invento es un experimento con enfoque en tecnología, diseño y usuario.",
};

export default function ProyectosPage() {
  return (
    <main className="min-h-[100svh] w-full bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Laboratorio de"
        acento="Proyectos"
        descripcion={
          <>
            Explora los inventos organizados por categoría. Cada uno es un
            experimento con foco en{" "}
            <span className="font-black">tecnología, diseño y usuario</span>.
          </>
        }
      />
      <ProyectosGallery />
    </main>
  );
}
