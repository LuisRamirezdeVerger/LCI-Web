"use client";

import { useActionState } from "react";
import {
  iniciarSesionFacturas,
  type EstadoAcceso,
} from "@/app/facturas/login/actions";
import styles from "./LoginFacturas.module.css";

const ESTADO_INICIAL: EstadoAcceso | null = null;

/**
 * Formulario de acceso al generador de facturas.
 *
 * Las credenciales viajan a una Server Action y nunca se comparan en el
 * cliente: aquí solo se recogen y se pinta el error que devuelve el servidor.
 */
export const LoginFacturas = () => {
  const [estado, formAction, pendiente] = useActionState(
    iniciarSesionFacturas,
    ESTADO_INICIAL,
  );

  return (
    <div className={styles.pantalla}>
      <form action={formAction} className={styles.tarjeta}>
        <h1 className={styles.titulo}>Acceso restringido</h1>
        <p className={styles.intro}>
          El generador de facturas es una herramienta interna. Introduce tus
          credenciales para continuar.
        </p>

        <label className={styles.campo}>
          <span>Usuario</span>
          <input
            name="usuario"
            type="text"
            required
            autoComplete="username"
            autoFocus
            disabled={pendiente}
          />
        </label>

        <label className={styles.campo}>
          <span>Contraseña</span>
          <input
            name="clave"
            type="password"
            required
            autoComplete="current-password"
            disabled={pendiente}
          />
        </label>

        {estado?.error && (
          <p role="alert" aria-live="assertive" className={styles.error}>
            {estado.error}
          </p>
        )}

        <button
          type="submit"
          className={styles.boton}
          disabled={pendiente}
          aria-busy={pendiente}
        >
          {pendiente ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};
