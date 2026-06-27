import {
  Map,
  Timer,
  ClipboardCheck,
  ShieldCheck,
  Users,
  FileSpreadsheet,
  BarChart3,
  Calculator,
  Building2,
  Clock,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

// ── Mini-visual: plano de lotes por estado ─────────────────────────────────
const MINI_LOTS = [
  "#22c55e", "#22c55e", "#f43f5e",
  "#f59e0b", "#22c55e", "#22c55e",
  "#22c55e", "#f43f5e", "#f59e0b",
];

function MiniPlano() {
  return (
    <svg viewBox="0 0 220 150" className="w-full max-w-[220px]" role="img" aria-label="Plano de lotes">
      <rect x="2" y="2" width="216" height="146" rx="12" fill="#f2f8fc" stroke="#e2e5e9" />
      {MINI_LOTS.map((color, idx) => {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const x = 14 + col * 68;
        const y = 14 + row * 44;
        return (
          <rect
            key={idx}
            x={x}
            y={y}
            width={60}
            height={36}
            rx={8}
            fill={color}
            fillOpacity={0.9}
          />
        );
      })}
    </svg>
  );
}

// ── Mini-visual: barras de reporte ─────────────────────────────────────────
function MiniBars() {
  const bars = [42, 68, 54, 82, 96, 73];
  return (
    <div className="flex h-20 items-end gap-2">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-4 rounded-t bg-gradient-to-t from-brand-700 to-brand-400"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

const STATUS_CHIPS = [
  { label: "Disponible", color: "#22c55e" },
  { label: "Reservado", color: "#f59e0b" },
  { label: "Vendido", color: "#f43f5e" },
  { label: "Bloqueado", color: "#64748b" },
];

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
      {children}
    </span>
  );
}

const cardClass =
  "group h-full rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_50px_-24px_rgba(12,30,48,0.2)]";

export default function Features() {
  return (
    <section
      id="caracteristicas"
      className="relative scroll-mt-20 bg-surface py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Capacidades
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Diseñado para <span className="text-brand-600">parcelación</span>, no un CRM
            genérico adaptado.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Cada función responde a cómo se vende un lote: del plano a la venta, el reporte
            y la financiación.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Plano interactivo (grande) */}
          <Reveal className="md:col-span-2" i={0}>
            <div className={`${cardClass} flex flex-col gap-6 sm:flex-row sm:items-center`}>
              <div className="flex-1">
                <IconBadge>
                  <Map className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold text-ink">Plano interactivo</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                  Cada lote sobre el plano real, por etapas y manzanas. Tu equipo ve la
                  disponibilidad real.
                </p>
              </div>
              <div className="shrink-0 sm:w-56">
                <MiniPlano />
              </div>
            </div>
          </Reveal>

          {/* Reservas con cronómetro */}
          <Reveal i={1}>
            <div className={cardClass}>
              <IconBadge>
                <Timer className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Reservas con cronómetro</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                Reserva temporizada que se libera sola si la venta no avanza.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#fff7ed] px-2.5 py-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-xs font-medium text-amber-700">Libera en 23:41</span>
              </div>
            </div>
          </Reveal>

          {/* Aprobación de ventas */}
          <Reveal i={2}>
            <div className={cardClass}>
              <IconBadge>
                <ClipboardCheck className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Aprobación de ventas</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                El asesor solicita con los datos del cliente; el administrador aprueba o rechaza.
              </p>
            </div>
          </Reveal>

          {/* Estados auditados (ancho) */}
          <Reveal className="md:col-span-2" i={1}>
            <div className={`${cardClass} flex flex-col gap-6 sm:flex-row sm:items-center`}>
              <div className="flex-1">
                <IconBadge>
                  <ShieldCheck className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold text-ink">Estados auditados</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                  Disponible, Reservado, Vendido y Bloqueado. Cada cambio guarda autor y
                  fecha.
                </p>
              </div>
              <div className="shrink-0 space-y-2.5 sm:w-52">
                {STATUS_CHIPS.map((s, idx) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="w-20 shrink-0 text-xs font-medium text-ink-soft">
                      {s.label}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${[72, 48, 60, 28][idx]}%`, backgroundColor: s.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Simulador de financiación */}
          <Reveal i={1}>
            <div className={cardClass}>
              <IconBadge>
                <Calculator className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Simulador de financiación</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                Planes de pago con o sin interés, separación y cuotas, frente al cliente.
              </p>
            </div>
          </Reveal>

          {/* Reportes con exportación (grande) */}
          <Reveal className="md:col-span-2" i={2}>
            <div className={`${cardClass} flex flex-col gap-6 sm:flex-row sm:items-center`}>
              <div className="flex-1">
                <IconBadge>
                  <BarChart3 className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold text-ink">Reportes con exportación</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                  Ventas, conversión por asesor y % vendido por etapa. Exportables a Excel y
                  CSV.
                </p>
              </div>
              <div className="shrink-0 rounded-xl border border-line bg-surface p-4">
                <MiniBars />
              </div>
            </div>
          </Reveal>

          {/* Roles y permisos */}
          <Reveal i={0}>
            <div className={cardClass}>
              <IconBadge>
                <Users className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Roles y permisos</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                Administrador, asesor y soporte: cada quien ve y hace solo lo suyo.
              </p>
            </div>
          </Reveal>

          {/* Importación por Excel */}
          <Reveal i={1}>
            <div className={cardClass}>
              <IconBadge>
                <FileSpreadsheet className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Importación por Excel</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                Carga cientos de lotes desde una hoja, por etapa y número.
              </p>
            </div>
          </Reveal>

          {/* Multiempresa (ancho) */}
          <Reveal className="md:col-span-1" i={2}>
            <div className={cardClass}>
              <IconBadge>
                <Building2 className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-ink">Multiempresa y cupos</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                Varias empresas y proyectos en una sola plataforma, con cupos por plan.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
