import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://lacasadelosinventos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "La Casa de los Inventos | Agencia de Desarrollo de Software en Sevilla",
    template: "%s | La Casa de los Inventos",
  },
  description:
    "Agencia de desarrollo web a medida, apps móviles y sistemas de gestión en Sevilla. Producto tipado, rápido y escalable.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "La Casa de los Inventos",
    title:
      "La Casa de los Inventos | Agencia de Desarrollo de Software en Sevilla",
    description:
      "Desarrollo web a medida, apps móviles y sistemas de gestión desde Sevilla.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Casa de los Inventos | Desarrollo de Software en Sevilla",
    description:
      "Desarrollo web a medida, apps móviles y sistemas de gestión desde Sevilla.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "La Casa de los Inventos",
  url: SITE_URL,
  email: "lacasadelosinventos@gmail.com",
  description:
    "Agencia de desarrollo de software: web a medida, apps móviles y sistemas de gestión para pymes y startups.",
  areaServed: {
    "@type": "City",
    name: "Sevilla",
    address: { "@type": "PostalAddress", addressRegion: "Sevilla", addressCountry: "ES" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sevilla",
    addressRegion: "Sevilla",
    addressCountry: "ES",
  },
  serviceType: [
    "Desarrollo web a medida",
    "Aplicaciones móviles nativas",
    "Sistemas de gestión (ERP / CRM)",
  ],
  founder: { "@type": "Person", name: "Luis Ramírez de Verger" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Centinela observado por IntersectionObserver del Navbar. */}
        <div
          id="scroll-sentinel"
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-[1rem] opacity-0 pointer-events-none"
        />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  );
}
