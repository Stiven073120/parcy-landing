// Componentes de iconos multicolor personalizados para problemas
const VentasDuplicadasIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <defs>
      <linearGradient id={`ventasGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id={`ventasGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    {/* Dos documentos superpuestos indicando duplicación */}
    <rect x="12" y="10" width="20" height="26" rx="2" fill={`url(#ventasGrad1${id})`} transform="rotate(-5 22 23)" />
    <rect x="16" y="12" width="20" height="26" rx="2" fill={`url(#ventasGrad2${id})`} transform="rotate(5 26 25)" />
    <path d="M20 20 L28 20 M20 26 L28 26" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    {/* Símbolo de alerta */}
    <circle cx="36" cy="14" r="6" fill="#ffffff" opacity="0.95" />
    <circle cx="36" cy="14" r="5" fill="#ef4444" opacity="0.2" />
    <path d="M36 10v3M36 16h.01" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ProcesosManualesIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <defs>
      <linearGradient id={`procesosGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
      <linearGradient id={`procesosGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Documentos apilados indicando procesos manuales */}
    <rect x="10" y="12" width="24" height="28" rx="2" fill={`url(#procesosGrad1${id})`} />
    <rect x="12" y="10" width="24" height="28" rx="2" fill={`url(#procesosGrad2${id})`} opacity="0.8" />
    <rect x="14" y="8" width="24" height="28" rx="2" fill={`url(#procesosGrad1${id})`} opacity="0.6" />
    {/* Líneas de texto en el documento superior */}
    <line x1="18" y1="16" x2="30" y2="16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="22" x2="28" y2="22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="28" x2="26" y2="28" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    {/* Lápiz indicando edición manual */}
    <circle cx="36" cy="8" r="3" fill="#ffffff" opacity="0.95" />
    <path d="M32 8 L36 4 L40 8 L36 12 Z" fill="#f59e0b" opacity="0.9" />
    <line x1="36" y1="4" x2="36" y2="12" stroke="#ffffff" strokeWidth="1" />
  </svg>
);

const DesconexionEquiposIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <defs>
      <linearGradient id={`desconexionGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id={`desconexionGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Equipo técnico */}
    <circle cx="14" cy="20" r="7" fill={`url(#desconexionGrad1${id})`} />
    <circle cx="14" cy="20" r="4" fill="#ffffff" opacity="0.8" />
    {/* Equipo comercial */}
    <circle cx="34" cy="20" r="7" fill={`url(#desconexionGrad2${id})`} />
    <circle cx="34" cy="20" r="4" fill="#ffffff" opacity="0.8" />
    {/* Línea desconectada con X en el medio */}
    <line x1="21" y1="20" x2="27" y2="20" stroke="#ffffff" strokeWidth="2" strokeDasharray="2,2" opacity="0.5" />
    <circle cx="24" cy="20" r="4" fill="#ef4444" />
    <path d="M22 18 L26 22 M26 18 L22 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HerramientasGenericasIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <defs>
      <linearGradient id={`herramientasGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id={`herramientasGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Caja de herramientas genérica */}
    <rect x="8" y="16" width="32" height="24" rx="2" fill={`url(#herramientasGrad1${id})`} />
    <rect x="10" y="18" width="28" height="20" rx="1" fill={`url(#herramientasGrad2${id})`} />
    {/* Herramientas genéricas dentro */}
    <rect x="14" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="22" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="30" y="22" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="28" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    <rect x="22" y="28" width="6" height="2" rx="1" fill="#ffffff" opacity="0.8" />
    {/* Símbolo de "no adecuado" */}
    <circle cx="38" cy="12" r="6" fill="#ffffff" opacity="0.95" />
    <circle cx="38" cy="12" r="5" fill="#ef4444" opacity="0.2" />
    <path d="M35 12 L41 12" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function Problem() {
  const problems = [
    {
      icon: VentasDuplicadasIcon,
      title: "Ventas duplicadas y conflictos",
      description: "Falta de una fuente única de información actualizada en tiempo real, lo que genera reservas cruzadas, conflictos internos y pérdida de confianza en el proceso comercial.",
    },
    {
      icon: ProcesosManualesIcon,
      title: "Procesos manuales ineficientes",
      description: "Gestión diaria con hojas de cálculo, planos y archivos editados manualmente que consumen tiempo operativo y aumentan el margen de error del equipo interno.",
    },
    {
      icon: DesconexionEquiposIcon,
      title: "Desconexión entre equipos",
      description: "Falta de sincronización entre equipos técnicos y comerciales. Cada uno trabaja con información diferente.",
    },
    {
      icon: HerramientasGenericasIcon,
      title: "Herramientas no especializadas",
      description: "Software genérico que no entiende la gestión de disponibilidad de lotes. No diseñado para proyectos de parcelación.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Tu equipo interno trabaja con{" "}
            <span className="relative inline-block">
              <span className="relative z-10">información desactualizada</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 400 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 4 100 2 150 2C200 2 250 4 298 8C320 9 350 7 398 8"
                  stroke="url(#problemTitleGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="problemTitleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
            </span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            El problema no es vender.
            Es gestionar la disponibilidad de lotes sin información confiable, centralizada y sincronizada para todo tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <div className="transition-all duration-300 group-hover:scale-110 drop-shadow-lg">
                    <IconComponent id={`-problem-${index}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-900">
            Pérdida de tiempo del equipo, conflictos internos y ventas frustradas por falta de sincronización.
          </p>
        </div>
      </div>
    </section>
  );
}
