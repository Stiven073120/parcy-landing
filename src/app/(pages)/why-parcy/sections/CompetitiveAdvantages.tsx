import { Rocket, Headset, RefreshCw, Wallet } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const advantages = [
  {
    icon: Rocket,
    title: "Puesta en marcha rápida",
    description:
      "Sin implementaciones de meses ni consultorías largas: cargas tu proyecto, importas tus lotes desde Excel y empiezas a operar.",
  },
  {
    icon: Headset,
    title: "Soporte en español",
    description:
      "Un equipo local en Colombia que entiende cómo se vende un lote y habla tu mismo idioma.",
  },
  {
    icon: RefreshCw,
    title: "Mejoras continuas",
    description:
      "La plataforma evoluciona con la industria, sin upgrades costosos ni módulos sueltos que comprar aparte.",
  },
  {
    icon: Wallet,
    title: "Precio claro en COP",
    description:
      "Cobros en pesos colombianos, sin costos ocultos y sin permanencia. Cancelas cuando quieras.",
  },
];

const cardClass =
  "group h-full rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_50px_-24px_rgba(12,30,48,0.2)]";

export default function CompetitiveAdvantages() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Ventajas
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Ventajas que se <span className="text-brand-600">notan</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Más allá de las funciones, lo que hace distinta la experiencia con Parcy.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} i={i % 2}>
                <div className={cardClass}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
