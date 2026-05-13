import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { FormularioTester } from "@/components/FormularioTester";

export const metadata: Metadata = {
  title: "Postula como Tester | La Casa de los Inventos",
  description:
    "Únete al programa de testers de La Casa de los Inventos. Cuéntanos qué te interesa probar y te avisaremos cuando abramos un nuevo cupo.",
};

export default function UnirseTesterPage() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Postula como"
        acento="Tester"
        descripcion={
          <>
            Forma parte del laboratorio. Inscríbete y te avisaremos cuando abramos
            un nuevo cupo de testeo. Tu feedback nos ayuda a iterar más rápido y
            mejor.
          </>
        }
      />

      <section
        aria-labelledby="formulario-tester"
        className="flex flex-col gap-[2.5rem]"
      >
        <SectionTitle id="formulario-tester">Únete al programa</SectionTitle>
        <FormularioTester />
      </section>
    </main>
  );
}
