import type { Metadata } from "next";
import { Send, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Postula como Tester | La Casa de los Inventos",
  description:
    "Únete al programa de testers de La Casa de los Inventos. Cuéntanos qué te interesa probar y te avisaremos cuando abramos un nuevo cupo.",
};

const DESTINATARIO = "lacasadelosinventos@gmail.com";

async function postularTester(formData: FormData) {
  "use server";
  // Simulación de Server Action. En la integración real, este envío irá a
  // DESTINATARIO mediante un transporte transaccional (Resend, Nodemailer, etc.).
  // TODO: validar formData.get("verificacion") en servidor antes de procesar
  //       (la validación de cliente con `pattern` solo es UX, es bypassable).
  const datos = {
    destino: DESTINATARIO,
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    interes: formData.get("interes"),
    verificacion: formData.get("verificacion"),
  };
  void datos;
}

export default function UnirseTesterPage() {
  return (
    <main className="min-h-[90vh] bg-white px-[2rem] md:px-[5%] py-[4rem] md:py-[6rem] flex flex-col gap-[4rem] md:gap-[6rem]">
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

        <form
          action={postularTester}
          className="border-2 border-black p-[2.5rem] md:p-[3rem] max-w-[40rem] flex flex-col gap-[2rem]"
        >
          <div className="flex flex-col">
            <label
              htmlFor="nombre"
              className="text-xs uppercase font-bold tracking-[0.2em] text-black mb-[0.75rem]"
            >
              Nombre o apodo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs uppercase font-bold tracking-[0.2em] text-black mb-[0.75rem]"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="interes"
              className="text-xs uppercase font-bold tracking-[0.2em] text-black mb-[0.75rem]"
            >
              ¿Qué te interesa probar?{" "}
              <span className="opacity-50 normal-case font-medium tracking-normal">
                (opcional)
              </span>
            </label>
            <textarea
              id="interes"
              name="interes"
              rows={4}
              className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors resize-y min-h-[6rem]"
            />
          </div>

          <div className="border-2 border-dashed border-black p-[1.25rem] flex flex-col gap-[0.75rem]">
            <div className="flex flex-wrap items-center gap-[0.5rem]">
              <ShieldCheck size="1rem" className="shrink-0" />
              <span className="text-xs uppercase font-bold tracking-[0.2em]">
                Verificación humana
              </span>
            </div>
            <label
              htmlFor="verificacion"
              className="text-sm leading-relaxed break-words"
            >
              Para evitar bots, escribe la palabra{" "}
              <span className="font-black uppercase">INVENTO</span> en el siguiente
              campo (no es sensible a mayúsculas):
            </label>
            <input
              id="verificacion"
              name="verificacion"
              type="text"
              required
              pattern="[Ii][Nn][Vv][Ee][Nn][Tt][Oo]"
              autoComplete="off"
              inputMode="text"
              className="border-2 border-black p-[0.75rem] text-base font-medium bg-white text-black focus:outline-none focus:bg-black focus:text-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-[0.75rem]">
            <button
              type="submit"
              className="self-start mt-[0.5rem] inline-flex items-center gap-[0.5rem] bg-black text-white px-[2rem] py-[1rem] rounded-full font-bold uppercase tracking-[0.1em] text-sm hover:bg-inventor-principal active:scale-[0.98] transition-all"
            >
              <Send size="1rem" className="shrink-0" />
              Enviar postulación
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
