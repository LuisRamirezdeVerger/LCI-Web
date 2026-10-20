import type { ReactNode } from "react";
import { ArrowUpRight, Check, Wrench } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { MONEDA, PLANES, SERVICIO_HORAS, type Plan } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/seo";

const mailto = (asunto: string) =>
  `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(asunto)}`;

/* Área táctil: WCAG 2.2 AA (2.5.8) exige 24 CSS px; 2.5.5 AAA recomienda 44.
   Expresado en rem para respetar la regla de cero píxeles del proyecto:
   2.75rem = 44px con la raíz por defecto, y escala si el usuario amplía
   el tamaño de fuente del sistema. */
const CTA_BASE =
  "inline-flex items-center justify-center gap-[0.5rem] min-h-[2.75rem] px-[clamp(1.25rem,3vw,2rem)] py-[0.75rem] rounded-full border-2 font-black uppercase tracking-wider md:tracking-[0.1em] text-[clamp(0.7rem,1.8vw,0.8rem)] leading-tight focus-visible:outline-2 focus-visible:outline-offset-[0.25rem] active:scale-[0.98] transition-all duration-300 ease-out";

const EYEBROW =
  "text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70";

const PlanCard = ({ plan }: { plan: Plan }) => {
  const { nivel, nombre, descripcion, incluye, precio, destacado } = plan;

  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={`h-full flex flex-col gap-[clamp(1rem,2vw,1.5rem)] rounded-[clamp(0.75rem,1.5vw,1.5rem)] border-2 p-[clamp(1.5rem,3vw,2.5rem)] transition-all duration-500 ease-out ${
        destacado
          ? "border-inventor-acento bg-inventor-acento text-black md:scale-[1.04] md:z-10 shadow-[0_clamp(0.5rem,1.5vw,1.5rem)_clamp(1.5rem,3vw,3rem)_rgba(0,0,0,0.18)]"
          : "border-black bg-white text-black hover:bg-black hover:text-white"
      }`}
    >
      <header className="flex flex-wrap items-center justify-between gap-[0.75rem]">
        <p className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70">
          {nivel}
        </p>
        {destacado && (
          <p className="rounded-full bg-black px-[0.75rem] py-[0.25rem] text-[clamp(0.55rem,2vw,0.65rem)] font-black uppercase tracking-wider leading-tight text-white">
            Más popular
          </p>
        )}
      </header>

      <h3
        id={`plan-${plan.id}`}
        className="text-[clamp(1.5rem,4vw,2.25rem)] font-black uppercase tracking-tighter leading-none break-words hyphens-auto"
      >
        {nombre}
      </h3>

      <p className="flex items-baseline gap-[0.5rem]">
        <span className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider leading-tight opacity-70">
          Desde
        </span>
        {/* <data> expone el valor numérico a las máquinas sin alterar lo visible. */}
        <data
          value={precio.schema}
          className="text-[clamp(2.25rem,7vw,3.25rem)] font-black tracking-tighter leading-none"
        >
          {precio.texto}
          <span aria-hidden="true">€</span>
          <span className="sr-only"> euros</span>
        </data>
        <span className="sr-only">{MONEDA}</span>
      </p>

      <p className="text-[clamp(0.9rem,2vw,1rem)] leading-relaxed opacity-90 break-words">
        {descripcion}
      </p>

      <ul className="flex flex-col gap-[0.5rem]">
        {incluye.map((item) => (
          <li
            key={item}
            className="flex items-center gap-[0.5rem] text-[clamp(0.8rem,1.8vw,0.9rem)] leading-tight"
          >
            <Check size="1rem" aria-hidden="true" className="shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={mailto(`Presupuesto · ${nombre}`)}
        className={`${CTA_BASE} mt-auto self-start ${
          destacado
            ? "border-black bg-black text-white hover:bg-white hover:text-black focus-visible:outline-black"
            : "border-current bg-transparent hover:bg-current focus-visible:outline-current"
        }`}
      >
        <span className={destacado ? "" : "mix-blend-difference text-white"}>
          Pedir presupuesto
        </span>
        <ArrowUpRight size="1rem" aria-hidden="true" className="shrink-0" />
        <span className="sr-only">para el plan {nombre}</span>
      </a>
    </article>
  );
};

/** Servicio de tarifa abierta: ancho completo bajo los planes de precio cerrado. */
const ServicioHorasCard = () => {
  const { nivel, nombre, descripcion, modelo, incluye } = SERVICIO_HORAS;

  return (
    <article
      aria-labelledby="plan-optimizacion"
      className="flex flex-col md:flex-row md:items-center justify-between gap-[clamp(1.25rem,3vw,2.5rem)] rounded-[clamp(0.75rem,1.5vw,1.5rem)] border-2 border-black bg-white text-black p-[clamp(1.5rem,3vw,2.5rem)] hover:bg-black hover:text-white transition-colors duration-300"
    >
      <div className="flex flex-col gap-[0.75rem] min-w-0">
        <div className="flex flex-wrap items-center gap-[0.75rem]">
          <Wrench size="1.25rem" aria-hidden="true" className="shrink-0" />
          <p className={EYEBROW}>{nivel}</p>
        </div>
        <h3
          id="plan-optimizacion"
          className="text-[clamp(1.5rem,4vw,2.25rem)] font-black uppercase tracking-tighter leading-none break-words hyphens-auto"
        >
          {nombre}
        </h3>
        <p className="text-[clamp(0.9rem,2vw,1rem)] leading-relaxed opacity-90 max-w-[42rem] break-words">
          {descripcion}
        </p>
        <ul className="flex flex-wrap gap-[0.5rem] mt-[0.25rem]">
          {incluye.map((item) => (
            <li
              key={item}
              className="rounded-full border border-current px-[0.75rem] py-[0.25rem] text-[clamp(0.6rem,2.2vw,0.7rem)] font-bold uppercase tracking-wider leading-tight whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-end justify-between md:flex-col md:items-end gap-[1rem] md:pl-[clamp(1.5rem,3vw,2.5rem)] md:border-l border-current/30 md:self-stretch md:justify-center shrink-0">
        <p className="flex flex-col md:items-end">
          <span className={EYEBROW}>Modelo</span>
          <span className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-black tracking-tighter leading-tight">
            {modelo}
          </span>
        </p>
        <a
          href={mailto(`Presupuesto · ${nombre}`)}
          className={`${CTA_BASE} border-current bg-transparent hover:bg-current focus-visible:outline-current`}
        >
          <span className="mix-blend-difference text-white">
            Pedir presupuesto
          </span>
          <ArrowUpRight size="1rem" aria-hidden="true" className="shrink-0" />
          <span className="sr-only">para el servicio de {nombre}</span>
        </a>
      </div>
    </article>
  );
};

interface Props {
  /** Ancla del encabezado; debe ser único por página. */
  id?: string;
  titulo?: string;
  /** Párrafo introductorio. Acepta JSX para interpolar precios desde el SSoT. */
  intro?: ReactNode;
}

export const PricingSection = ({
  id = "precios",
  titulo = "Planes y precios",
  intro,
}: Props) => (
  <section
    aria-labelledby={id}
    className="flex flex-col gap-[clamp(1.5rem,3dvh,2.5rem)] py-[clamp(1rem,3dvh,2.5rem)]"
  >
    <SectionTitle id={id}>{titulo}</SectionTitle>

    {intro ?? (
      <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[42rem] text-black/80">
        Tres puntos de entrada según el alcance. El precio final se cierra tras
        la primera sesión, sin coste ni compromiso.
      </p>
    )}

    <ul
      role="list"
      className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-[clamp(1rem,2.5vw,2rem)] md:gap-[clamp(1rem,2vw,1.5rem)] mt-[clamp(0.5rem,1.5dvh,1.5rem)]"
    >
      {PLANES.map((plan) => (
        <li key={plan.id} className="h-full">
          <PlanCard plan={plan} />
        </li>
      ))}
    </ul>

    <ServicioHorasCard />
  </section>
);
