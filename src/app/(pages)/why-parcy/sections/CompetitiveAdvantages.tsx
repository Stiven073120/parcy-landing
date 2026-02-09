// Iconos SVG personalizados con gradientes
const RapidezIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="rapidezGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#rapidezGrad)" />
    <path d="M24 10 L28 22 L40 22 L30 30 L34 42 L24 34 L14 42 L18 30 L8 22 L20 22 Z" fill="white" opacity="0.9" />
  </svg>
);

const SoporteIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="soporteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#soporteGrad)" />
    <path d="M24 12c-6.6 0-12 4.5-12 10 0 2.2.9 4.3 2.5 6L12 34l6.5-2.5c1.8.9 3.8 1.5 5.5 1.5 6.6 0 12-4.5 12-10s-5.4-10-12-10z" fill="white" opacity="0.3" />
    <circle cx="18" cy="22" r="2" fill="white" />
    <circle cx="24" cy="22" r="2" fill="white" />
    <circle cx="30" cy="22" r="2" fill="white" />
  </svg>
);

const ActualizacionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="actualizacionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#actualizacionGrad)" />
    <path d="M24 10v8l6-4-6-4z M34 24h-8l4 6 4-6z" fill="white" opacity="0.9" />
    <path d="M18 14l-4 4h8l-4-4z M30 34l4-4h-8l4 4z" fill="white" opacity="0.7" />
  </svg>
);

const CostoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="costoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#costoGrad)" />
    <path d="M24 10v28M20 14h8c2 0 4 2 4 4s-2 4-4 4h-8M20 22h8c2 0 4 2 4 4s-2 4-4 4h-8" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
  </svg>
);

export default function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: RapidezIcon,
      title: "Implementación en minutos",
      description: "No semanas, no consultorías largas. Crea tu cuenta, carga tu proyecto y comienza a gestionar en menos de 5 minutos.",
      comparison: {
        others: "2-4 semanas de configuración",
        parcy: "5 minutos y estás operando"
      }
    },
    {
      icon: SoporteIcon,
      title: "Soporte en español",
      description: "Equipo local que entiende tu industria y habla tu idioma. Soporte dedicado sin barreras de comunicación.",
      comparison: {
        others: "Soporte genérico internacional",
        parcy: "Equipo especializado local"
      }
    },
    {
      icon: ActualizacionIcon,
      title: "Mejora continua",
      description: "Actualizaciones constantes sin costo adicional. La plataforma evoluciona con las necesidades de la industria.",
      comparison: {
        others: "Upgrades pagados y complejos",
        parcy: "Mejoras automáticas incluidas"
      }
    },
    {
      icon: CostoIcon,
      title: "Sin costos ocultos",
      description: "Precio transparente, todo incluido. Sin sorpresas, sin módulos adicionales, sin cobros por soporte.",
      comparison: {
        others: "Licencias + módulos + soporte",
        parcy: "Todo incluido, precio fijo"
      }
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[linear-gradient(to_bottom,#f9fafb,#ffffff)] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[linear-gradient(to_bottom_right,#fef3c7,#fed7aa)] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#e0e7ff)] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Ventajas{" "}
            <span className="bg-[linear-gradient(to_right,#f59e0b,#3b82f6)] bg-clip-text text-transparent">
              competitivas
            </span>
            {" "}reales
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Lo que nos hace diferentes de otras soluciones en el mercado
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex mb-6">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 group-hover:border-blue-300 transition-all shadow-md group-hover:shadow-lg">
                        <IconComponent />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {advantage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                      {advantage.description}
                    </p>

                    {/* Comparison */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                        <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                          Otros
                        </div>
                        <p className="text-sm text-red-700 font-medium">
                          {advantage.comparison.others}
                        </p>
                      </div>
                      <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                        <div className="text-xs font-semibold text-cyan-700 uppercase tracking-wide mb-2">
                          Parcy
                        </div>
                        <p className="text-sm text-cyan-800 font-medium">
                          {advantage.comparison.parcy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[linear-gradient(to_bottom_right,#111827,#1f2937)] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Empieza a gestionar de forma{" "}
                <span className="bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] bg-clip-text text-transparent">
                  profesional
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a los urbanizadores que ya confían en Parcy para la gestión de disponibilidad
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.parcydigital.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl transition-all shadow-lg text-lg"
                >
                  Solicita una demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/landing/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all backdrop-blur-sm text-lg"
                >
                  Ver planes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
