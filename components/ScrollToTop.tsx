"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Throttle ligero por tiempo: máximo 1 ejecución cada 150ms.
    // Suficiente para feedback fluido sin saturar el main thread.
    const THROTTLE_MS = 150;
    let lastRun = 0;

    const onScroll = () => {
      const now = Date.now();
      if (now - lastRun < THROTTLE_MS) return;
      lastRun = now;
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sincronización inicial (por si la página carga ya scrolleada)

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className={`fixed bottom-[clamp(1.5rem,3svh,3rem)] right-[clamp(1.5rem,3vw,3rem)] z-40 flex items-center justify-center w-[clamp(2.75rem,8vw,3.5rem)] h-[clamp(2.75rem,8vw,3.5rem)] rounded-full bg-black text-white border-2 border-black shadow-lg hover:bg-white hover:text-black active:scale-[0.98] transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size="1.25rem" className="shrink-0" />
    </button>
  );
};
