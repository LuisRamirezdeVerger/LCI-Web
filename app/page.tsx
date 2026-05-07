import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-white px-[5%] py-[3rem] md:py-[5%] text-center gap-bloque">
      <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[5rem] font-[900] text-black leading-[0.9] tracking-tighter break-words hyphens-auto animate-invento-flotando">
        BIENVENIDOS A <br />
        <span className="text-inventor-principal">
          {" "}
          LA CASA DE LOS INVENTOS
        </span>
      </h1>

      <p className="text-[1rem] md:text-[1.2rem] text-gray-800 font-medium max-w-[40rem] mx-auto leading-relaxed">
        Un espacio diseñado para mostrar lo que ocurre cuando no hay límites.
      </p>

      <div className="mt-bloque flex flex-wrap justify-center gap-[1.5rem]">
        <Link href="/proyectos">
          <button className="px-[2rem] py-[1rem] bg-black text-white rounded-full font-bold hover:bg-gray-800 hover:scale-110 active:bg-gray-800 active:scale-[0.98] transition-all duration-300">
            Ver Proyectos
          </button>
        </Link>
        <Link href="/sobre-nosotros">
          <button className="px-[2rem] py-[1rem] border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98] transition-all duration-300">
            Sobre Nosotros
          </button>
        </Link>
      </div>
    </main>
  );
}
