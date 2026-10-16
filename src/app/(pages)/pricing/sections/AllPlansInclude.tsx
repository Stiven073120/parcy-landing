import { Check, Minus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Cell = boolean | string;

const rows: { category: string; start: Cell; pro: Cell; enterprise: Cell }[] = [
  { category: "Usuarios", start: "Hasta 5", pro: "Hasta 12", enterprise: "Hasta 20" },
  { category: "Proyectos", start: "1", pro: "3", enterprise: "5" },
  { category: "Plano interactivo de unidades", start: true, pro: true, enterprise: true },
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
      <Minus className="mx-auto h-4 w-4 text-line-strong" aria-label="No incluido" />
    );
  }
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

const planNames = ["Start", "Pro", "Enterprise"] as const;

export default function AllPlansInclude() {
  return (
    <section className="fade-b-surface bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Todo lo que incluye <span className="text-celeste">cada plan</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Compara y elige el plan que mejor encaja con tu operación.
          </p>
        </Reveal>

        {/* Tabla, escritorio */}
        <Reveal className="mt-10 hidden lg:block">
          <div className="card overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-ink-faint">
                    Característica
                  </th>
                  <th scope="col" className="w-[18%] px-6 py-4 text-center text-sm font-semibold text-ink">
                    Start
                  </th>
                  <th scope="col" className="w-[18%] bg-brand-50 px-6 py-4 text-center text-sm font-semibold text-ink">
                    Pro
                    <span className="ml-2 rounded bg-brand-600 px-1.5 py-0.5 text-[11px] font-medium text-white">
                      Más elegido
                    </span>
                  </th>
                  <th scope="col" className="w-[18%] px-6 py-4 text-center text-sm font-semibold text-ink">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.category} className="border-b border-line-soft last:border-b-0">
                    <th scope="row" className="px-6 py-3.5 text-left text-sm font-normal text-ink-soft">
                      {row.category}
                    </th>
                    <td className="px-6 py-3.5 text-center">
                      <Value value={row.start} />
                    </td>
                    <td className="bg-brand-50 px-6 py-3.5 text-center">
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

        {/* Tarjetas, móvil y tablet */}
        <div className="mt-10 space-y-4 lg:hidden">
          {planNames.map((plan, pi) => {
            const key = plan.toLowerCase() as "start" | "pro" | "enterprise";
            return (
              <Reveal key={plan} i={pi}>
                <div className="card overflow-hidden">
                  <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-3.5">
                    <span className="text-base font-semibold text-ink">{plan}</span>
                    {plan === "Pro" && (
                      <span className="rounded bg-brand-600 px-1.5 py-0.5 text-[11px] font-medium text-white">
                        Más elegido
                      </span>
                    )}
                  </div>
                  <ul className="divide-y divide-line-soft">
                    {rows.map((row) => (
                      <li key={row.category} className="flex items-center justify-between gap-4 px-5 py-3">
                        <span className="text-sm text-ink-soft">{row.category}</span>
                        <span className="shrink-0 text-right">
                          <Value value={row[key]} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
