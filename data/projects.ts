export type ProjectDiscipline = "App Móvil" | "Sistemas de Gestión" | "Web";
export type ProjectCategory = "client" | "internal";

export interface Project {
  id: string;
  title: string;
  discipline: ProjectDiscipline;
  category: ProjectCategory;
  description: string;
  featured: boolean;
  image: string;
  gradient?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "miau",
    title: "Miau!",
    discipline: "App Móvil",
    category: "internal",
    description:
      "App móvil para interactuar con tu gato a distancia mediante sonidos y reclamos naturales.",
    featured: false,
    image: "/projects/miau.webp",
    gradient: "from-blue-900 to-black",
  },
  {
    id: "miau-gold",
    title: "Miau! GOLD",
    discipline: "App Móvil",
    category: "internal",
    description:
      "Versión premium de Miau! con contenido exclusivo y funciones avanzadas para dueños exigentes.",
    featured: false,
    image: "/projects/miauGold.webp",
    gradient: "from-yellow-600 to-black",
  },
  {
    id: "music-link",
    title: "Music Link",
    discipline: "App Móvil",
    category: "internal",
    description:
      "Red social para músicos: conecta bandas, salas y artistas en el ecosistema musical local.",
    featured: false,
    image: "/projects/musicLink.webp",
    gradient: "from-slate-400 to-black",
  },
  {
    id: "ticketurn",
    title: "TickeTurn",
    discipline: "Sistemas de Gestión",
    category: "client",
    description:
      "Plataforma de gestión de turnos y colas para negocios de servicio. Producto consolidado y en fase de expansión comercial.",
    featured: true,
    image: "/projects/ticketurn.webp",
    gradient: "from-blue-950 from-30% to-blue-400 to-70%",
  },
  {
    id: "consultame",
    title: "Consúlta-me",
    discipline: "Sistemas de Gestión",
    category: "client",
    description:
      "Sistema integral para consultas profesionales: agenda, historial y facturación en un flujo único. Fase final de desarrollo.",
    featured: false,
    image: "/projects/consulta-me.webp",
    gradient: "from-sky-500 to-black",
  },
  {
    id: "podologia-balboa",
    title: "Podología Balboa",
    discipline: "Web",
    category: "client",
    description:
      "Web clínica con UX orientada a confianza y conversión: reserva de cita en segundos y comunicación transparente del servicio.",
    featured: false,
    image: "/projects/podologiaBalboa.webp",
    gradient: "from-rose-900 to-black",
  },
];
