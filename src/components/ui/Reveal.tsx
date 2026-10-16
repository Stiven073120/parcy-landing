"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Entrada suave al entrar en viewport (12px + opacidad + desenfoque a nítido, 600ms, ease-out expo).
 * Mantiene las secciones como server components. `i` escalona hermanos.
 * Con prefers-reduced-motion solo se anima la opacidad.
 */
export default function Reveal({
  children,
  i = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  i?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? "blur(0px)" : "blur(6px)" },
    visible: (idx: number = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: Math.min(idx, 6) * 0.07, ease: EASE },
    }),
  };
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={variants}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </Comp>
  );
}
