import { Check, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const generic = [
  "Pensado para vender productos o servicios",
  "Gira en torno a contactos y leads",
  "Sin plano ni control de disponibilidad",
  "Configuración larga para forzar tu proceso",
];

const parcy = [
  "Pensado desde cero para vender por disponibilidad",
  "Gira en torno a la unidad: estado, reserva y venta",
  "Plano interactivo con estados auditados",
  "Se ajusta a tu proceso, sin adaptaciones",
];

export default function SpecializedSolution() {
  return (
    <section className="fade-b-surface bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            <span className="text-celeste">Especializado,</span> no adaptado.
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            La diferencia entre un CRM hecho para tu industria y uno genérico forzado a
            funcionar.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="card grid overflow-hidden md:grid-cols-2">
            <div className="p-7 text-center sm:p-8 sm:text-left">
              <p className="text-sm font-medium text-ink-soft">CRM genérico adaptado</p>
              <ul className="mx-auto mt-5 w-fit space-y-3.5 sm:mx-0 sm:w-auto">
                {generic.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
                    <span className="text-[15px] leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line bg-brand-50 p-7 text-center sm:p-8 sm:text-left md:border-l md:border-t-0">
              <p className="text-sm font-semibold text-brand-700">Parcy Digital</p>
              <ul className="mx-auto mt-5 w-fit space-y-3.5 sm:mx-0 sm:w-auto">
                {parcy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    <span className="text-[15px] font-medium leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 max-w-2xl">
          <p className="text-pretty text-xl font-medium text-ink">
            Parcy es un CRM especializado en proyectos inmobiliarios, no un CRM adaptado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
