import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

/** Fecha por defecto cuando una entrada no declara la suya. */
const LAST_MODIFIED_POR_DEFECTO = "2026-10-21";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: string;
};

const ESTATICAS: Entry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/nuestro-taller", priority: 0.9, changeFrequency: "monthly" },
  { path: "/proyectos", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
  { path: "/unirse-tester", priority: 0.5, changeFrequency: "monthly" },
  { path: "/aviso-legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Las fichas de proyecto se derivan de PROJECTS: añadir un proyecto
  // lo publica en el sitemap automáticamente.
  const proyectos: Entry[] = PROJECTS.map(({ id, featured, dateModified }) => ({
    path: `/proyectos/${id}`,
    priority: featured ? 0.8 : 0.6,
    changeFrequency: "monthly",
    lastModified: dateModified,
  }));

  return [...ESTATICAS, ...proyectos].map(
    ({ path, priority, changeFrequency, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: lastModified ?? LAST_MODIFIED_POR_DEFECTO,
      changeFrequency,
      priority,
    }),
  );
}
