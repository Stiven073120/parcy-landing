import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/*
  Un solo botón para todo el sitio, en forma de pastilla.
  - primary: azul de marca con una sombra azul suave. El único elemento "pesado" de cada vista.
  - secondary: blanco con borde de 1px (fondos claros).
  - ghost: solo texto (acciones terciarias).
  - inverse: translúcido con borde claro, para las bandas de azul profundo.
  - white: blanco con texto en tinta, alternativa al primario sobre azul profundo.
  Feedback físico: scale(0.98) al presionar.
*/
const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_24px_-10px_rgba(11,110,245,0.65)] hover:bg-brand-700",
  secondary: "bg-panel text-ink border border-line hover:border-line-strong hover:bg-surface",
  ghost: "text-ink-soft hover:text-ink hover:bg-surface",
  inverse: "border border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15",
  white: "bg-white text-ink shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] hover:bg-brand-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const baseStyles =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const cls = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    // URL externa (la app) → <a>; ruta interna → <Link>
    if (href.startsWith("http://") || href.startsWith("https://")) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
