import Image from "next/image";
import Link from "next/link";
import logoLCI from "@/components/logo_lci.svg";

export default function Home() {
  return (
    <main className="min-h-[90dvh] w-full max-w-[100vw] overflow-x-hidden bg-white px-[2rem] md:px-[5%] pt-[clamp(3.5rem,5dvh,5rem)] pb-[clamp(2rem,6dvh,4rem)] md:pb-[6rem] flex flex-col items-center justify-start text-center gap-[clamp(1rem,3dvh,2.5rem)] md:gap-[2.5rem]">
      <h1 className="sr-only">La Casa de los Inventos</h1>
      <Image
        src={logoLCI}
        alt=""
        aria-hidden="true"
        priority
        className="w-[20rem] md:w-[28rem] mt-[clamp(1.5rem,4dvh,2rem)] h-auto max-w-full animate-invento-flotando"
      />

      <p className="mt-[clamp(2rem,4dvh,4rem)] text-[1.25rem] md:text-[1.75rem] text-gray-800 font-medium max-w-[40rem] mx-auto leading-relaxed">
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
    </main>
  );
}
