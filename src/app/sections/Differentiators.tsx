import { Check, X } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

const generic = [
  "Adaptado de un software de ventas de clientes",
  "Gira en torno a contactos y leads, no a lotes",
  "Sin plano ni control de disponibilidad",
  "Configuración larga y costosa",
];

const parcy = [
  "Diseñado desde cero para parcelación",
  "Gira en torno al lote: estado, reserva y venta",
  "Plano interactivo con estados auditados",
  "Listo para operar en poco tiempo",
];

export default function Differentiators() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            La diferencia
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            No es un CRM. Es{" "}
            <span className="text-brand-600">gestión de disponibilidad de lotes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Un CRM genérico te ayuda a perseguir clientes. Parcy te ayuda a controlar tu
            inventario de lotes y a venderlo sin errores.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-3 rounded-3xl border border-line bg-panel p-3 shadow-[0_30px_80px_-40px_rgba(12,30,48,0.3)] md:grid-cols-2">
            {/* CRM genérico */}
            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                CRM genérico
              </div>
              <ul className="space-y-3.5">
                {generic.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parcy */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 shadow-[0_24px_60px_-24px_rgba(0,136,204,0.65)] sm:p-8">
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
          <p className="text-pretty text-xl font-medium text-ink sm:text-2xl">
            Parcy no gestiona clientes.{" "}
            <span className="text-brand-600">Gestiona la disponibilidad y venta de tus lotes.</span>
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton href="#contacto">Solicita una demo</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
