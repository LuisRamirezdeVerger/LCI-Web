import type { Metadata } from "next";
import {
  ArrowUpRight,
  Gauge,
  Mail,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { PricingSection } from "@/components/PricingSection";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { FAQS_SERVICIOS } from "@/lib/faq";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { MONEDA, PRECIOS } from "@/lib/pricing";

export const metadata: Metadata = {
  // El sufijo lo añade el `template` del layout: no lo repetimos aquí.
  title: "Servicios y Precios de Desarrollo Web y Apps",
  description:
    `Webs a medida desde ${PRECIOS.escaparate.texto} €, aplicaciones web desde ${PRECIOS.motor.texto} € y apps móviles nativas desde ${PRECIOS.bolsillo.texto} €. Auditoría y optimización de proyectos React / Next.js por bolsa de horas.`,
  alternates: { canonical: "/nuestro-taller" },
};

/** Catálogo de servicios con precios reales → rich results de Google y citas de IA. */
const serviciosLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `Servicios de ${SITE_NAME}`,
  url: `${SITE_URL}/nuestro-taller`,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "El Escaparate · Presencia digital",
      description:
        "Landing pages de alto rendimiento con Next.js, SEO técnico y diseño responsivo. Ideal para PYMES y servicios profesionales.",
      price: PRECIOS.escaparate.schema,
      priceCurrency: MONEDA,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: PRECIOS.escaparate.schema,
        priceCurrency: MONEDA,
        valueAddedTaxIncluded: false,
      },
      itemOffered: {
        "@type": "Service",
        name: "Desarrollo de página web a medida",
        serviceType: "Desarrollo web",
        areaServed: { "@type": "Country", name: "España" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Offer",
      name: "El Motor · MVP y Web Apps",
      description:
        "Aplicaciones web transaccionales con base de datos, autenticación de usuarios y arquitectura escalable.",
      price: PRECIOS.motor.schema,
      priceCurrency: MONEDA,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: PRECIOS.motor.schema,
        priceCurrency: MONEDA,
        valueAddedTaxIncluded: false,
      },
      itemOffered: {
        "@type": "Service",
        name: "Desarrollo de aplicación web a medida",
        serviceType: "Desarrollo de software",
        areaServed: { "@type": "Country", name: "España" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Offer",
      name: "El Bolsillo · Apps nativas",
      description:
        "Desarrollo nativo Android en Kotlin y Jetpack Compose, con interfaces fluidas y experiencia premium.",
      price: PRECIOS.bolsillo.schema,
      priceCurrency: MONEDA,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: PRECIOS.bolsillo.schema,
        priceCurrency: MONEDA,
        valueAddedTaxIncluded: false,
      },
      itemOffered: {
        "@type": "Service",
        name: "Desarrollo de aplicación móvil nativa",
        serviceType: "Desarrollo móvil",
        areaServed: { "@type": "Country", name: "España" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Offer",
      name: "Chapa y Pintura · Optimización",
      description:
        "Auditoría de código, optimización de rendimiento, corrección de bugs y actualización tecnológica de proyectos React / Next.js existentes.",
      priceCurrency: MONEDA,
      itemOffered: {
        "@type": "Service",
        name: "Auditoría y optimización de software",
        serviceType: "Consultoría técnica",
        areaServed: { "@type": "Country", name: "España" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios y precios",
      item: `${SITE_URL}/nuestro-taller`,
    },
  ],
};

const EMAIL = "lacasadelosinventos@gmail.com";
const mailto = (asunto: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}`;

const PILARES = [
  {
    icono: Gauge,
    titulo: "Velocidad extrema",
    descripcion:
      "Next.js + Vercel con carga de página por debajo de 1.2s. Usamos tecnologías avanzadas para que tu producto cargue antes de que el usuario parpadee.",
  },
  {
    icono: ShieldCheck,
    titulo: "Seguridad",
    descripcion:
      "Arquitectura server-side por defecto, reglas de seguridad robustas en backend y validación en cada capa. Nada de superficies expuestas.",
  },
  {
    icono: TrendingUp,
    titulo: "Escalabilidad",
    descripcion:
      "Código limpio, tipado y modular. Cuando tu negocio crezca, el código está pensado para escalar contigo.",
  },
] as const;

export default function NuestroTallerPage() {
  return (
    <main className="min-h-[100svh] w-full bg-white text-black px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]">
      <PageHeader
        titulo="Nuestro"
        acento="Taller"
        descripcion={
          <>
            No vendemos plantillas. Cada{" "}
            <span className="font-black">invento</span> sale del taller hecho a
            medida, optimizado y listo para crecer.
          </>
        }
      />

      <JsonLd data={serviciosLd} />
      <JsonLd data={breadcrumbLd} />

      {/* Sección 1: Planes y precios (conectado al SSoT de lib/pricing.ts) */}
      <PricingSection
        id="niveles"
        titulo="Niveles de servicio"
        intro={
          /* Párrafo AEO (Answer-First): respuesta directa en 40-60 palabras */
          <p className="text-[clamp(1.05rem,2.4vw,1.25rem)] leading-relaxed max-w-[46rem] font-medium">
            Trabajamos en cuatro niveles según el alcance del proyecto: una web a
            medida parte de {PRECIOS.escaparate.texto} €, una aplicación web
            transaccional de {PRECIOS.motor.texto} € y una app móvil nativa de{" "}
            {PRECIOS.bolsillo.texto} €. La optimización de proyectos ya
            existentes se contrata por bolsa de horas.
          </p>
        }
      />

      {/* Sección 2: Justificación tecnológica */}
      <section
        aria-labelledby="por-que-nosotros"
        className="flex flex-col gap-[2.5rem]"
      >
        <SectionTitle id="por-que-nosotros">Por qué nosotros</SectionTitle>

        <p className="text-base md:text-lg max-w-[42rem] leading-relaxed">
          No usamos plantillas genéricas. Cada proyecto sale del taller con
          tres garantías técnicas no negociables — son las mismas que aplicamos
          a nuestros propios productos.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          {PILARES.map(({ icono: Icono, titulo, descripcion }) => (
            <li
              key={titulo}
              className="border-2 border-black p-[1.75rem] flex flex-col gap-[1rem] hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300"
            >
              <Icono size="1.75rem" className="shrink-0" />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter break-words">
                {titulo}
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                {descripcion}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* AEO — FAQPage */}
      <FaqSection
        faqs={FAQS_SERVICIOS}
        intro="Precios, plazos y tecnologías: lo que nos preguntan antes de contratar."
      />

      {/* CTA final */}
      <section
        aria-labelledby="cta-final"
        className="border-2 border-black bg-black text-white p-[2.5rem] md:p-[4rem] flex flex-col gap-[2rem]"
      >
        <span className="text-[clamp(0.65rem,2.5vw,0.75rem)] uppercase font-bold tracking-wider md:tracking-[0.2em] leading-tight opacity-70">
          Primera sesión sin coste
        </span>
        <h2
          id="cta-final"
          className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-[900] uppercase tracking-tighter leading-[0.95] break-words hyphens-auto"
        >
          ¿Listo para sacar tu invento del cajón?
        </h2>
        <p className="text-base md:text-lg max-w-[42rem] leading-relaxed opacity-90 break-words">
          Cuéntanos tu idea en una sesión de consultoría sin compromiso.
          Salimos con un plan, un alcance y un precio cerrado.
        </p>

        <div className="flex flex-wrap gap-[0.75rem] mt-[1rem]">
          <a
            href={mailto("Reserva · Primera sesión de consultoría")}
            className="inline-flex items-center gap-[0.5rem] bg-white text-black border-2 border-white px-[2rem] py-[1rem] text-sm font-black uppercase tracking-[0.1em] hover:bg-transparent hover:text-white hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out"
          >
            <Mail size="1rem" className="shrink-0" />
            Reservar primera sesión
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-[0.5rem] bg-transparent text-white border-2 border-white px-[2rem] py-[1rem] text-sm font-black uppercase tracking-[0.1em] hover:bg-white hover:text-black hover:-translate-y-[0.25rem] hover:shadow-lg hover:shadow-white/20 active:translate-y-0 active:scale-[0.98] active:shadow-none transition-all duration-300 ease-out break-all"
          >
            {EMAIL}
            <ArrowUpRight size="1rem" className="shrink-0" />
          </a>
        </div>
      </section>
    </main>
  );
}
