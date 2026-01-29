// Iconos SVG personalizados con gradientes
const UrbanizadorIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16">
    <defs>
      <linearGradient id="urbanizadorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="8" y="16" width="32" height="24" fill="url(#urbanizadorGrad)" rx="2" />
    <rect x="12" y="20" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="18" y="20" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="24" y="20" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="30" y="20" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="12" y="26" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="18" y="26" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="24" y="26" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <rect x="30" y="26" width="4" height="4" fill="white" opacity="0.8" rx="1" />
    <path d="M20 8 L24 4 L28 8" fill="url(#urbanizadorGrad)" />
  </svg>
);

const InmobiliariaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16">
    <defs>
      <linearGradient id="inmobiliariaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M24 6L6 18v22h36V18L24 6z" fill="url(#inmobiliariaGrad)" />
    <rect x="18" y="28" width="12" height="12" fill="white" opacity="0.9" />
    <rect x="12" y="20" width="6" height="6" fill="white" opacity="0.7" />
    <rect x="30" y="20" width="6" height="6" fill="white" opacity="0.7" />
  </svg>
);

const DesarrolladorIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16">
    <defs>
      <linearGradient id="desarrolladorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect x="6" y="12" width="16" height="24" fill="url(#desarrolladorGrad)" rx="2" />
    <rect x="26" y="12" width="16" height="24" fill="url(#desarrolladorGrad)" opacity="0.7" rx="2" />
    <rect x="16" y="8" width="16" height="24" fill="url(#desarrolladorGrad)" opacity="0.85" rx="2" />
    <circle cx="24" cy="20" r="3" fill="white" opacity="0.9" />
  </svg>
);

export default function UseCases() {
  const useCases = [
    {
      icon: UrbanizadorIcon,
      title: "Urbanizadores",
      description: "Gestiona todos tus proyectos de parcelación desde una sola plataforma",
      challenges: [
        "Múltiples proyectos simultáneos",
        "Equipos distribuidos geográficamente",
        "Control de disponibilidad en tiempo real",
      ],
      solution: "Parcy centraliza la gestión de todos tus proyectos con información sincronizada en tiempo real para todos los equipos.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: InmobiliariaIcon,
      title: "Inmobiliarias",
      description: "Coordina ventas entre múltiples comerciales sin duplicados ni errores",
      challenges: [
        "Equipo comercial con información desactualizada",
        "Riesgo de ventas duplicadas",
        "Comunicación ineficiente con equipo técnico",
      ],
      solution: "Sincronización instantánea entre comerciales y técnicos. Cero duplicados, información confiable siempre actualizada.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: DesarrolladorIcon,
      title: "Desarrolladores",
      description: "Escala tu operación sin perder control de la disponibilidad",
      challenges: [
        "Crecimiento rápido de proyectos",
        "Necesidad de mantener control centralizado",
        "Procesos manuales que no escalan",
      ],
      solution: "Infraestructura que crece contigo. Agrega proyectos y usuarios sin complicaciones ni configuraciones extensas.",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#e0e7ff)] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[linear-gradient(to_bottom_right,#f5d0fe,#fae8ff)] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Diseñado para{" "}
            <span className="bg-[linear-gradient(to_right,#06b6d4,#ec4899)] bg-clip-text text-transparent">
              profesionales
            </span>
            {" "}como tú
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Solución especializada para diferentes roles en la industria de parcelación
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                
                <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 items-start">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className={`p-4 sm:p-5 bg-[linear-gradient(to_bottom_right,${useCase.gradient})] rounded-3xl shadow-lg`}>
                      <IconComponent />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Desafíos comunes
                      </h4>
                      <ul className="space-y-2">
                        {useCase.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span className="text-sm sm:text-base text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className={`bg-[linear-gradient(to_right,#eff6ff,#ecfeff,#eff6ff)] rounded-2xl p-6 border-2 border-blue-100`}>
                      <h4 className="text-sm font-semibold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent uppercase tracking-wide mb-2">
                        Cómo Parcy te ayuda
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
