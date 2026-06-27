import { Map, Users, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const useCases = [
  {
    icon: Map,
    title: "Urbanizadores",
    challenge: "Varios proyectos y etapas, cada uno con su disponibilidad.",
    solution: "Centraliza todos tus proyectos con el estado real de cada lote a la vista.",
  },
  {
    icon: Users,
    title: "Comercializadoras",
    challenge: "Equipo comercial con información dispersa y riesgo de duplicar ventas.",
    solution: "Coordina a tus asesores sobre una sola fuente de verdad, sin cruces.",
  },
  {
    icon: TrendingUp,
    title: "Desarrolladores",
    challenge: "Procesos manuales que no escalan cuando crece la operación.",
    solution: "Suma proyectos y usuarios a medida que creces, sin rehacer tu proceso.",
  },
];

export default function UseCases() {
  return (
    <section className="relative bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Para quién
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Hecho para quienes <span className="text-brand-600">venden lotes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Una solución especializada para los distintos roles de la industria de
            parcelación.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <Reveal key={uc.title} i={i}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_50px_-24px_rgba(12,30,48,0.2)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{uc.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                    {uc.challenge}
                  </p>

                  <div className="mt-5 flex items-start gap-2.5 border-t border-line-soft pt-5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <p className="text-sm font-medium leading-relaxed text-ink">
                      {uc.solution}
                    </p>
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
