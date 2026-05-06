import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

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
    icono: Linkedin,
    etiqueta: "LinkedIn",
    valor: "linkedin.com/in/luis-rdv",
    href: "https://linkedin.com/in/luis-rdv",
    externo: true,
  },
  {
    icono: Github,
    etiqueta: "GitHub",
    valor: "github.com/LuisRamirezdeVerger",
    href: "https://github.com/LuisRamirezdeVerger",
    externo: true,
  },
];
