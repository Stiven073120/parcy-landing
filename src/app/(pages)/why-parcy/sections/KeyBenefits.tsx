// Iconos SVG personalizados con gradientes
const TimeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="timeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#timeGrad)" />
    <circle cx="24" cy="24" r="14" fill="white" opacity="0.3" />
    <line x1="24" y1="24" x2="24" y2="14" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="white" />
  </svg>
);

const AccuracyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="accuracyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#accuracyGrad)" />
    <path d="M14 24L20 30L34 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const TeamIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="7" fill="url(#teamGrad)" />
    <circle cx="30" cy="18" r="7" fill="url(#teamGrad)" opacity="0.8" />
    <circle cx="24" cy="30" r="7" fill="url(#teamGrad)" opacity="0.6" />
    <circle cx="18" cy="18" r="4" fill="white" opacity="0.8" />
    <circle cx="30" cy="18" r="4" fill="white" opacity="0.8" />
    <circle cx="24" cy="30" r="4" fill="white" opacity="0.8" />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <rect x="10" y="26" width="6" height="14" fill="url(#scaleGrad)" rx="2" />
    <rect x="18" y="20" width="6" height="20" fill="url(#scaleGrad)" rx="2" opacity="0.8" />
    <rect x="26" y="14" width="6" height="26" fill="url(#scaleGrad)" rx="2" opacity="0.6" />
    <rect x="34" y="8" width="6" height="32" fill="url(#scaleGrad)" rx="2" opacity="0.4" />
    <path d="M8 26 L42 8" stroke="url(#scaleGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 10v12c0 10 8 18 16 20 8-2 16-10 16-20V10L24 4z" fill="url(#securityGrad)" />
    <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const IntuitivoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="intuitivoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="20" r="6" fill="url(#intuitivoGrad)" />
    <path d="M24 28 L16 38 L20 38 L20 44 L28 44 L28 38 L32 38 Z" fill="url(#intuitivoGrad)" opacity="0.8" />
    <circle cx="24" cy="20" r="3" fill="white" opacity="0.9" />
  </svg>
);

export default function KeyBenefits() {
  const benefits = [
    {
      icon: TimeIcon,
      title: "Ahorra tiempo valioso",
      description: "Elimina procesos manuales y hojas de cálculo desactualizadas. Tu equipo se enfoca en vender, no en actualizar datos.",
      stat: "70%",
      statLabel: "Menos tiempo administrativo"
    },
    {
      icon: AccuracyIcon,
      title: "Información 100% precisa",
      description: "Datos sincronizados en tiempo real para todos. Sin confusiones, sin duplicados, sin información desactualizada.",
      stat: "0",
      statLabel: "Ventas duplicadas"
    },
    {
      icon: TeamIcon,
      title: "Equipos sincronizados",
      description: "Técnicos y comerciales trabajan con la misma información. Comunicación fluida y procesos coordinados.",
      stat: "100%",
      statLabel: "Sincronización de equipo"
    },
    {
      icon: ScaleIcon,
      title: "Escala con tu negocio",
      description: "Gestiona uno o múltiples proyectos sin complicaciones. La plataforma crece contigo sin configuraciones complejas.",
      stat: "∞",
      statLabel: "Proyectos simultáneos"
    },
    {
      icon: SecurityIcon,
      title: "Datos protegidos",
      description: "Trazabilidad completa de cada cambio. Historial de modificaciones y auditoría para proteger tu operación.",
      stat: "24/7",
      statLabel: "Monitoreo y respaldo"
    },
    {
      icon: IntuitivoIcon,
      title: "Fácil de usar",
      description: "Interfaz intuitiva que cualquier miembro del equipo puede usar desde el primer día sin capacitación extensa.",
      stat: "5min",
      statLabel: "Tiempo de aprendizaje"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[linear-gradient(to_bottom,#f9fafb,#ffffff,#f9fafb)] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[linear-gradient(to_bottom_right,#dbeafe,#e0e7ff)] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Beneficios que{" "}
            <span className="bg-[linear-gradient(to_right,#06b6d4,#8b5cf6)] bg-clip-text text-transparent">
              transforman
            </span>
            {" "}tu operación
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Impacto real en tu día a día y en los resultados de tu equipo
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex mb-5">
                    <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 group-hover:border-blue-300 transition-all shadow-md group-hover:shadow-lg">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-4 border-t-2 border-gray-100">
                    <div className="text-2xl sm:text-3xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent mb-1">
                      {benefit.stat}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {benefit.statLabel}
                    </p>
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
