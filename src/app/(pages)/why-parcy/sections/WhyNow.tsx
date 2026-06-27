import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  "Las hojas de cálculo desactualizadas cuestan ventas",
  "Una venta duplicada daña tu reputación",
  "Tu equipo pierde tiempo confirmando disponibilidad",
  "La información dispersa frena tu crecimiento",
];

const benefits = ["Sin permanencia", "Implementación incluida", "Soporte dedicado", "Cobros en COP"];

export default function WhyNow() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-night via-[#0a2236] to-night-2 py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            ¿Por qué ahora?
          </span>

          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            El mejor momento para ordenar tus ventas es{" "}
            <span className="text-brand-300">ahora.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Cada día con procesos manuales son ventas que se demoran y errores que se podían
            evitar.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <ul className="grid gap-3 text-left sm:grid-cols-2">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                <span className="text-sm leading-relaxed text-white/80">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/#contacto" className="group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Solicita una demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </CTAButton>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Ver planes y precios
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                <Check className="h-4 w-4 text-brand-300" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
