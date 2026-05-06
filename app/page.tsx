import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-white p-[5%] text-center gap-bloque">
      <h1 className="text-[3.5rem] md:text-[5rem] font-[900] text-black leading-[0.9] tracking-tighter animate-invento-flotando">
        BIENVENIDOS A <br />
        <span className="text-inventor-principal">
          {" "}
          LA CASA DE LOS INVENTOS
        </span>
      </h1>

      <p className="text-[1.2rem] text-gray-800 font-medium max-w-[40rem] mx-auto leading-relaxed">
        Un espacio diseñado para mostrar lo que ocurre cuando no hay límites.
      </p>

      <div className="mt-bloque flex gap-[1.5rem]">
        <Link href="/proyectos">
          <button className="px-[2rem] py-[1rem] bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-110">
            Ver Proyectos
          </button>
        </Link>
        <Link href="/sobre-nosotros">
          <button className="px-[2rem] py-[1rem] border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all">
            Sobre Nosotros
          </button>
        </Link>
      </div>
    </main>
  );
}
