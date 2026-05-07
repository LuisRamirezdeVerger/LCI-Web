export interface Proyecto {
  id: number;
  titulo: string;
  /**
   * String COMPLETO del degradado de marca (sin prefijo `hover:`).
   * Incluye dirección + paradas. Se aplica idénticamente en hover (PC) y
   * en estado "en foco" del IntersectionObserver (móvil) para garantizar
   * una identidad visual única en ambos viewports.
   */
  colorBranding: string;
  descripcion: string;
  tecnologias: string[];
  estado?: string;
  urlDescarga?: string;
  /** Ruta interna al caso de estudio del proyecto (ej. "/proyectos/music-link"). */
  urlCaso?: string;
}

export const MIS_PROYECTOS: Proyecto[] = [
  {
    id: 1,
    titulo: "Music Link",
    colorBranding: "bg-gradient-to-br from-[#C0C0C0] to-black",
    descripcion: "Red social para músicos.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin", "Firebase"],
    estado: "Fase abierta",
    urlDescarga: "https://play.google.com/store/apps/details?id=com.wito.musiclink",
    urlCaso: "/proyectos/music-link",
  },
  {
    id: 2,
    titulo: "Miau! Gold",
    colorBranding: "bg-gradient-to-br from-[#D4AF37] to-[#B8860B]",
    descripcion: "Versión premium de la app Miau! con contenido exclusivo.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Beta cerrada",
  },
  {
    id: 3,
    titulo: "Miau!",
    colorBranding: "bg-gradient-to-br from-blue-800 to-black",
    descripcion:
      "App móvil para interactuar con tu gato a distancia, con sonidos y reclamos.",
    tecnologias: ["Android", "Jetpack Compose", "Kotlin"],
    estado: "Beta cerrada",
  },
];
