import { Calendar } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { PROMO, isPromoActive } from "@/data/promo";

/**
 * Bloque de campaña: 25% extra sobre los planes anuales.
 */
export default function PromoAnual() {
  if (!isPromoActive()) return null;

  return (
    <section className="relative bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 text-center shadow-[0_28px_70px_-40px_rgba(12,30,48,0.35)] sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Oferta especial
            </span>

            <p className="mt-6 flex items-start justify-center leading-none">
              <span className="bg-gradient-to-br from-brand-500 to-brand-800 bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
                {PROMO.percent}
              </span>
              <span className="bg-gradient-to-br from-brand-500 to-brand-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                %
              </span>
            </p>

            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              de descuento
            </h2>
            <p className="mt-1 text-xl font-semibold text-brand-600 sm:text-2xl">
              en nuestros planes anuales
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-amber-400" />

            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-soft">
              Software para parcelaciones y urbanismos. Paga el año por adelantado y
              suma un {PROMO.percent}% extra sobre el precio anual.
            </p>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                Promoción válida hasta el {PROMO.deadlineLabel}
              </span>
            </div>

            <div className="mt-7">
              <CTAButton href="/#contacto">Activa tu plan anual hoy</CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
