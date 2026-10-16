"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Titular que entra palabra a palabra: cada una sube unos píxeles y pasa de
 * desenfocada a nítida, con un escalonado corto. El texto completo queda en el
 * DOM desde el inicio. Con prefers-reduced-motion aparece sin animación.
 * `accent` es la parte final del texto que va en color de acento
 * (`accentClassName`: azul de marca por defecto, brand-300 sobre azul profundo).
 */
export default function WordReveal({
  text,
  delay = 0.15,
  stagger = 0.07,
  className = "",
  accent,
  accentClassName = "text-brand-600",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  accent?: string;
  accentClassName?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  // Índice de la primera palabra en color de acento
  const accentFrom = accent && text.endsWith(accent) ? words.length - accent.split(" ").length : words.length;

  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            aria-hidden="true"
            className={`inline-block ${i >= accentFrom ? accentClassName : ""}`}
            initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
          {/* El espacio va fuera del bloque animado para que no se colapse */}
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}
