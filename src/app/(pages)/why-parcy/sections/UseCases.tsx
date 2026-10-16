import { Building2, Map, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const useCases = [
  {
    Icon: Map,
    title: "Parcelaciones y urbanismos",
    challenge: "Varios proyectos y etapas, cada uno con su disponibilidad.",
    solution: "Centraliza tus proyectos con el estado real de cada lote a la vista.",
  },
  {
    Icon: Users,
    title: "Comercializadoras",
    challenge: "Equipo comercial con información dispersa y riesgo de duplicar ventas.",
    solution: "Coordina a tus asesores sobre una sola fuente de verdad, sin cruces.",
  },
  {
    Icon: Building2,
    title: "Vivienda en altura",
    challenge: "Cientos de apartamentos por etapa y procesos manuales que no escalan.",
    solution: "Cada apartamento es una unidad con su estado, su reserva y su venta.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Hecho para quienes venden <span className="text-celeste">por disponibilidad</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Una solución especializada para cada tipo de operación.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {useCases.map((uc, i) => (
            <Reveal as="li" key={uc.title} i={i} className="card card-hover p-6 text-center sm:p-7 sm:text-left">
              <span className="icon-tile mx-auto sm:mx-0">
                <uc.Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{uc.title}</h3>
              <p className="mx-auto mt-2 max-w-[36ch] text-pretty text-[15px] leading-relaxed text-ink-soft sm:mx-0">
                {uc.challenge}
              </p>
              <p className="mx-auto mt-3 max-w-[36ch] border-t border-line-soft pt-3 text-pretty text-[15px] font-medium leading-relaxed text-ink sm:mx-0">
                {uc.solution}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
