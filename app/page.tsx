export default function Home() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-white p-[5%] text-center">
      {/* Título con animación 'flotar' y medida relativa */}
      <h1 className="text-[3.5rem] md:text-[5rem] font-black text-inventor-oscuro leading-[1] animate-invento-flotando">
        BIENVENIDO A LA CASA <br />
        <span className="text-inventor-principal">DE LOS INVENTOS</span>
      </h1>
      
      <p className="mt-bloque text-[1.2rem] text-gray-600 max-w-[35rem] mx-auto">
        Explora prototipos únicos donde la ingeniería se mezcla con la imaginación. 
        Un portafolio diseñado para mostrar lo que ocurre cuando no hay límites.
      </p>

      <div className="mt-seccion flex gap-[1.5rem]">
        <button className="px-[2rem] py-[1rem] bg-inventor-principal text-white rounded-inventor-sm font-bold hover:scale-[1.05] transition-transform">
          Ver Proyectos
        </button>
        <button className="px-[2rem] py-[1rem] border-2 border-inventor-oscuro text-inventor-oscuro rounded-inventor-sm font-bold hover:bg-inventor-oscuro hover:text-white transition-all">
          Mi Historia
        </button>
      </div>
    </main>
  );
}