import type { Metadata } from "next";
import { InvoiceGenerator } from "@/components/facturas/InvoiceGenerator";

export const metadata: Metadata = {
  title: "Generador de facturas",
  // Herramienta interna: fuera del índice y del sitemap.
  robots: { index: false, follow: false },
};

export default function FacturasPage() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Generador de facturas</h1>
      <InvoiceGenerator />
    </main>
  );
}
