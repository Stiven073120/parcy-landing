import { Check } from "lucide-react";

const trust = ["Sin permanencia", "Sin costos ocultos", "Implementación y soporte incluidos"];

/** Hero compacto sobre azul profundo; los planes arrancan justo debajo, sobre blanco. */
export default function HeroPricing() {
  return (
    <section data-header-dark className="band-navy band-hero band-topo fade-b-panel overflow-hidden pb-28 pt-28 sm:pt-32 lg:pb-36 lg:pt-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4rem]">
            Un plan <span className="text-celeste-light">para cada proyecto.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            Empieza con lo que necesitas y amplía usuarios y proyectos cuando crezcas. Precios
            en pesos colombianos.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <Check className="h-4 w-4 text-brand-300" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
