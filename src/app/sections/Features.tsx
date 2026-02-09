import Image from "next/image";

// Iconos personalizados con gradientes multicolor
// Mismo icono del Hero
const VisualizacionInteractivaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="visualFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="visualFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="visualFeatGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="12" height="12" fill="url(#visualFeatGrad1)" rx="2" />
    <rect x="24" y="8" width="12" height="12" fill="url(#visualFeatGrad2)" rx="2" />
    <rect x="8" y="28" width="12" height="12" fill="url(#visualFeatGrad3)" rx="2" />
    <rect x="24" y="24" width="12" height="12" fill="url(#visualFeatGrad1)" rx="2" />
  </svg>
);

// Mismo icono del Hero
const TiempoRealIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="tiempoFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="tiempoFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#tiempoFeatGrad1)" />
    <circle cx="24" cy="24" r="16" fill="url(#tiempoFeatGrad2)" />
    <circle cx="24" cy="24" r="12" fill="#ffffff" />
    <line x1="24" y1="24" x2="24" y2="14" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#a855f7" />
  </svg>
);

// Mismo icono del Hero
const GestionEquiposIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="equiposFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="equiposFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill="url(#equiposFeatGrad1)" />
    <circle cx="30" cy="18" r="8" fill="url(#equiposFeatGrad2)" />
    <circle cx="24" cy="30" r="8" fill="url(#equiposFeatGrad1)" />
    <circle cx="18" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="#ffffff" opacity="0.8" />
  </svg>
);

const ControlTrazabilidadIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="controlFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="controlFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Escudo simplificado */}
    <path d="M24 4L8 10v12c0 10 8 18 16 20 8-2 16-10 16-20V10L24 4z" fill="url(#controlFeatGrad1)" />
    <path d="M24 8L12 14v10c0 6 4 10 12 12 8-2 12-6 12-12V14L24 8z" fill="url(#controlFeatGrad2)" />
    {/* Check de verificación */}
    <path d="M18 24l4 4 8-8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const InformesTiempoRealIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="informesFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
      <linearGradient id="informesFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Documento */}
    <rect x="10" y="6" width="28" height="36" rx="2" fill="url(#informesFeatGrad1)" />
    <rect x="12" y="8" width="24" height="32" rx="1.5" fill="url(#informesFeatGrad2)" />
    {/* Líneas del documento */}
    <line x1="16" y1="14" x2="32" y2="14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    <line x1="16" y1="20" x2="28" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    {/* Gráfico pequeño */}
    <rect x="16" y="26" width="3" height="8" fill="#ffffff" opacity="0.9" rx="1" />
    <rect x="21" y="24" width="3" height="10" fill="#ffffff" opacity="0.9" rx="1" />
    <rect x="26" y="22" width="3" height="12" fill="#ffffff" opacity="0.9" rx="1" />
    <rect x="31" y="25" width="3" height="9" fill="#ffffff" opacity="0.9" rx="1" />
  </svg>
);

const EstadosPersonalizadosIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="estadosFeatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="estadosFeatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="estadosFeatGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    {/* Capas superpuestas con efecto de profundidad */}
    <rect x="4" y="8" width="28" height="32" rx="3" fill="url(#estadosFeatGrad1)" opacity="0.5" />
    <rect x="8" y="12" width="28" height="28" rx="3" fill="url(#estadosFeatGrad2)" opacity="0.7" />
    <rect x="12" y="16" width="28" height="24" rx="3" fill="url(#estadosFeatGrad3)" />
    {/* Etiquetas de estado */}
    <rect x="16" y="20" width="20" height="3" rx="1.5" fill="#ffffff" opacity="0.9" />
    <rect x="16" y="26" width="16" height="3" rx="1.5" fill="#ffffff" opacity="0.8" />
    <rect x="16" y="32" width="18" height="3" rx="1.5" fill="#ffffff" opacity="0.7" />
    {/* Iconos de check */}
    <circle cx="42" cy="12" r="6" fill="#ffffff" opacity="0.95" />
    <path d="M39.5 12 L41 13.5 L44.5 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function Features() {
  const features = [
    {
      icon: VisualizacionInteractivaIcon,
      title: "Visualización interactiva",
      description: "Cada lote visible de forma clara e interactiva. Gestiona disponibilidad sin depender de planos PDF estáticos.",
      color: "from-cyan-500 to-blue-500",
      hoverBorderColor: "hover:border-cyan-300"
    },
    {
      icon: TiempoRealIcon,
      title: "Tiempo real",
      description: "Estados actualizados al instante para todo el equipo. Evita confusiones, duplicados y errores entre departamentos.",
      color: "from-blue-500 to-purple-500",
      hoverBorderColor: "hover:border-purple-300"
    },
    {
      icon: GestionEquiposIcon,
      title: "Gestión de equipos",
      description: "Usuarios con roles y permisos configurables. Control total de acceso según responsabilidades de cada miembro.",
      color: "from-purple-500 to-pink-500",
      hoverBorderColor: "hover:border-green-300"
    },
    {
      icon: ControlTrazabilidadIcon,
      title: "Control y trazabilidad",
      description: "Cada cambio queda registrado con auditoría completa. Transparencia total para el equipo interno.",
      color: "from-blue-500 to-cyan-500",
      hoverBorderColor: "hover:border-blue-300"
    },
    {
      icon: InformesTiempoRealIcon,
      title: "Informes en tiempo real",
      description: "Datos e indicadores actualizados sobre disponibilidad. Dashboards para toma de decisiones operativas.",
      color: "from-orange-500 to-red-500",
      hoverBorderColor: "hover:border-orange-300"
    },
    {
      icon: EstadosPersonalizadosIcon,
      title: "Estados personalizados",
      description: "Define estados específicos para tu proceso. Adaptado a la forma de trabajo de tu equipo y proyecto.",
      color: "from-green-500 to-cyan-500",
      hoverBorderColor: "hover:border-green-300"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Todo lo que necesitas para{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                gestionar disponibilidad
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
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Funciones diseñadas específicamente para la gestión de lotes en proyectos de parcelación.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 ${feature.hoverBorderColor} hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className="mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient effect - más sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-3 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Image Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Visualiza tu proyecto en{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  una sola pantalla
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Interface diseñada para que cualquier miembro de tu equipo pueda gestionar disponibilidad desde el primer día.
              </p>

              {/* Image */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border-2 border-gray-600 overflow-hidden shadow-2xl">
                <Image
                  src="/images/features/dashboard.png"
                  alt="Dashboard principal de Parcy - Vista completa de gestión de disponibilidad"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
