import {
  Map,
  ShieldCheck,
  Users,
  Building2,
  History,
  BarChart3,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  {
    icon: Map,
    title: "Disponibilidad siempre clara",
    description:
      "El estado real de cada lote sobre el plano, visible para todo el equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Sin ventas duplicadas",
    description:
      "Reservas y aprobación de ventas evitan que dos asesores comprometan el mismo lote.",
  },
  {
    icon: Users,
    title: "Equipo sincronizado",
    description: "Asesores, administración y soporte, sobre la misma información.",
  },
  {
    icon: Building2,
    title: "Crece con tu negocio",
    description: "Varios proyectos y empresas en una plataforma, con cupos por plan.",
  },
  {
    icon: History,
    title: "Todo queda registrado",
    description: "Cada cambio guarda autor y fecha, con papelera para revertir errores.",
  },
  {
    icon: BarChart3,
    title: "Decide con datos",
    description:
      "Reportes de ventas y avance por etapa, exportables a Excel y CSV.",
  },
];

const cardClass =
  "group h-full rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_50px_-24px_rgba(12,30,48,0.2)]";

export default function KeyBenefits() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Beneficios
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Lo que cambia en tu <span className="text-brand-600">operación</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Impacto real en el día a día de tu equipo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} i={i % 3}>
                <div className={cardClass}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">
                    {b.description}
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
