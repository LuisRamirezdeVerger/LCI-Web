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
