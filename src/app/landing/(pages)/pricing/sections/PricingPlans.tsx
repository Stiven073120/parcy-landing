"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      description: "Ideal para empezar con tu primer proyecto",
      priceMonthly: 299999,
      priceAnnual: 2999990, // 2 meses gratis (10 meses)
      originalPriceAnnual: 3599988,
      popular: false,
      features: [
        "Hasta 5 usuarios",
        "1 proyecto incluido",
        "Visualización interactiva de lotes",
        "Gestión en tiempo real",
        "Roles y permisos básicos",
        "Soporte por email",
      ],
      cta: "Comenzar ahora",
    },
    {
      name: "Profesional",
      description: "Para equipos en crecimiento",
      priceMonthly: 549999,
      priceAnnual: 5499990, // 2 meses gratis (10 meses)
      originalPriceMonthly: 699000,
      originalPriceAnnual: 8388000,
      popular: true,
      features: [
        "Hasta 12 usuarios",
        "3 proyectos incluidos",
        "Todo en Básico +",
        "Analítica avanzada",
        "Informes personalizados",
        "Trazabilidad completa",
        "Soporte prioritario",
        "Capacitación incluida",
      ],
      cta: "Comenzar ahora",
    },
    {
      name: "Empresa",
      description: "Para operaciones a gran escala",
      priceMonthly: 849999,
      priceAnnual: 8499990, // 2 meses gratis (10 meses)
      originalPriceMonthly: 1099999,
      originalPriceAnnual: 13199988,
      popular: false,
      features: [
        "Hasta 25 usuarios",
        "5 proyectos incluidos",
        "Todo en Profesional +",
        "Integraciones personalizadas",
        "API de acceso",
        "Soporte dedicado 24/7",
        "Consultoría especializada",
        "SLA garantizado",
      ],
      cta: "Comenzar ahora",
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#faf5ff)] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Toggle Mensual/Anual */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-base font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="switch"
            aria-checked={isAnnual}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-base font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Anual
          </span>
          {isAnnual && (
            <span className="ml-2 px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              Ahorra 2 meses
            </span>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              <div
                className={`relative h-full rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[linear-gradient(to_bottom_right,#06b6d4,#3b82f6)] text-white shadow-2xl border-2 border-cyan-400'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm sm:text-base mb-6 ${plan.popular ? 'text-cyan-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-2">
                    {((isAnnual && plan.originalPriceAnnual) || (!isAnnual && plan.originalPriceMonthly)) && (
                      <div className={`text-base line-through ${plan.popular ? 'text-cyan-200/80' : 'text-gray-400'}`}>
                        {formatPrice(isAnnual ? (plan.originalPriceAnnual || 0) : (plan.originalPriceMonthly || 0))}
                      </div>
                    )}
                    {((isAnnual && plan.originalPriceAnnual) || (!isAnnual && plan.originalPriceMonthly)) && (
                      <div className={`text-xs font-medium px-2 py-0.5 rounded ${
                        plan.popular 
                          ? 'bg-white/15 text-white/90' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        Ahorra {calculateDiscount(
                          isAnnual ? (plan.originalPriceAnnual || 0) : (plan.originalPriceMonthly || 0),
                          isAnnual ? plan.priceAnnual : plan.priceMonthly
                        )}%
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {formatPrice(isAnnual ? plan.priceAnnual : plan.priceMonthly)}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-cyan-100' : 'text-gray-600'}`}>
                      {isAnnual ? '/año' : '/mes'}
                    </span>
                  </div>
                  {isAnnual && (
                    <div className={`text-sm mt-2 ${plan.popular ? 'text-cyan-100' : 'text-gray-500'}`}>
                      {formatPrice(Math.round(plan.priceAnnual / 12))} por mes
                    </div>
                  )}
                </div>

                <CTAButton
                  variant={plan.popular ? "secondary" : "primary"}
                  className={`w-full mb-8 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : ''
                  }`}
                >
                  {plan.cta}
                </CTAButton>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-cyan-200' : 'text-cyan-600'}`} />
                      <span className={`text-sm sm:text-base ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.popular && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-800/30 rounded-full blur-3xl"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
