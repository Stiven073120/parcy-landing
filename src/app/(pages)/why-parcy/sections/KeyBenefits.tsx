import { Map, ShieldCheck, Users, Building2, History, BarChart3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  {
    icon: Map,
    title: "Disponibilidad siempre clara",
    description: "El estado real de cada unidad, visible para todo el equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Sin ventas duplicadas",
    description: "Reservas y aprobación de ventas evitan que dos asesores comprometan la misma unidad.",
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
    description: "Reportes de ventas y avance por etapa, exportables a Excel y CSV.",
  },
];

export default function KeyBenefits() {
  return (
    <section className="fade-b-panel bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Lo que cambia <span className="text-celeste">en tu operación</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Impacto real en el día a día de tu equipo comercial y técnico.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal as="li" key={b.title} i={i % 3} className="card card-hover p-6 text-center sm:text-left">
                <span className="icon-tile mx-auto sm:mx-0">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{b.title}</h3>
                <p className="mx-auto mt-1.5 max-w-[36ch] text-pretty text-[15px] leading-relaxed text-ink-soft sm:mx-0">
                  {b.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
