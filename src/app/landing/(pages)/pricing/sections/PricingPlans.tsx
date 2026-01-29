import { Check } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function PricingPlans() {
  const plans = [
    {
      name: "Básico",
      description: "Ideal para empezar con tu primer proyecto",
      price: "$200.000",
      period: "/mes",
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
      price: "$450.000",
      originalPrice: "$600.000",
      period: "/mes",
      popular: true,
      features: [
        "Hasta 15 usuarios",
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
      price: "$780.000",
      originalPrice: "$1.200.000",
      period: "/mes",
      popular: false,
      features: [
        "Hasta 30 usuarios",
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

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#faf5ff)] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                  {plan.originalPrice && (
                    <div className={`text-lg line-through mb-1 ${plan.popular ? 'text-cyan-200' : 'text-gray-400'}`}>
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-cyan-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
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
