export const SITE_URL = "https://lacasadelosinventos.com";
export const SITE_NAME = "La Casa de los Inventos";
export const SITE_EMAIL = "lacasadelosinventos@gmail.com";

export const PERFILES = [
  "https://linkedin.com/in/luis-rdv",
  "https://github.com/LuisRamirezdeVerger",
] as const;

/** URL absoluta — requerida por `alternates.canonical` y por los schemas JSON-LD. */
export const absoluteUrl = (path = "") => `${SITE_URL}${path}`;

/** Helper para declarar el canonical de cada página sin repetir el dominio. */
export const canonical = (path = "") => ({ alternates: { canonical: path || "/" } });
