import Image from "next/image";
import Link from "next/link";
import logoLCI from "@/components/logo_lci.svg";

export default function Home() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-white px-[5%] py-[3rem] md:py-[5%] text-center gap-bloque">
      <h1 className="sr-only">La Casa de los Inventos</h1>
      <Image
        src={logoLCI}
        alt=""
        aria-hidden="true"
        priority
        className="w-[20rem] md:w-[28rem] h-auto max-w-full animate-invento-flotando"
      />

      <p className="text-[1.25rem] md:text-[1.75rem] text-gray-800 font-medium max-w-[40rem] mx-auto leading-relaxed">
        Un espacio diseñado para mostrar lo que ocurre cuando no hay límites.
      </p>

      <div className="mt-[3rem] flex flex-wrap justify-center gap-[1.5rem]">
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
