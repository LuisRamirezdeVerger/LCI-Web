export interface Proyecto {
  id: number;
  titulo: string;
  color: string;
  descripcion: string;
  tecnologias: string[];
  estado: string;
}

export const MIS_PROYECTOS: Proyecto[] = [
  {
    id: 1,
    titulo: "Music Link",
    color: "hover:from-[#C0C0C0] hover:to-black",
    descripcion: "Red social para músicos.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin", "Firebase"],
    estado: "Fase abierta. Disponible en Play Store",
  },
  {
    id: 2,
    titulo: "Miau! Gold",
    color: "hover:from-[#D4AF37] hover:to-[#B8860B]",
    descripcion: "Versión premium de la app Miau! con contenido exclusivo.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Finalizando fase de testeo",
  },
  {
    id: 3,
    titulo: "Miau!",
    color: "hover:from-blue-800 hover:to-black",
    descripcion:
      "App móvil para interactuar con tu gato a distancia, con sonidos y reclamos.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Empezando fase de testeo",
  },
];
