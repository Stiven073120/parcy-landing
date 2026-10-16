import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  "Las hojas de cálculo desactualizadas cuestan ventas",
  "Una venta duplicada daña tu reputación",
  "Tu equipo pierde tiempo confirmando disponibilidad",
  "La información dispersa frena tu crecimiento",
];

/** Banda de cierre en azul profundo, el mismo recurso que la banda de flujo en la home. */
export default function WhyNow() {
  return (
    <section data-header-dark className="band-navy band-topo overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.5rem]">
              El mejor momento para ordenar tus ventas <span className="text-celeste-light">es ahora.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-base leading-relaxed text-white/70 sm:mx-0 sm:text-lg">
              Cada día con procesos manuales son ventas que se demoran y errores evitables.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
              <Button href="/#contacto" size="lg" className="group">
                Solicitar una demo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button href="/pricing" variant="inverse" size="lg">
                Ver planes y precios
              </Button>
            </div>
          </div>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {reasons.map((r) => (
              <li key={r} className="flex items-start justify-center gap-3 py-4 text-center text-[15px] text-white/90 sm:justify-start sm:text-left">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
