import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { PERFILES, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/seo";
import { PRECIOS, RANGO_PRECIOS } from "@/lib/pricing";
import "./globals.css";

const DESCRIPCION = `Agencia de desarrollo de software en Sevilla: webs a medida con Next.js desde ${PRECIOS.escaparate.texto} €, aplicaciones web desde ${PRECIOS.motor.texto} € y apps móviles nativas desde ${PRECIOS.bolsillo.texto} €.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Agencia de Desarrollo de Software en Sevilla`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPCION,
  alternates: { canonical: "/" },
  applicationName: SITE_NAME,
  authors: [{ name: "Luis Ramírez de Verger", url: PERFILES[0] }],
  creator: "Luis Ramírez de Verger",
  publisher: SITE_NAME,
  keywords: [
    "desarrollo web a medida Sevilla",
    "agencia desarrollo software Sevilla",
    "apps móviles nativas",
    "sistemas de gestión ERP CRM",
    "desarrollo Next.js",
    "programador freelance Sevilla",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Agencia de Desarrollo de Software en Sevilla`,
    description: DESCRIPCION,
    images: [{ url: "/icon.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Desarrollo de Software en Sevilla`,
    description: DESCRIPCION,
    images: ["/icon.png"],
  },
};

/** Entidad principal: define quiénes somos para el knowledge graph. */
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: "+34680300273",
  image: `${SITE_URL}/icon.png`,
  logo: `${SITE_URL}/icon.png`,
  description: DESCRIPCION,
  priceRange: RANGO_PRECIOS,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avda. Santa Clara de Cuba 5",
    postalCode: "41007",
    addressLocality: "Sevilla",
    addressRegion: "Sevilla",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Sevilla" },
    { "@type": "Country", name: "España" },
  ],
  knowsAbout: [
    "Desarrollo web a medida",
    "Next.js",
    "React",
    "TypeScript",
    "Aplicaciones móviles Android",
    "Kotlin",
    "Jetpack Compose",
    "Supabase",
    "Sistemas de gestión ERP y CRM",
    "SEO técnico",
    "Progressive Web Apps",
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Luis Ramírez de Verger",
    jobTitle: "Desarrollador de software full-stack",
    email: SITE_EMAIL,
    sameAs: [...PERFILES],
    knowsAbout: ["Next.js", "React", "TypeScript", "Kotlin", "Supabase"],
  },
  sameAs: [...PERFILES],
};

/** Entidad del sitio, vinculada a la organización por @id. */
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-ES",
  description: DESCRIPCION,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative flex flex-col min-h-screen">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
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
