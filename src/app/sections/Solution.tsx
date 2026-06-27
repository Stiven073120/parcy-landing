import { Map, RefreshCcw, Users } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import BrowserFrame from "@/components/ui/BrowserFrame";

const benefits = [
  {
    icon: Map,
    title: "Cada lote en un plano",
    description:
      "Disponibilidad, precio y estado de cada lote sobre el plano real de tu proyecto, por etapas.",
  },
  {
    icon: RefreshCcw,
    title: "Disponibilidad al día",
    description:
      "Cuando un lote se reserva o se vende, su estado se actualiza para todo el equipo.",
  },
  {
    icon: Users,
    title: "Una sola verdad",
    description:
      "Comercial y técnico ven la misma información. Se acabaron las versiones paralelas.",
  },
];

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            La solución
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            De un Excel desactualizado a un{" "}
            <span className="text-brand-600">plano vivo</span> donde cada lote tiene estado,
            dueño e historial.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Parcy centraliza la disponibilidad de tu proyecto y sincroniza a tu equipo para
            que cada decisión se tome sobre información confiable.
          </p>
        </Reveal>

        {/* Imagen del plano (centrada) */}
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-brand-100/30 to-transparent blur-2xl" />
            <BrowserFrame
              src="/images/solution/dashboard_disponibilidad.jpg"
              alt="Plano de disponibilidad de lotes de Parcy Digital"
              width={1200}
              height={800}
            />

            {/* Chips de estado flotantes (colores de estado de lote) */}
            <div className="absolute -left-4 top-8 hidden items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2 shadow-[0_16px_40px_-20px_rgba(12,30,48,0.35)] sm:flex">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#22c55e" }} />
              <span className="text-xs font-medium text-ink-soft">Disponible</span>
              <span className="text-xs font-bold text-ink">9</span>
            </div>
            <div className="absolute -right-4 bottom-10 hidden items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2 shadow-[0_16px_40px_-20px_rgba(12,30,48,0.35)] sm:flex">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#f43f5e" }} />
              <span className="text-xs font-medium text-ink-soft">Vendido</span>
              <span className="text-xs font-bold text-ink">2</span>
            </div>
          </div>
        </Reveal>

        {/* Beneficios (3 columnas centradas) */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} i={i} className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mx-auto mt-1.5 max-w-xs text-pretty text-sm leading-relaxed text-ink-soft">
                  {b.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <CTAButton href="#contacto">Solicita una demo</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
