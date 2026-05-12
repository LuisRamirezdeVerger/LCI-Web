import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "La Casa de los Inventos",
  description:
    "Generando espacios web y app móvil con un enfoque personalizado. Apto para ocio y negocio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
