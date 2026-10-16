import Image from "next/image";
import { Lock } from "lucide-react";

interface BrowserFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** "dark" para la banda de azul profundo (hero). */
  tone?: "light" | "dark";
}

/**
 * Ventana de navegador para enmarcar capturas reales del producto.
 * Chrome mínimo: tres puntos y barra de dirección. En tono oscuro el marco
 * es azul noche con bordes claros translúcidos.
 */
export default function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = "app.parcydigital.com",
  priority = false,
  className = "",
  sizes = "(max-width: 1280px) 100vw, 1200px",
  tone = "light",
}: BrowserFrameProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-2xl ${
        dark
          ? "border border-white/15 bg-[#0a1b3d] shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_40px_120px_-30px_rgba(0,0,0,0.7)]"
          : "border border-line bg-panel shadow-[var(--shadow-frame)]"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10 bg-white/[0.05]" : "border-line-soft bg-surface"
        }`}
      >
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-line-strong"}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-line-strong"}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-line-strong"}`} />
        </div>
        <div
          className={`mx-auto hidden items-center gap-1.5 rounded-md border px-3 py-1 text-[11px] sm:flex ${
            dark ? "border-white/10 bg-white/[0.06] text-white/60" : "border-line bg-panel text-ink-faint"
          }`}
        >
          <Lock className="h-2.5 w-2.5" aria-hidden="true" />
          <span className="truncate">{url}</span>
        </div>
        <div aria-hidden="true" className="hidden w-[46px] shrink-0 sm:block" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}
