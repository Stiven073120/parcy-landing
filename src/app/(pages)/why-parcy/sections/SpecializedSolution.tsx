// Iconos SVG personalizados con gradientes
const SpecializedIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="specializedGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="specializedGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#specializedGrad1)" />
    <path d="M24 10 L30 18 L38 18 L32 26 L38 34 L30 34 L24 42 L18 34 L10 34 L16 26 L10 18 L18 18 Z" fill="url(#specializedGrad2)" />
    <circle cx="24" cy="24" r="6" fill="white" opacity="0.9" />
  </svg>
);

const GenericIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="genericGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="32" height="32" rx="4" fill="url(#genericGrad1)" />
    <rect x="12" y="12" width="24" height="4" rx="1" fill="white" opacity="0.6" />
    <rect x="12" y="20" width="20" height="4" rx="1" fill="white" opacity="0.6" />
    <rect x="12" y="28" width="16" height="4" rx="1" fill="white" opacity="0.6" />
  </svg>
);

const FocusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="focusGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" stroke="url(#focusGrad1)" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="14" stroke="url(#focusGrad1)" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="8" fill="url(#focusGrad1)" />
    <circle cx="24" cy="24" r="4" fill="white" />
  </svg>
);

export default function SpecializedSolution() {
  const comparisons = [
    {
      icon: GenericIcon,
      type: "Software Genérico",
      subtitle: "CRM adaptado",
      points: [
        "Diseñado para ventas generales",
        "Requiere configuración compleja",
        "No entiende lotes ni parcelación",
        "Curva de aprendizaje larga",
      ],
      isNegative: true,
    },
    {
      icon: SpecializedIcon,
      type: "Parcy Digital",
      subtitle: "Solución especializada",
      points: [
        "Diseñado para gestión de lotes",
        "Configuración simple y rápida",
        "Entiende tu proceso específico",
        "Intuitivo desde el primer día",
      ],
      isNegative: false,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#e0e7ff)] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <FocusIcon />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Especialización{" "}
            <span className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
              vs. Adaptación
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            La diferencia entre software diseñado específicamente para tu industria y software genérico forzado a funcionar.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12 sm:mb-16">
          {comparisons.map((comparison, index) => {
            const IconComponent = comparison.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 sm:p-10 border-2 ${
                  comparison.isNegative
                    ? 'bg-gray-50 border-gray-300'
                    : 'bg-[linear-gradient(to_bottom_right,#ecfeff,#dbeafe)] border-cyan-300 shadow-xl'
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl ${
                    comparison.isNegative
                      ? 'bg-white border-2 border-gray-200'
                      : 'bg-white border-2 border-cyan-200'
                  }`}>
                    <IconComponent />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-2 ${
                  comparison.isNegative ? 'text-gray-900' : 'text-gray-900'
                }`}>
                  {comparison.type}
                </h3>
                <p className={`text-center text-sm sm:text-base mb-6 ${
                  comparison.isNegative ? 'text-gray-600' : 'text-cyan-800'
                }`}>
                  {comparison.subtitle}
                </p>

                {/* Points list */}
                <ul className="space-y-4">
                  {comparison.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 ${
                        comparison.isNegative
                          ? 'bg-red-100 text-red-600'
                          : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {comparison.isNegative ? '✗' : '✓'}
                      </span>
                      <span className="text-sm sm:text-base text-gray-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[linear-gradient(to_right,#eff6ff,#ecfeff,#eff6ff)] border-2 border-blue-200 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Parcy no es un CRM adaptado.{" "}
              <span className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                Es una plataforma especializada
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Diseñada desde cero para la gestión de disponibilidad en proyectos de parcelación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
