import type { LucideIcon } from "lucide-react";
import { Cog, Layers, Sparkles, Users } from "lucide-react";

export interface Metodologia {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
}

export interface Tecnologia {
  nombre: string;
  version: string;
  descripcion: string;
}

export const METODOLOGIAS: Metodologia[] = [
  {
    icono: Sparkles,
    titulo: "Ideación sin límites",
    descripcion:
      "Cada proyecto nace de una pregunta: \"¿y si fuera posible?\". Exploramos sin filtros y validamos con prototipos rápidos.",
  },
  {
    icono: Layers,
    titulo: "Diseño modular",
    descripcion:
      "Construimos por capas reutilizables. Componentes pequeños, responsabilidades claras y un sistema de diseño consistente.",
  },
  {
    icono: Cog,
    titulo: "Iteración continua",
    descripcion:
      "Releases pequeñas, feedback temprano y mejora constante. Preferimos avanzar en pasos cortos que en saltos arriesgados.",
  },
  {
    icono: Users,
    titulo: "Centrado en el usuario",
    descripcion:
      "Cada decisión técnica responde a una necesidad real. Privacidad, accesibilidad y experiencia van por delante de la moda.",
  },
];

export const TECNOLOGIAS: Tecnologia[] = [
  {
    nombre: "React",
    version: "19",
    descripcion: "Librería base para la UI con Server Components.",
  },
  {
    nombre: "Next.js",
    version: "16",
    descripcion: "Framework full-stack con App Router y rendering híbrido.",
  },
  {
    nombre: "Tailwind CSS",
    version: "v4",
    descripcion: "Sistema de utilidades con tokens y medidas relativas.",
  },
  {
    nombre: "TypeScript",
    version: "5",
    descripcion: "Tipado estricto en todo el codebase para mayor robustez.",
  },
];
