import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "¿Parcy es un CRM?",
    a: "Sí. Es un CRM para proyectos inmobiliarios: gestiona clientes, asesores y ventas, pero su centro es el inventario de unidades y su disponibilidad en tiempo real.",
  },
  {
    q: "¿Tengo que migrar mi inventario a mano?",
    a: "No. Importas tus unidades desde Excel, por etapa y número, y el inventario queda listo para empezar a reservar y vender.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "La implementación y la capacitación están incluidas. Cargas tu proyecto, importas las unidades y tu equipo puede empezar a operar sin configuraciones largas.",
  },
  {
    q: "¿Qué roles existen?",
    a: "Administrador, asesor y soporte. Cada rol ve y hace solo lo que le corresponde: el asesor reserva y solicita ventas, el administrador aprueba y supervisa.",
  },
  {
    q: "¿Hay permanencia o costos ocultos?",
    a: "No hay permanencia. Los planes se cobran en pesos colombianos, de forma mensual o anual, y puedes ampliar usuarios y proyectos cuando los necesites.",
  },
];

export default function FAQ() {
  return (
    <section className="fade-b-navy bg-surface pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              Preguntas <span className="text-celeste">frecuentes</span>
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              Si tienes otra, escríbenos a{" "}
              <a
                href="mailto:contacto@parcydigital.com"
                className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-600"
              >
                contacto@parcydigital.com
              </a>
              .
            </p>
          </Reveal>

          <Reveal>
            <div className="card divide-y divide-line-soft px-5 sm:px-7">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-medium text-ink transition-colors hover:text-brand-700 sm:text-lg">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-faint transition-[transform,color,border-color] duration-200 group-open:rotate-45 group-open:border-brand-200 group-open:text-brand-600">
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="max-w-[65ch] pb-5 text-pretty text-[15px] leading-relaxed text-ink-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
