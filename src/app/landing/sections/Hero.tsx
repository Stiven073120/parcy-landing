import Button from "@/components/ui/Button";
import Image from "next/image";

// Iconos personalizados con gradientes
const ProyectoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="proyectoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="proyectoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="url(#proyectoGrad1)" />
    <path d="M24 8L12 14v16l12 6 12-6V14L24 8z" fill="url(#proyectoGrad2)" />
    <circle cx="24" cy="22" r="4" fill="#ffffff" opacity="0.9" />
  </svg>
);

const TiempoRealIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="tiempoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="tiempoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#tiempoGrad1)" />
    <circle cx="24" cy="24" r="16" fill="url(#tiempoGrad2)" />
    <circle cx="24" cy="24" r="12" fill="#ffffff" />
    <line x1="24" y1="24" x2="24" y2="14" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#a855f7" />
  </svg>
);

const EquiposIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="equiposGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="equiposGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill="url(#equiposGrad1)" />
    <circle cx="30" cy="18" r="8" fill="url(#equiposGrad2)" />
    <circle cx="24" cy="30" r="8" fill="url(#equiposGrad1)" />
    <circle cx="18" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="#ffffff" opacity="0.8" />
  </svg>
);

const ControlIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="controlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="controlGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 12v16l16 8 16-8V12L24 4z" fill="url(#controlGrad1)" />
    <path d="M24 8L12 14v12l12 6 12-6V14L24 8z" fill="url(#controlGrad2)" />
    <path d="M24 12l-4 2v8l4 2 4-2v-8l-4-2z" fill="#ffffff" opacity="0.9" />
    <circle cx="24" cy="18" r="2" fill="#ef4444" />
  </svg>
);

const AnaliticaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="analiticaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
      <linearGradient id="analiticaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="8" y="28" width="6" height="12" fill="url(#analiticaGrad1)" rx="2" />
    <rect x="16" y="20" width="6" height="20" fill="url(#analiticaGrad2)" rx="2" />
    <rect x="24" y="12" width="6" height="28" fill="url(#analiticaGrad1)" rx="2" />
    <rect x="32" y="16" width="6" height="24" fill="url(#analiticaGrad2)" rx="2" />
    <line x1="8" y1="28" x2="38" y2="16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VisualizacionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11">
    <defs>
      <linearGradient id="visualGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="visualGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="visualGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="12" height="12" fill="url(#visualGrad1)" rx="2" />
    <rect x="24" y="8" width="12" height="12" fill="url(#visualGrad2)" rx="2" />
    <rect x="8" y="28" width="12" height="12" fill="url(#visualGrad3)" rx="2" />
    <rect x="24" y="24" width="12" height="12" fill="url(#visualGrad1)" rx="2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30"></div>
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40"></div>
      
      {/* Single subtle gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">

            {/* Main Heading */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.15] text-gray-900">
                Control de{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    disponibilidad
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
                <br />
                y ventas para parcelaciones
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Centraliza la disponibilidad de lotes, conecta a tu equipo comercial y técnico, y elimina ventas duplicadas desde una sola plataforma.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button 
                href="https://app.parcydigital.com" 
                variant="primary" 
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Solicita una demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <button className="px-6 sm:px-8 py-3.5 sm:py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all">
                Ver características
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative max-w-2xl mx-auto lg:mx-0 w-full">
            
            {/* Main Image */}
            <div className="relative group">
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-white">
                <Image
                  src="/images/hero/AT-prueba.webp"
                  alt="Parcy - Plataforma de gestión inmobiliaria"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Feature cards below image - 2 rows of 3 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ProyectoIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Proyecto</div>
              </div>
              
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <TiempoRealIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Tiempo real</div>
              </div>
              
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <EquiposIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Equipos</div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ControlIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Control</div>
              </div>
              
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <AnaliticaIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Analítica</div>
              </div>
              
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group cursor-pointer">
                <div className="mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <VisualizacionIcon />
                </div>
                <div className="text-center text-xs sm:text-sm font-medium text-gray-700">Visualización</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
