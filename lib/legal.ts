export const TITULAR = {
  nombre: "Luis Ramírez de Verger López",
  actividad: "Autónomo",
  nif: "53353961X",
  direccion: "Avda. Santa Clara de Cuba 5, 41007 Sevilla, España",
  email: "lacasadelosinventos@gmail.com",
  ultimaActualizacion: "Julio de 2026",
} as const;

// Clases compartidas para páginas legales — DRY para los 3 documentos.
export const LEGAL_MAIN =
  "min-h-[100svh] w-full bg-white px-[2rem] md:px-[5%] py-[clamp(2rem,6dvh,4rem)] md:py-[6rem] flex flex-col gap-[clamp(2rem,5dvh,4rem)] md:gap-[6rem]";
export const LEGAL_SECTION =
  "flex flex-col gap-[clamp(1rem,2dvh,1.5rem)] max-w-[48rem]";
export const LEGAL_BODY =
  "text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed text-black/80";
