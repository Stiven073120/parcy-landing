import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  "Más usuarios y proyectos",
  "Multiempresa a gran escala",
  "Integraciones a medida",
  "Onboarding e importación asistidos",
  "Gerente de cuenta dedicado",
];

/** Banda de azul profundo, el mismo recurso que la banda de flujo en la home. */
export default function Enterprise() {
  return (
    <section data-header-dark className="band-navy band-topo fade-b-panel overflow-hidden pb-28 pt-16 sm:pt-20 lg:pb-36 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.5rem]">
              ¿Tu operación <span className="text-celeste-light">supera los planes?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-base leading-relaxed text-white/70 sm:text-lg md:mx-0">
              Para constructoras con muchos proyectos o necesidades específicas armamos un
              plan a tu medida, con precio según tu operación.
            </p>
            <Button href="/#contacto" size="lg" className="mt-8">
              Contactar ventas
            </Button>
          </div>
          <ul className="mx-auto w-fit space-y-3 md:mx-0 md:w-auto md:border-l md:border-white/15 md:pl-12">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="text-[15px] text-white/90">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
