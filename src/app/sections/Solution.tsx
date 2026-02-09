import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

// Iconos personalizados con gradientes - mismos del Hero
const VisualizacionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="visualSolGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="visualSolGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="visualSolGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="12" height="12" fill="url(#visualSolGrad1)" rx="2" />
    <rect x="24" y="8" width="12" height="12" fill="url(#visualSolGrad2)" rx="2" />
    <rect x="8" y="28" width="12" height="12" fill="url(#visualSolGrad3)" rx="2" />
    <rect x="24" y="24" width="12" height="12" fill="url(#visualSolGrad1)" rx="2" />
  </svg>
);

const TiempoRealIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="tiempoSolGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="tiempoSolGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#tiempoSolGrad1)" />
    <circle cx="24" cy="24" r="16" fill="url(#tiempoSolGrad2)" />
    <circle cx="24" cy="24" r="12" fill="#ffffff" />
    <line x1="24" y1="24" x2="24" y2="14" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#a855f7" />
  </svg>
);

const EquiposIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14">
    <defs>
      <linearGradient id="equiposSolGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="equiposSolGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill="url(#equiposSolGrad1)" />
    <circle cx="30" cy="18" r="8" fill="url(#equiposSolGrad2)" />
    <circle cx="24" cy="30" r="8" fill="url(#equiposSolGrad1)" />
    <circle cx="18" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="#ffffff" opacity="0.8" />
  </svg>
);

export default function Solution() {
  const benefits = [
    {
      icon: VisualizacionIcon,
      title: "Visualización clara",
      description: "Cada lote visible e interactivo para decisiones rápidas",
    },
    {
      icon: TiempoRealIcon,
      title: "Tiempo real",
      description: "Estados actualizados al instante, cero confusiones",
    },
    {
      icon: EquiposIcon,
      title: "Equipos sincronizados",
      description: "Técnicos y comerciales con la misma información",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Grid pattern */}
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
            Control de disponibilidad{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                en tiempo real
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
            Parcy centraliza la gestión de disponibilidad, sincroniza tu equipo y garantiza información confiable para evitar errores.
          </p>
        </div>

        {/* Main Content - Image + Benefits */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Image side */}
          <div className="order-1 lg:order-1">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
                <Image
                  src="/images/solution/dashboard_disponibilidad.jpg"
                  alt="Dashboard de Parcy - Vista de disponibilidad de lotes en tiempo real"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Benefits side */}
          <div className="order-2 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                >
                  <div className="shrink-0 p-2 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-6">
              <CTAButton className="w-full sm:w-auto">
                Ver cómo funciona
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Bottom highlight - Results */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-lg">
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                <span className="font-semibold text-gray-900">Beneficio:</span> Decisiones precisas, ventas gestionadas correctamente y servicio confiable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
