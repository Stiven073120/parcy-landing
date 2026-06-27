import { Layers, UserPlus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const addons = [
  {
    icon: Layers,
    title: "Proyecto adicional",
    price: "$199.999",
    unit: "/ proyecto",
    description: "Suma proyectos extra cuando lances una nueva etapa o parcelación.",
  },
  {
    icon: UserPlus,
    title: "Usuarios adicionales",
    price: "Consultar",
    unit: "",
    description: "Amplía tu equipo por encima del cupo de tu plan.",
  },
];

export default function Addons() {
  return (
    <section className="relative bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Complementos
          </span>
          <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Amplía tu plan cuando crezcas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-soft">
            Paga solo por lo que sumes, sin cambiar de plan.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {addons.map((addon, i) => {
            const Icon = addon.icon;
            return (
              <Reveal key={addon.title} i={i}>
                <div className="group h-full rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_50px_-24px_rgba(12,30,48,0.22)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{addon.title}</h3>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-2xl font-semibold tracking-tight text-ink">
                      {addon.price}
                    </span>
                    {addon.unit && (
                      <span className="text-sm text-ink-faint">{addon.unit}</span>
                    )}
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
                    {addon.description}
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
