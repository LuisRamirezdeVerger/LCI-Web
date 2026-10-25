import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_SESION, sesionValida } from "@/lib/facturas-auth";

/**
 * Protege el generador de facturas.
 *
 * Sin cookie de sesión válida se redirige al formulario de acceso en lugar de
 * devolver un 401: el diálogo nativo de Basic Auth no se puede estilar, no se
 * puede cerrar sesión sin cerrar el navegador y no admite gestores de
 * contraseñas con la misma fiabilidad que un formulario.
 */
export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_SESION)?.value;
  if (await sesionValida(token)) return NextResponse.next();

  const destino = new URL("/facturas/login", request.url);
  return NextResponse.redirect(destino);
}

export const config = {
  /*
   * Cubre /facturas y sus subrutas, pero deja fuera /facturas/login: si el
   * middleware la protegiera, el formulario de acceso se redirigiría a sí
   * mismo en bucle.
   */
  matcher: ["/facturas", "/facturas/((?!login).*)"],
};
