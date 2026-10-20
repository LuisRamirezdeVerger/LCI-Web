/**
 * Fuente única de verdad de los precios de servicio.
 *
 * Cambiar una cifra aquí actualiza a la vez el texto visible, las metadatas y
 * los datos estructurados `Offer.price`. Mantenerlos sincronizados es
 * obligatorio: si la web muestra un precio y el JSON-LD otro, Google retira el
 * rich result y los motores de respuesta citan la cifra equivocada.
 */

export interface Precio {
  /** Valor numérico — alimenta `Offer.price` del Schema.org. */
  valor: number;
  /** Cadena para `Offer.price` (sin separadores, como exige Schema.org). */
  schema: string;
  /** Formato visible en la UI, con el separador de millar del copy actual. */
  texto: string;
}

export const MONEDA = "EUR" as const;

export const PRECIOS = {
  escaparate: { valor: 200, schema: "200", texto: "200" },
  motor: { valor: 800, schema: "800", texto: "800" },
  bolsillo: { valor: 1500, schema: "1500", texto: "1.500" },
} as const satisfies Record<string, Precio>;

/** Techo orientativo declarado en `priceRange` del schema de la organización. */
export const PRECIO_MAXIMO: Precio = {
  valor: 10000,
  schema: "10000",
  texto: "10.000",
};

/** `priceRange` para el schema `ProfessionalService`. */
export const RANGO_PRECIOS = `${PRECIOS.escaparate.texto}€ – ${PRECIO_MAXIMO.texto}€`;

/* ------------------------------------------------------------------ *
 * Metadata de planes
 *
 * Vive junto a los precios para que `PricingSection` pueda iterar datos
 * en lugar de hardcodear nombres: misma razón por la que centralizamos las
 * cifras. El copy es el mismo que ya usa /nuestro-taller.
 * ------------------------------------------------------------------ */

export interface Plan {
  id: keyof typeof PRECIOS;
  /** Supra-título corto: "Nivel 01 · El Escaparate". */
  nivel: string;
  /** Nombre comercial del plan. */
  nombre: string;
  descripcion: string;
  /** Tecnologías o entregables clave — se listan como <ul>. */
  incluye: readonly string[];
  precio: Precio;
  /** Marca la tarjeta central como destacada. */
  destacado: boolean;
}

export const PLANES: readonly Plan[] = [
  {
    id: "escaparate",
    nivel: "Nivel 01 · El Escaparate",
    nombre: "Presencia digital",
    descripcion:
      "Landing pages de alto rendimiento con Next.js, SEO técnico y diseño responsivo. Ideal para PYMES y servicios profesionales.",
    incluye: ["Next.js + TS", "SEO técnico", "Responsive", "Despliegue"],
    precio: PRECIOS.escaparate,
    destacado: false,
  },
  {
    id: "motor",
    nivel: "Nivel 02 · El Motor",
    nombre: "MVP & Web Apps",
    descripcion:
      "Aplicaciones web transaccionales a medida. Incluye bases de datos (Firebase), autenticación de usuarios, lógica de negocio compleja y arquitectura escalable.",
    incluye: ["Next.js + TS", "Firebase", "Auth", "Server Actions"],
    precio: PRECIOS.motor,
    destacado: true,
  },
  {
    id: "bolsillo",
    nivel: "Nivel 03 · El Bolsillo",
    nombre: "Apps Nativas",
    descripcion:
      "Lleva tu idea directamente al bolsillo de tus usuarios. Desarrollo nativo de alto rendimiento, interfaces fluidas y experiencia premium.",
    incluye: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    precio: PRECIOS.bolsillo,
    destacado: false,
  },
] as const;

/**
 * Servicio de tarifa abierta. No es un cuarto nivel: se cobra por bolsa de
 * horas, así que se presenta aparte de los planes de precio cerrado.
 */
export const SERVICIO_HORAS = {
  nivel: "Nivel 04 · Chapa y Pintura",
  nombre: "Optimización",
  descripcion:
    "Auditoría de código, optimización de rendimiento, corrección de bugs y actualización tecnológica de proyectos en React / Next.js.",
  modelo: "Bolsa de horas",
  incluye: ["Auditoría", "Rendimiento", "Bugfixing", "Actualización"],
} as const;
