"use client";

import { useEffect } from "react";

/**
 * Manejador global de anclas (#id).
 * Intercepta en fase de captura los clicks sobre enlaces con hash y hace
 * scroll manual SIEMPRE, evitando el bug de Next/navegador donde el ancla
 * solo funciona en el primer click (cuando el hash ya está en la URL, el
 * navegador no detecta cambio y no vuelve a hacer scroll).
 *
 * Si el elemento destino no existe en la página actual (p. ej. /#contacto
 * desde /pricing), no interfiere y deja que Next navegue normalmente.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Respeta clicks con modificadores (abrir en pestaña nueva, etc.)
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = href.slice(hashIndex + 1);
      if (!id) return;

      // El ancla debe ser de la página actual: "#id", "/#id" en home, o "<ruta-actual>#id"
      const pathPart = href.slice(0, hashIndex);
      const path = window.location.pathname;
      const samePage =
        pathPart === "" ||
        pathPart === path ||
        pathPart === path.replace(/\/$/, "") ||
        (pathPart === "/" && path === "/");
      if (!samePage) return;

      const el = document.getElementById(id);
      if (!el) return; // destino no está en esta página → deja navegar a Next

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
