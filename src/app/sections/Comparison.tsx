import { Check, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const rows = [
  {
    aspect: "Unidad de trabajo",
    generic: "El contacto",
    parcy: "La unidad, con su estado, su reserva y su venta",
  },
  {
    aspect: "Disponibilidad",
    generic: "Se consulta aparte, a mano",
    parcy: "En tiempo real, para todo el equipo",
  },
  {
    aspect: "Venta duplicada",
    generic: "Depende de la disciplina del equipo",
    parcy: "Bloqueada por reserva y aprobación",
  },
  {
    aspect: "Puesta en marcha",
    generic: "Configuración larga para forzar tu proceso",
    parcy: "Importas tu Excel y arrancas",
  },
  {
    aspect: "Reportes",
    generic: "Por vendedor y embudo",
    parcy: "Por etapa, unidad y asesor, exportables",
  },
];

export default function Comparison() {
  return (
    <section className="fade-b-surface bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Un CRM genérico gira alrededor del contacto. Parcy, alrededor de <span className="text-celeste">la disponibilidad.</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Parcy es un CRM, pero su centro no es la agenda: es el inventario que vendes.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          {/* Escritorio: tabla de tres columnas */}
          <div className="card hidden overflow-hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-line text-sm">
                  <th scope="col" className="w-[22%] px-6 py-4 font-medium text-ink-faint">
                    <span className="sr-only">Aspecto</span>
                  </th>
                  <th scope="col" className="w-[36%] px-6 py-4 font-medium text-ink-soft">
                    CRM genérico
                  </th>
                  <th scope="col" className="w-[42%] bg-brand-600 px-6 py-4 font-semibold text-white">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      Parcy Digital
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.aspect} className="border-b border-line-soft last:border-b-0">
                    <th scope="row" className="px-6 py-4 text-sm font-medium text-ink">
                      {r.aspect}
                    </th>
                    <td className="px-6 py-4 text-sm text-ink-soft">{r.generic}</td>
                    <td className="bg-brand-50 px-6 py-4 text-sm font-medium text-ink">{r.parcy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Móvil: una tarjeta por aspecto, con los dos lados enfrentados */}
          <ul className="space-y-3 md:hidden">
            {rows.map((r) => (
              <li key={r.aspect} className="card overflow-hidden">
                <p className="border-b border-line bg-brand-950 px-4 py-2.5 text-center text-sm font-semibold text-white">{r.aspect}</p>
                <div className="grid grid-cols-2 divide-x divide-line-soft">
                  <div className="px-3 py-3.5 text-center">
                    <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                      <X className="h-3 w-3" aria-hidden="true" />
                      CRM genérico
                    </p>
                    <p className="mt-1.5 text-pretty text-[13px] leading-snug text-ink-soft">{r.generic}</p>
                  </div>
                  <div className="bg-brand-50 px-3 py-3.5 text-center">
                    <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-700">
                      <Check className="h-3 w-3" aria-hidden="true" />
                      Parcy
                    </p>
                    <p className="mt-1.5 text-pretty text-[13px] font-medium leading-snug text-ink">{r.parcy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
