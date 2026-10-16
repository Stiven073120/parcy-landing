"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { PROMO, isPromoActive, promoPrice } from "@/data/promo";

const APP_URL = "https://app.parcydigital.com";

const promoOn = isPromoActive();

type Plan = {
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  originalPriceMonthly?: number;
  originalPriceAnnual?: number;
  popular: boolean;
  inherits?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Start",
    description: "Para arrancar con tu primer proyecto.",
    priceMonthly: 299999,
    priceAnnual: 2999990, // 2 meses gratis
    originalPriceAnnual: 3599988,
    popular: false,
    features: [
      "Hasta 5 usuarios",
      "1 proyecto",
      "Plano interactivo de unidades",
      "Reservas con cronómetro",
      "Aprobación de ventas",
      "Estados auditados",
      "Importación por Excel",
      "Soporte por correo",
    ],
  },
  {
    name: "Pro",
    description: "Para equipos comerciales en crecimiento.",
    priceMonthly: 549999,
    priceAnnual: 5499990,
    originalPriceMonthly: 699000,
    originalPriceAnnual: 8388000,
    popular: true,
    inherits: "Start",
    features: [
      "Hasta 12 usuarios",
      "3 proyectos",
      "Reportes con exportación (Excel/CSV)",
      "Simulador de financiación",
      "Capacitación incluida",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    description: "Para operaciones con varios proyectos.",
    priceMonthly: 849999,
    priceAnnual: 8499990,
    originalPriceMonthly: 1099999,
    originalPriceAnnual: 13199988,
    popular: false,
    inherits: "Pro",
    features: [
      "Hasta 20 usuarios",
      "5 proyectos",
      "Multiempresa",
      "Integraciones a medida",
      "Gerente de cuenta",
      "Soporte dedicado",
    ],
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

const discount = (original: number, current: number) =>
  Math.round(((original - current) / original) * 100);

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(promoOn);

  return (
    <section className="fade-b-surface bg-panel py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mensual / Anual */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-full border border-line bg-panel p-1" role="group" aria-label="Periodo de facturación">
            {(
              [
                ["Mensual", false],
                ["Anual", true],
              ] as const
            ).map(([label, value]) => (
              <button
                key={label}
                type="button"
                onClick={() => setIsAnnual(value)}
                aria-pressed={isAnnual === value}
                className={`h-9 rounded-full px-4 text-sm font-medium transition-colors duration-150 ${
                  isAnnual === value ? "bg-brand-600 text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="text-sm text-ink-soft">
            {promoOn ? `Anual: 2 meses gratis + ${PROMO.percent}% extra` : "Anual: 2 meses gratis"}
          </span>
        </div>

        {/* Planes */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const annualPromo = promoOn && isAnnual;
            const price = isAnnual
              ? annualPromo
                ? promoPrice(plan.priceAnnual)
                : plan.priceAnnual
              : plan.priceMonthly;
            const original = isAnnual
              ? annualPromo
                ? plan.priceAnnual
                : plan.originalPriceAnnual
              : plan.originalPriceMonthly;

            return (
              <div
                key={plan.name}
                className={`card card-hover flex h-full flex-col p-7 text-center sm:p-8 sm:text-left ${
                  plan.popular ? "border-brand-600 shadow-[0_1px_2px_rgba(11,26,46,0.04),0_24px_60px_-24px_rgba(11,110,245,0.45)] ring-1 ring-brand-600" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{plan.description}</p>
                  </div>
                  {plan.popular && (
                    <span className="shrink-0 rounded-full bg-brand-600 px-2.5 py-1 text-xs font-medium text-white">
                      Más elegido
                    </span>
                  )}
                </div>

                {/* Precio: bloque de altura fija para alinear las listas entre tarjetas */}
                <div className="mt-6 min-h-[92px]">
                  {original && (
                    <p className="mb-1 flex items-center justify-center gap-2 text-sm sm:justify-start">
                      <span className="text-ink-faint line-through tnum">{formatPrice(original)}</span>
                      <span className="rounded bg-surface px-1.5 py-0.5 text-xs font-medium text-ink">
                        −{discount(original, price)}%
                      </span>
                    </p>
                  )}
                  <p className="flex items-baseline justify-center gap-1 sm:justify-start">
                    <span className="text-[2rem] font-semibold tracking-[-0.02em] text-ink tnum">
                      {formatPrice(price)}
                    </span>
                    <span className="text-sm text-ink-soft">{isAnnual ? "/año" : "/mes"}</span>
                  </p>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-ink-faint">
                      Equivale a <span className="tnum">{formatPrice(Math.round(price / 12))}</span> / mes
                    </p>
                  )}
                </div>

                <Button
                  href={APP_URL}
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  className="mt-6 w-full"
                >
                  Comenzar ahora
                </Button>

                <div className="mt-7 border-t border-line-soft pt-6">
                  {plan.inherits && (
                    <p className="mb-3 text-sm font-medium text-ink">Todo lo de {plan.inherits}, y además:</p>
                  )}
                  <ul className="mx-auto w-fit space-y-3 sm:mx-0 sm:w-auto">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-left">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                        <span className="text-sm text-ink-soft">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 max-w-2xl text-sm text-ink-faint">
          Precios en COP. Los planes anuales equivalen a 10 meses (2 meses gratis).
          {promoOn && (
            <>
              {" "}
              Descuento del {PROMO.percent}% aplicable a planes anuales contratados hasta el{" "}
              {PROMO.deadlineLabel}.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
