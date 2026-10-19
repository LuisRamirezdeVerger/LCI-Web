import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProyectosGallery } from "@/components/ProyectosGallery";

export const metadata: Metadata = {
  title: "Proyectos y Casos de Estudio",
  description:
    "Casos de estudio reales de desarrollo: sistemas de gestión de turnos, software clínico, webs de conversión y apps móviles nativas en Android.",
  alternates: { canonical: "/proyectos" },
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
