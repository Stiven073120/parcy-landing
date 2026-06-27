import { Check, Minus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Cell = boolean | string;

const rows: { category: string; start: Cell; pro: Cell; enterprise: Cell }[] = [
  { category: "Usuarios", start: "Hasta 5", pro: "Hasta 12", enterprise: "Hasta 20" },
  { category: "Proyectos", start: "1", pro: "3", enterprise: "5" },
  { category: "Plano interactivo de lotes", start: true, pro: true, enterprise: true },
  { category: "Reservas con cronómetro", start: true, pro: true, enterprise: true },
  { category: "Aprobación de ventas", start: true, pro: true, enterprise: true },
  { category: "Estados auditados", start: true, pro: true, enterprise: true },
  { category: "Importación por Excel", start: true, pro: true, enterprise: true },
  { category: "Roles y permisos", start: "Básicos", pro: "Avanzados", enterprise: "Avanzados" },
  { category: "Reportes con exportación", start: false, pro: true, enterprise: true },
  { category: "Simulador de financiación", start: false, pro: true, enterprise: true },
  { category: "Capacitación incluida", start: false, pro: true, enterprise: true },
  { category: "Multiempresa", start: false, pro: false, enterprise: true },
  { category: "Integraciones a medida", start: false, pro: false, enterprise: true },
  { category: "Gerente de cuenta", start: false, pro: false, enterprise: true },
  { category: "Soporte", start: "Correo", pro: "Prioritario", enterprise: "Dedicado" },
  { category: "Sin permanencia", start: true, pro: true, enterprise: true },
];

function Value({ value }: { value: Cell }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-brand-600" aria-label="Incluido" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-ink-faint/60" aria-label="No incluido" />
    );
  }
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

const planNames = ["Start", "Pro", "Enterprise"] as const;

export default function AllPlansInclude() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Comparación
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Todo lo que incluye <span className="text-brand-600">cada plan</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-soft">
            Compara y elige el plan que mejor encaja con tu operación.
          </p>
        </Reveal>

        {/* Tabla — escritorio */}
        <Reveal className="mx-auto mt-12 hidden max-w-5xl lg:block">
          <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_-50px_rgba(12,30,48,0.35)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Característica
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-ink">Start</th>
                  <th className="border-x border-brand-100 bg-brand-50/60 px-6 py-5 text-center text-sm font-semibold text-ink">
                    <span className="inline-flex items-center gap-2">
                      Pro
                      <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        Popular
                      </span>
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-ink">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 1 ? "bg-surface/50" : "bg-panel"}
                  >
                    <td className="px-6 py-3.5 text-sm font-medium text-ink-soft">
                      {row.category}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Value value={row.start} />
                    </td>
                    <td className="border-x border-brand-100 bg-brand-50/40 px-6 py-3.5 text-center">
                      <Value value={row.pro} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Value value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Tarjetas — móvil / tablet */}
        <div className="mx-auto mt-10 max-w-xl space-y-5 lg:hidden">
          {planNames.map((plan, pi) => {
            const isPro = plan === "Pro";
            const key = plan.toLowerCase() as "start" | "pro" | "enterprise";
            return (
              <Reveal key={plan} i={pi}>
                <div
                  className={`overflow-hidden rounded-2xl border ${
                    isPro ? "border-brand-200" : "border-line"
                  } bg-panel`}
                >
                  <div
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      isPro ? "bg-brand-600 text-white" : "bg-surface text-ink"
                    }`}
                  >
                    <span className="text-base font-semibold">{plan}</span>
                    {isPro && (
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/25">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="divide-y divide-line-soft">
                    {rows.map((row) => (
                      <div
                        key={row.category}
                        className="flex items-center justify-between gap-4 px-5 py-3"
                      >
                        <span className="text-sm font-medium text-ink-soft">
                          {row.category}
                        </span>
                        <div className="shrink-0 text-right">
                          <Value value={row[key]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
