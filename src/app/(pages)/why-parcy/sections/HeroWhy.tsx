import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

const pills = [
  "Especializado en parcelación",
  "Plano, reservas y ventas en un solo lugar",
  "Hecho en Colombia",
];

export default function HeroWhy() {
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
          Por qué Parcy
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          No es un software más. Es el que{" "}
          <span className="text-brand-600">entiende tu parcelación.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
          Un CRM genérico te ayuda a perseguir clientes. Parcy gestiona lo que de verdad
          vendes: tus lotes, su disponibilidad y su venta, sin errores ni duplicados.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/#contacto" className="group w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              Solicita una demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </CTAButton>
          <Link
            href="/pricing"
            className="inline-flex w-full items-center justify-center rounded-xl border border-line bg-panel px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-brand-200 hover:text-brand-700 sm:w-auto"
          >
            Ver planes
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {pills.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <Check className="h-4 w-4 text-brand-600" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
