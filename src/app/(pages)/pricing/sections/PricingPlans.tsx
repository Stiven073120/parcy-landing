"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const APP_URL = "https://app.parcydigital.com";

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
      "Plano interactivo de lotes",
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
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Toggle Mensual / Anual */}
        <div className="flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isAnnual ? "text-ink" : "text-ink-faint"
            }`}
          >
            Mensual
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual((v) => !v)}
            role="switch"
            aria-checked={isAnnual}
            aria-label="Cambiar entre facturación mensual y anual"
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:ring-offset-2 ${
              isAnnual ? "bg-brand-600" : "bg-line"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isAnnual ? "text-ink" : "text-ink-faint"
            }`}
          >
            Anual
          </span>
          <span className="ml-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            2 meses gratis
          </span>
        </div>

        {/* Planes */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const original = isAnnual ? plan.originalPriceAnnual : plan.originalPriceMonthly;

            return (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-[0_24px_70px_-28px_rgba(0,136,204,0.7)]"
                    : "border border-line bg-panel hover:border-brand-200 hover:shadow-[0_24px_60px_-30px_rgba(12,30,48,0.28)]"
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-400/30 blur-2xl" />
                    <span className="absolute right-6 top-8 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/25">
                      Más elegido
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3
                    className={`text-xl font-semibold ${
                      plan.popular ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm ${
                      plan.popular ? "text-white/75" : "text-ink-soft"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Precio */}
                  <div className="mt-6">
                    {original && (
                      <div className="mb-1.5 flex items-center gap-2">
                        <span
                          className={`text-sm line-through ${
                            plan.popular ? "text-white/55" : "text-ink-faint"
                          }`}
                        >
                          {formatPrice(original)}
                        </span>
                        <span
                          className={`rounded px-1.5 py-0.5 text-xs font-semibold ${
                            plan.popular
                              ? "bg-white/15 text-white"
                              : "bg-brand-50 text-brand-700"
                          }`}
                        >
                          −{discount(original, price)}%
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl font-semibold tracking-tight ${
                          plan.popular ? "text-white" : "text-ink"
                        }`}
                      >
                        {formatPrice(price)}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/70" : "text-ink-soft"
                        }`}
                      >
                        {isAnnual ? "/año" : "/mes"}
                      </span>
                    </div>
                    {isAnnual && (
                      <p
                        className={`mt-1.5 text-sm ${
                          plan.popular ? "text-white/70" : "text-ink-faint"
                        }`}
                      >
                        Equivale a {formatPrice(Math.round(plan.priceAnnual / 12))} / mes
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={APP_URL}
                    className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold shadow-sm transition-all ${
                      plan.popular
                        ? "bg-white text-brand-700 hover:bg-brand-50"
                        : "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md"
                    }`}
                  >
                    Comenzar ahora
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  {/* Features */}
                  {plan.inherits && (
                    <p
                      className={`mt-7 text-sm font-medium ${
                        plan.popular ? "text-white/85" : "text-ink"
                      }`}
                    >
                      Todo lo de {plan.inherits}, y además:
                    </p>
                  )}
                  <ul className={`${plan.inherits ? "mt-4" : "mt-7"} space-y-3.5`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.popular ? "text-white" : "text-brand-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-white/90" : "text-ink-soft"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-faint">
          Precios en COP. Los planes anuales equivalen a 10 meses (2 meses gratis).
        </p>
      </div>
    </section>
  );
}
