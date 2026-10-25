import type { Metadata } from "next";
import { LoginFacturas } from "@/components/facturas/LoginFacturas";

export const metadata: Metadata = {
  title: "Acceso · Generador de facturas",
  robots: { index: false, follow: false },
};

export default function LoginFacturasPage() {
  return (
    <main className="w-full">
      <LoginFacturas />
    </main>
  );
}
