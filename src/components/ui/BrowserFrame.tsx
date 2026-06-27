import Image from "next/image";
import { Lock } from "lucide-react";

type Tone = "light" | "dark";

interface BrowserFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
  tone?: Tone;
  priority?: boolean;
  className?: string;
}

const TONE: Record<
  Tone,
  { frame: string; bar: string; url: string; dots: [string, string, string] }
> = {
  light: {
    frame: "border-line bg-panel shadow-[0_30px_80px_-32px_rgba(12,30,48,0.4)]",
    bar: "border-line-soft bg-surface/70",
    url: "border-line bg-panel/80 text-ink-faint",
    // versiones suavizadas de los semáforos
    dots: ["#f4a6a0", "#f6cf93", "#a3dcb4"],
  },
  dark: {
    frame:
      "border-white/10 bg-night-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
    bar: "border-white/10 bg-white/[0.02]",
    url: "border-white/10 bg-white/5 text-white/45",
    dots: ["#e08a85", "#dcb877", "#86c79b"],
  },
};

/**
 * Ventana de navegador reutilizable para enmarcar capturas del producto.
 * Unifica el look de todas las imágenes del dashboard con un chrome sutil:
 * tres puntos suaves + barra de dirección con candado. Funciona sobre fondo
 * claro (`tone="light"`) u oscuro (`tone="dark"`).
 */
export default function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = "app.parcydigital.com",
  tone = "light",
  priority = false,
  className = "",
}: BrowserFrameProps) {
  const t = TONE[tone];

  return (
    <div className={`overflow-hidden rounded-2xl border ${t.frame} ${className}`}>
      {/* Barra del navegador */}
      <div className={`flex items-center gap-2 border-b px-3.5 py-2.5 ${t.bar}`}>
        <div className="flex shrink-0 items-center gap-1.5">
          {t.dots.map((c, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <div
          className={`mx-auto hidden items-center gap-1.5 rounded-md border px-3 py-1 text-[11px] sm:flex ${t.url}`}
        >
          <Lock className="h-2.5 w-2.5" />
          <span className="truncate">{url}</span>
        </div>

        {/* Espaciador para mantener la URL centrada frente a los puntos */}
        <div aria-hidden className="hidden w-[46px] shrink-0 sm:block" />
      </div>

      {/* Captura del producto */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="h-auto w-full"
      />
    </div>
  );
}
