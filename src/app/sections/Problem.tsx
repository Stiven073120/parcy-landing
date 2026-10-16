import { FileSpreadsheet, Unplug, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    Icon: Users,
    title: "Dos asesores, una misma unidad",
    description:
      "Cada uno cierra con su propia versión del inventario. El cliente se entera después.",
  },
  {
    Icon: FileSpreadsheet,
    title: "Un inventario que caduca",
    description:
      "El plano en PDF y la hoja de cálculo cambian de manos y nadie sabe cuál es la última.",
  },
  {
    Icon: Unplug,
    title: "Comercial y técnico, desconectados",
    description:
      "Cada equipo trabaja con información distinta y las decisiones llegan tarde.",
  },
];

/** Tres tarjetas numeradas (el número grande, en azul pálido, es la firma de la sección). */
export default function Problem() {
  return (
    <section className="fade-b-surface bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Vender desde un Excel <span className="text-celeste">sale caro.</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Sin una sola fuente de disponibilidad, cada venta depende de que alguien haya
            actualizado la hoja a tiempo.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} i={i} className="card card-hover overflow-hidden p-6 text-center sm:p-7 sm:text-left">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[6.5rem] font-extrabold leading-none tracking-[-0.06em] text-brand-50"
              >
                0{i + 1}
              </span>
              <span className="icon-tile relative mx-auto sm:mx-0">
                <p.Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="relative mx-auto mt-2 max-w-[36ch] text-pretty text-[15px] leading-relaxed text-ink-soft sm:mx-0">
                {p.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center sm:mx-0 sm:text-left">
          <figure className="sm:border-l-2 sm:border-brand-600 sm:pl-6">
            <blockquote className="text-balance font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.75rem]">
              El problema no es vender. Es saber qué unidad está libre.
            </blockquote>
            <figcaption className="mt-3 text-[15px] text-ink-soft">
              Sin eso: ventas caídas, conflictos internos y clientes que dejan de confiar.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
