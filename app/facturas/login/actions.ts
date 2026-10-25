"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  COOKIE_SESION,
  DURACION_SESION_MS,
  credencialesValidas,
  crearSesion,
} from "@/lib/facturas-auth";

export interface EstadoAcceso {
  error?: string;
}

export async function iniciarSesionFacturas(
  _estadoPrevio: EstadoAcceso | null,
  formData: FormData,
): Promise<EstadoAcceso> {
  const usuario = String(formData.get("usuario") ?? "");
  const clave = String(formData.get("clave") ?? "");

  // Un único mensaje para cualquier fallo: distinguir "usuario inexistente" de
  // "contraseña incorrecta" confirmaría qué usuarios existen.
  const generico = { error: "Usuario o contraseña incorrectos." };

  if (!credencialesValidas(usuario, clave)) return generico;

  const sesion = await crearSesion(usuario);
  if (!sesion) {
    console.error(
      "[facturas] FACTURAS_SESSION_SECRET no definida: no se puede firmar la sesión.",
    );
    return { error: "El acceso no está configurado en este entorno." };
  }

  const almacen = await cookies();
  almacen.set(COOKIE_SESION, sesion, {
    httpOnly: true, // Invisible para JavaScript: sin lectura desde el cliente.
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/facturas",
    maxAge: DURACION_SESION_MS / 1000,
  });

  redirect("/facturas");
}

export async function cerrarSesionFacturas(): Promise<void> {
  const almacen = await cookies();
  almacen.delete({ name: COOKIE_SESION, path: "/facturas" });
  redirect("/facturas/login");
}
