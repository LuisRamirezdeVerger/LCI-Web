"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Observa los descendientes marcados con `data-spy` y les inyecta
 * `data-active` cuando cruzan la banda central del viewport.
 * Manipulación directa del DOM: cero estado, cero re-renders.
 * Solo actúa en móvil — en desktop manda `:hover`.
 */
export const ScrollSpy = ({ children }: { children: ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(min-width: 48rem)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.active = String(
            entry.isIntersecting,
          );
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    el.querySelectorAll<HTMLElement>("[data-spy]").forEach((node) =>
      observer.observe(node),
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="contents">
      {children}
    </div>
  );
};
