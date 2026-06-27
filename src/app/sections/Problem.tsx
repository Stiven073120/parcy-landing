import { TriangleAlert, FileSpreadsheet, Unplug, History } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    icon: TriangleAlert,
    title: "Ventas duplicadas",
    description: "Dos asesores cierran el mismo lote: nadie ve la disponibilidad real.",
  },
  {
    icon: FileSpreadsheet,
    title: "Inventario en Excel",
    description: "Planos en PDF y hojas que se desactualizan apenas cambian de manos.",
  },
  {
    icon: Unplug,
    title: "Equipos desconectados",
    description: "Comercial y técnico trabajan con versiones distintas de la verdad.",
  },
  {
    icon: History,
    title: "Sin rastro",
    description: "Si algo falla, nadie sabe quién reservó o vendió un lote.",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-night to-night-2 py-20 sm:py-28 lg:py-32">
      {/* Decoración */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand-600/12 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_45%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            El problema
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            El problema no es vender. Es saber{" "}
            <span className="text-brand-300">qué lote está libre.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Sin una sola fuente de disponibilidad, los errores se acumulan y tu equipo deja
            de confiar en el sistema.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} i={i}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-white/55">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-pretty text-base text-white/70 sm:text-lg">
            <span className="font-semibold text-white">El costo:</span> ventas caídas,
            conflictos internos y clientes que pierden la confianza.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
