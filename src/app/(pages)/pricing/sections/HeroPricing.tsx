import { Check } from "lucide-react";

const trust = ["Sin permanencia", "Implementación incluida", "Cobros en COP"];

export default function HeroPricing() {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-32 sm:pb-20 sm:pt-36">
      {/* Glow + grid enmascarada */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1e3008_1px,transparent_1px),linear-gradient(to_bottom,#0c1e3008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          Precios
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Un plan para cada <span className="text-brand-600">parcelación</span>.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
          Sin permanencia ni costos ocultos. Implementación, capacitación y soporte
          incluidos. Cobros en COP.
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <Check className="h-4 w-4 text-brand-600" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
