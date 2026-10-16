import { Calendar } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { PROMO, isPromoActive } from "@/data/promo";

/** Bloque de campaña: descuento extra sobre los planes anuales. Solo con la promo activa. */
export default function PromoAnual() {
  if (!isPromoActive()) return null;

  return (
    <section className="bg-panel pt-14 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 card p-8 sm:p-10 md:grid-cols-[auto_1fr_auto]">
            <p className="flex items-baseline leading-none text-ink">
              <span className="font-display text-7xl font-extrabold tracking-[-0.04em] text-brand-600 tnum">{PROMO.percent}</span>
              <span className="text-3xl font-semibold text-brand-600">%</span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                de descuento en planes anuales
              </h2>
              <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft">
                Paga el año por adelantado y suma un {PROMO.percent}% extra sobre el precio anual.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink">
                <Calendar className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                Válido hasta el {PROMO.deadlineLabel}
              </p>
            </div>
            <CTAButton href="/#contacto" size="md">
              Activar plan anual
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
