import { Check, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const generic = [
  "Pensado para vender productos o servicios",
  "Gira en torno a contactos y leads",
  "Sin plano ni control de disponibilidad",
  "Configuración larga para forzar tu proceso",
];

const parcy = [
  "Pensado desde cero para parcelación",
  "Gira en torno al lote: estado, reserva y venta",
  "Plano interactivo con estados auditados",
  "Se ajusta a tu proceso, sin adaptaciones",
];

export default function SpecializedSolution() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-night via-[#0a2236] to-night-2 py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            Especialización
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Especialización, <span className="text-brand-300">no adaptación.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            La diferencia entre un software hecho para tu industria y uno genérico forzado a
            funcionar.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm md:grid-cols-2">
            {/* Genérico */}
            <div className="rounded-2xl bg-white/[0.04] p-6 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                CRM genérico
              </div>
              <ul className="space-y-3.5">
                {generic.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/50">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parcy */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 shadow-[0_24px_60px_-24px_rgba(0,136,204,0.7)] sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/30 blur-2xl" />
              <div className="relative mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-inset ring-white/20">
                Parcy Digital
              </div>
              <ul className="relative space-y-3.5">
                {parcy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-pretty text-xl font-medium text-white sm:text-2xl">
            Parcy no es un CRM adaptado.{" "}
            <span className="text-brand-300">Es una plataforma especializada.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
