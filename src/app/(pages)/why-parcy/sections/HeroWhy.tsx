import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

/** Hero sobre azul profundo, centrado, con las dos acciones. */
export default function HeroWhy() {
  return (
    <section data-header-dark className="band-navy band-hero band-topo fade-b-panel overflow-hidden pb-28 pt-28 sm:pt-32 lg:pb-36 lg:pt-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4rem]">
            El CRM que <span className="text-celeste-light">entiende tu proyecto.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            Un CRM genérico organiza contactos. Parcy organiza lo que vendes: tus unidades, su
            disponibilidad y cada venta, sin duplicados.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/#contacto" size="lg" className="group">
              Solicitar una demo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button href="/pricing" variant="inverse" size="lg">
              Ver planes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
