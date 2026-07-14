import type { MetadataRoute } from "next";

const SITE_URL = "https://lacasadelosinventos.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: "monthly" | "weekly";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/proyectos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/nuestro-taller", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
    { path: "/unirse-tester", priority: 0.5, changeFrequency: "monthly" },
    { path: "/proyectos/music-link", priority: 0.6, changeFrequency: "monthly" },
  ];
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
