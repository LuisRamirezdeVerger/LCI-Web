"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay en milisegundos para escalonar entradas en grupo (cero por defecto). */
  delay?: number;
  /** Clases adicionales que se aplican al wrapper. */
  className?: string;
}

/**
 * Envoltorio que aplica fade-in + slide-up cuando el elemento entra en el viewport.
 * Una sola activación: tras la primera intersección, desconecta el observer.
 * Mientras está oculto: opacity-0 + translateY de 1.5rem.
 * Al entrar: transición de 700ms ease-out hasta visible.
 */
export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Dispara cuando el 10% del elemento ha entrado en pantalla, con un
      // pequeño recorte inferior para que la animación arranque antes de que
      // el contenido toque el fondo del viewport.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[1.5rem]"
      } ${className}`}
    >
      {children}
    </div>
  );
};
