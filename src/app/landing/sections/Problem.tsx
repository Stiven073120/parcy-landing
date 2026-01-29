// Componentes de iconos multicolor personalizados para problemas
const VentasDuplicadasIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="ventasGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="ventasGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="12" y="10" width="20" height="26" rx="2" fill="url(#ventasGrad1)" transform="rotate(-5 22 23)" />
    <rect x="16" y="12" width="20" height="26" rx="2" fill="url(#ventasGrad2)" transform="rotate(5 26 25)" />
    <path d="M20 20 L28 20 M20 26 L28 26" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    <circle cx="36" cy="14" r="6" fill="#ffffff" opacity="0.95" />
    <path d="M36 10v3M36 16h.01" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ProcesosManualesIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="procesosGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="procesosGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="10" y="12" width="24" height="28" rx="2" fill="url(#procesosGrad1)" />
    <rect x="12" y="10" width="24" height="28" rx="2" fill="url(#procesosGrad2)" opacity="0.8" />
    <rect x="14" y="8" width="24" height="28" rx="2" fill="url(#procesosGrad1)" opacity="0.6" />
    <line x1="18" y1="16" x2="30" y2="16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="22" x2="28" y2="22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="28" x2="26" y2="28" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DesconexionEquiposIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="desconexionGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="desconexionGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="14" cy="20" r="7" fill="url(#desconexionGrad1)" />
    <circle cx="14" cy="20" r="4" fill="#ffffff" opacity="0.8" />
    <circle cx="34" cy="20" r="7" fill="url(#desconexionGrad2)" />
    <circle cx="34" cy="20" r="4" fill="#ffffff" opacity="0.8" />
    <line x1="21" y1="20" x2="27" y2="20" stroke="#ffffff" strokeWidth="2" strokeDasharray="2,2" opacity="0.5" />
    <circle cx="24" cy="20" r="4" fill="#3b82f6" />
    <path d="M22 18 L26 22 M26 18 L22 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HerramientasGenericasIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="herramientasGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="8" y="16" width="32" height="24" rx="2" fill="url(#herramientasGrad1)" />
    <rect x="14" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="22" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="30" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="28" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="22" y="28" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <circle cx="38" cy="12" r="6" fill="#ffffff" opacity="0.95" />
    <path d="M35 12 L41 12" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function Problem() {
  const problems = [
    {
      icon: VentasDuplicadasIcon,
      title: "Ventas duplicadas",
      description: "Información desactualizada que genera reservas cruzadas, conflictos internos y pérdida de confianza en el proceso comercial.",
    },
    {
      icon: ProcesosManualesIcon,
      title: "Procesos manuales",
      description: "Hojas de cálculo y planos editados manualmente que consumen tiempo y aumentan el margen de error del equipo.",
    },
    {
      icon: DesconexionEquiposIcon,
      title: "Equipos desconectados",
      description: "Falta de sincronización entre equipos técnicos y comerciales. Cada uno trabaja con información diferente.",
    },
    {
      icon: HerramientasGenericasIcon,
      title: "Software no especializado",
      description: "Herramientas genéricas que no entienden la gestión de disponibilidad de lotes en parcelaciones.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            ¿Trabajas con{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                información desactualizada
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            El problema no es vender. Es gestionar la disponibilidad de lotes sin información confiable, centralizada y sincronizada.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-5 items-start">
                  <div className="shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-100 rounded-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Resultado: Pérdida de tiempo, conflictos internos y ventas frustradas por falta de sincronización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
