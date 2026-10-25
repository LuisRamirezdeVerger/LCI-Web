import type { LucideIcon } from "lucide-react";
import { Instagram, Mail, Phone } from "lucide-react";

export interface Canal {
  icono: LucideIcon;
  etiqueta: string;
  valor: string;
  href: string;
  externo: boolean;
}

export const CANALES: Canal[] = [
  {
    icono: Mail,
    etiqueta: "Email",
    valor: "lacasadelosinventos@gmail.com",
    href: "mailto:lacasadelosinventos@gmail.com",
    externo: false,
  },
  {
    icono: Phone,
    etiqueta: "Teléfono",
    valor: "+34 680 300 273",
    href: "tel:+34680300273",
    externo: false,
  },
  {
    icono: Instagram,
    etiqueta: "Instagram",
    valor: "@lacasadelosinventos",
    href: "https://instagram.com/lacasadelosinventos",
    externo: true,
  },
];
