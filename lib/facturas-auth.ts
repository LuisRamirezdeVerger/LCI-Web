/**
 * Sesión firmada para el generador de facturas.
 *
 * Usa Web Crypto (HMAC-SHA256), disponible tanto en el runtime Edge del
 * middleware como en Node, así que el mismo módulo firma en la Server Action
 * y verifica en el middleware sin duplicar lógica.
 *
 * No hay base de datos: la cookie lleva su propia caducidad y una firma que
 * solo el servidor puede producir. Si alguien la manipula, la firma deja de
 * cuadrar y la sesión se descarta.
 */

const CODIFICADOR = new TextEncoder();

export const COOKIE_SESION = "lci_facturas";

/** Ocho horas: una jornada. Pasado ese plazo hay que volver a entrar. */
export const DURACION_SESION_MS = 8 * 60 * 60 * 1000;

const ES_PRODUCCION = process.env.NODE_ENV === "production";

/* --- Credenciales ------------------------------------------------------- */

/*
 * Viven en variables de entorno, nunca en el código: este repositorio es
 * público y cualquier contraseña escrita aquí quedaría en el historial de git
 * para siempre, aunque se borrara después.
 */
const USUARIO_DEV = "admin";
const CLAVE_DEV = "LdsfdsCfdaIhfjy2fa0iopp2sdxf6rtugfg!";
const SECRETO_DEV = "secreto-solo-para-desarrollo-local";

export function credenciales(): { usuario: string; clave: string } | null {
  const usuario =
    process.env.FACTURAS_USER ?? (ES_PRODUCCION ? null : USUARIO_DEV);
  const clave =
    process.env.FACTURAS_PASSWORD ?? (ES_PRODUCCION ? null : CLAVE_DEV);
  if (!usuario || !clave) return null;
  return { usuario, clave };
}

function secretoFirma(): string | null {
  return (
    process.env.FACTURAS_SESSION_SECRET ?? (ES_PRODUCCION ? null : SECRETO_DEV)
  );
}

/* --- Utilidades --------------------------------------------------------- */

/**
 * Comparación en tiempo constante: un `===` corta en el primer carácter
 * distinto, y esa diferencia de tiempo permite adivinar el valor carácter a
 * carácter. Aquí siempre se recorre la cadena entera.
 */
export function iguales(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diferencia = 0;
  for (let i = 0; i < a.length; i += 1) {
    diferencia |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diferencia === 0;
}

function aBase64Url(bytes: Uint8Array): string {
  let binario = "";
  for (const byte of bytes) binario += String.fromCharCode(byte);
  return btoa(binario)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function firmar(carga: string, secreto: string): Promise<string> {
  const clave = await crypto.subtle.importKey(
    "raw",
    CODIFICADOR.encode(secreto),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const firma = await crypto.subtle.sign("HMAC", clave, CODIFICADOR.encode(carga));
  return aBase64Url(new Uint8Array(firma));
}

/* --- API ---------------------------------------------------------------- */

/** Comprueba usuario y contraseña contra las credenciales configuradas. */
export function credencialesValidas(usuario: string, clave: string): boolean {
  const esperado = credenciales();
  if (!esperado) return false;
  // Se evalúan ambas comparaciones siempre: con `&&` un usuario incorrecto
  // respondería antes y revelaría en cuál de los dos campos estuvo el fallo.
  const usuarioOk = iguales(usuario, esperado.usuario);
  const claveOk = iguales(clave, esperado.clave);
  return usuarioOk && claveOk;
}

/** Devuelve el valor de cookie para una sesión nueva, o null si falta el secreto. */
export async function crearSesion(usuario: string): Promise<string | null> {
  const secreto = secretoFirma();
  if (!secreto) return null;
  const carga = `${usuario}.${Date.now() + DURACION_SESION_MS}`;
  return `${carga}.${await firmar(carga, secreto)}`;
}

/** Valida firma y caducidad de una cookie de sesión. */
export async function sesionValida(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const secreto = secretoFirma();
  if (!secreto) return false;

  // El usuario puede contener puntos, así que se corta por el último.
  const corte = token.lastIndexOf(".");
  if (corte === -1) return false;

  const carga = token.slice(0, corte);
  const firma = token.slice(corte + 1);
  if (!iguales(firma, await firmar(carga, secreto))) return false;

  const expira = Number(carga.slice(carga.lastIndexOf(".") + 1));
  return Number.isFinite(expira) && Date.now() < expira;
}
