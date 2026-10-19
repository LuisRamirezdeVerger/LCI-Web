import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, type Faq } from "@/lib/faq";

interface Props {
  faqs: Faq[];
  titulo?: string;
  intro?: string;
}

/**
 * Server Component. Usa <details>/<summary> nativos: cero JavaScript, el texto
 * completo de cada respuesta viaja en el HTML inicial (indexable por crawlers
 * y extraíble por LLMs aunque el acordeón esté cerrado).
 */
export const FaqSection = ({
  faqs,
  titulo = "Preguntas frecuentes",
  intro,
}: Props) => (
  <section aria-labelledby="faq" className="flex flex-col gap-[clamp(1.5rem,3dvh,2.5rem)]">
    <JsonLd data={faqSchema(faqs)} />
    <SectionTitle id="faq">{titulo}</SectionTitle>
    {intro && (
      <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[42rem] text-black/80">
        {intro}
      </p>
    )}

    <div className="flex flex-col gap-[1rem] max-w-[48rem]">
      {faqs.map(({ pregunta, respuesta }) => (
        <details
          key={pregunta}
          className="group/faq border-2 border-black rounded-[clamp(0.5rem,1vw,1rem)] overflow-hidden transition-colors duration-300 open:bg-black open:text-white"
        >
          <summary className="flex items-center justify-between gap-[1rem] p-[clamp(1rem,2.5vw,1.75rem)] cursor-pointer list-none font-black uppercase tracking-tight text-[clamp(0.95rem,2.2vw,1.2rem)] leading-tight hover:bg-black hover:text-white active:scale-[0.99] transition-all duration-300">
            <h3 className="font-black">{pregunta}</h3>
            <ChevronDown
              size="1.25rem"
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-open/faq:rotate-180"
            />
          </summary>
          <p className="px-[clamp(1rem,2.5vw,1.75rem)] pb-[clamp(1rem,2.5vw,1.75rem)] text-[clamp(0.9rem,2vw,1.05rem)] leading-relaxed opacity-90 break-words">
            {respuesta}
          </p>
        </details>
      ))}
    </div>
  </section>
);
