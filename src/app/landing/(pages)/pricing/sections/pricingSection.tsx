import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

// Iconos personalizados con gradientes - definidos fuera del componente
const ProyectoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <defs>
      <linearGradient id="proyectoGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="url(#proyectoGradPricing)" />
    <path d="M24 8L12 14v16l12 6 12-6V14L24 8z" fill="white" opacity="0.3" />
    <circle cx="24" cy="22" r="4" fill="white" opacity="0.9" />
  </svg>
);

const UsuariosIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <defs>
      <linearGradient id="usuariosGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill="url(#usuariosGradPricing)" />
    <circle cx="30" cy="18" r="8" fill="url(#usuariosGradPricing)" opacity="0.8" />
    <circle cx="24" cy="30" r="8" fill="url(#usuariosGradPricing)" opacity="0.6" />
    <circle cx="18" cy="18" r="5" fill="white" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="white" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="white" opacity="0.8" />
  </svg>
);

const EmpresaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <defs>
      <linearGradient id="empresaGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="14" height="28" fill="url(#empresaGradPricing)" rx="2" />
    <rect x="26" y="18" width="14" height="22" fill="url(#empresaGradPricing)" opacity="0.8" rx="2" />
    <rect x="12" y="16" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="16" y="16" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="12" y="20" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="16" y="20" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="30" y="22" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="34" y="22" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="30" y="26" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="34" y="26" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <defs>
      <linearGradient id="checkGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#checkGradPricing)" />
    <path d="M16 24l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const UpdateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <defs>
      <linearGradient id="updateGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#updateGradPricing)" />
    <path d="M32 18l-8-6v4c-6 0-10 4-10 10 0 2 1 4 2 5-1-4 2-7 8-7v4l8-6z" fill="white" opacity="0.9"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <defs>
      <linearGradient id="shieldGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 10v12c0 10 8 18 16 20 8-2 16-10 16-20V10L24 4z" fill="url(#shieldGradPricing)" />
    <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <defs>
      <linearGradient id="supportGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#supportGradPricing)" />
    <circle cx="24" cy="20" r="3" fill="white" />
    <path d="M24 26v10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default function PricingSection() {
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

  const addons = [
    {
      icon: ProyectoIcon,
      title: "Proyectos adicionales",
      price: "$200.000",
      description: "Agrega proyectos extra a tu plan",
    },
    {
      icon: UsuariosIcon,
      title: "Usuarios adicionales",
      price: "Consultar",
      description: "Amplía tu equipo según necesites",
    },
  ];

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-40 md:pb-48 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f9fafb)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#faf5ff)] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Planes que se{" "}
            <span className="relative inline-block">
              <span className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                adaptan
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#pricingGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="pricingGradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}a tu negocio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Sin permanencia. Cancela cuando quieras. Implementación y soporte incluidos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[linear-gradient(to_bottom_right,#06b6d4,#3b82f6)] text-white shadow-2xl border-2 border-cyan-400'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                {/* Plan name */}
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm sm:text-base mb-6 ${plan.popular ? 'text-cyan-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* Price */}
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

                {/* CTA Button */}
                <Button
                  href="https://app.parcydigital.com"
                  variant={plan.popular ? "secondary" : "primary"}
                  size="lg"
                  className={`w-full mb-8 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] hover:bg-[linear-gradient(to_right,#0891b2,#2563eb)]'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features list */}
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

                {/* Background decoration for popular card */}
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

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Complementos adicionales
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center mb-5 transition-all shadow-sm">
                  <addon.icon />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {addon.title}
                </h4>
                <div className="text-3xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent mb-3">
                  {addon.price}
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="bg-[linear-gradient(to_bottom_right,#111827,#1f2937)] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border-2 border-cyan-400/30 flex items-center justify-center">
                    <EmpresaIcon />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    Enterprise
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Solución personalizada para grandes desarrolladores y múltiples proyectos simultáneos.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Proyectos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Usuarios ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Integraciones a medida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Implementación personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Gerente de cuenta dedicado</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                    Custom
                  </div>
                  <p className="text-lg text-cyan-300">Precio personalizado</p>
                </div>
                
                <Button
                  href="https://app.parcydigital.com"
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MailIcon />
                    Contactar ventas
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ / Features comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Todos los planes incluyen
          </h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center">
                <CheckCircleIcon />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Sin permanencia</h4>
              <p className="text-sm text-gray-600">Cancela cuando quieras</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center">
                <UpdateIcon />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Actualizaciones</h4>
              <p className="text-sm text-gray-600">Mejoras continuas incluidas</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center">
                <ShieldIcon />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Datos seguros</h4>
              <p className="text-sm text-gray-600">Encriptación total</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center">
                <SupportIcon />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Soporte local</h4>
              <p className="text-sm text-gray-600">Equipo en español</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-20">
          <div className="bg-[linear-gradient(to_right,#eff6ff,#ecfeff,#eff6ff)] rounded-3xl p-8 sm:p-12 border-2 border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿No estás seguro qué plan elegir?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Agenda una demo personalizada y te ayudamos a encontrar el plan ideal para tu proyecto.
            </p>
            <Button
              href="https://app.parcydigital.com"
              variant="primary"
              size="lg"
              className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] hover:bg-[linear-gradient(to_right,#0891b2,#2563eb)]"
            >
              Agendar demo gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
