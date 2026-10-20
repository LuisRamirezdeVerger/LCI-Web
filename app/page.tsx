import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import logoLCI from "@/components/logo_lci.svg";
import { SectionTitle } from "@/components/SectionTitle";
import { FaqSection } from "@/components/FaqSection";
import { FAQS_SERVICIOS } from "@/lib/faq";
import { PRECIOS } from "@/lib/pricing";

const SERVICIOS = [
  {
    nombre: "Webs a medida",
    desde: `${PRECIOS.escaparate.texto} €`,
    texto:
      "Landing pages y webs corporativas con Next.js, SEO técnico incluido y carga por debajo de 1,2 s.",
  },
  {
    nombre: "Aplicaciones web",
    desde: `${PRECIOS.motor.texto} €`,
    texto:
      "Software transaccional con base de datos, autenticación de usuarios y lógica de negocio a medida.",
  },
  {
    nombre: "Apps móviles nativas",
    desde: `${PRECIOS.bolsillo.texto} €`,
    texto:
      "Android nativo en Kotlin y Jetpack Compose, con rendimiento y acceso completo al hardware.",
  },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="min-h-[100svh] w-full px-[2rem] md:px-[5%] pt-[clamp(3.5rem,5dvh,5rem)] pb-[clamp(2rem,6dvh,4rem)] md:pb-[6rem] flex flex-col items-center justify-start text-center gap-[clamp(1rem,3dvh,2.5rem)] md:gap-[2.5rem]">
        <h1 className="sr-only">
          La Casa de los Inventos · Desarrollo web a medida, apps móviles y
          sistemas de gestión en Sevilla
        </h1>
        <Image
          src={logoLCI}
          alt=""
          aria-hidden="true"
          priority
          className="w-[20rem] md:w-[28rem] mt-[clamp(0.25rem,1dvh,0.5rem)] h-auto max-w-full animate-invento-flotando"
        />

        <p className="mt-[clamp(0.25rem,1dvh,0.75rem)] text-[1.25rem] md:text-[1.75rem] text-gray-800 font-medium max-w-[40rem] mx-auto leading-relaxed">
          Generando espacios web y app móvil con un enfoque personalizado.
Apto para ocio y negocio.
        </p>

        <div className="mt-[0.2rem] flex flex-wrap justify-center gap-[1.5rem]">
          <Link
            href="/proyectos"
            className="inline-block px-[2rem] py-[1rem] bg-black text-white rounded-full font-bold hover:bg-gray-800 hover:scale-110 active:bg-gray-800 active:scale-[0.98] transition-all duration-300"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/sobre-nosotros"
            className="inline-block px-[2rem] py-[1rem] border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98] transition-all duration-300"
          >
            Sobre Nosotros
          </Link>
        </div>
      </section>

      {/* AEO — Answer-First: respuesta directa a la intención de búsqueda */}
      <section
        aria-labelledby="que-hacemos"
        className="w-full px-[2rem] md:px-[5%] py-[clamp(3rem,8dvh,6rem)] flex flex-col gap-[clamp(1.5rem,3dvh,2.5rem)] border-t-2 border-black"
      >
        <SectionTitle id="que-hacemos">
          ¿Qué hace La Casa de los Inventos?
        </SectionTitle>

        <p className="text-[clamp(1.05rem,2.4vw,1.35rem)] leading-relaxed max-w-[46rem] font-medium">
          La Casa de los Inventos es un estudio de desarrollo de software con
          base en Sevilla que diseña y programa webs a medida, aplicaciones web
          transaccionales y apps móviles nativas. Trabajamos sin plantillas:
          cada proyecto se construye desde cero con Next.js, TypeScript y
          arquitecturas pensadas para escalar.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] max-w-[70rem]">
          {SERVICIOS.map(({ nombre, desde, texto }) => (
            <li
              key={nombre}
              className="border-2 border-black rounded-[clamp(0.5rem,1vw,1rem)] p-[clamp(1.25rem,2.5vw,2rem)] flex flex-col gap-[0.75rem] hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-300"
            >
              <span className="text-[clamp(0.6rem,2.2vw,0.7rem)] uppercase font-bold tracking-wider md:tracking-widest leading-tight opacity-70">
                Desde {desde}
              </span>
              <h3 className="text-[clamp(1.15rem,3vw,1.5rem)] font-black uppercase tracking-tighter leading-tight break-words">
                {nombre}
              </h3>
              <p className="text-[clamp(0.9rem,2vw,1rem)] leading-relaxed opacity-90 break-words">
                {texto}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href="/nuestro-taller"
          className="inline-flex items-center gap-[0.5rem] self-start border-2 border-black rounded-full px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1.1rem)] font-black uppercase tracking-wider md:tracking-[0.1em] text-[clamp(0.7rem,1.8vw,0.85rem)] leading-tight hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-300"
        >
          Ver servicios y precios
          <ArrowUpRight size="1rem" className="shrink-0" />
        </Link>
      </section>

      {/* AEO — FAQPage */}
      <section className="w-full px-[2rem] md:px-[5%] py-[clamp(3rem,8dvh,6rem)] border-t-2 border-black">
        <FaqSection
          faqs={FAQS_SERVICIOS}
          withSchema={false}
          intro="Las dudas que nos llegan con más frecuencia sobre plazos, precios y tecnologías."
        />
      </section>
    </main>
  );
}
