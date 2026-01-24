import Button from "@/components/ui/Button";
import Image from "next/image";

// Componentes de iconos multicolor personalizados
const ProyectoIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`proyectoGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id={`proyectoGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill={`url(#proyectoGrad1${id})`} />
    <path d="M24 8L12 14v16l12 6 12-6V14L24 8z" fill={`url(#proyectoGrad2${id})`} />
    <circle cx="24" cy="22" r="4" fill="#ffffff" opacity="0.9" />
  </svg>
);

const TiempoRealIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`tiempoGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id={`tiempoGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill={`url(#tiempoGrad1${id})`} />
    <circle cx="24" cy="24" r="16" fill={`url(#tiempoGrad2${id})`} />
    <circle cx="24" cy="24" r="12" fill="#ffffff" />
    <line x1="24" y1="24" x2="24" y2="14" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#a855f7" />
  </svg>
);

const EquiposIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`equiposGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id={`equiposGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill={`url(#equiposGrad1${id})`} />
    <circle cx="30" cy="18" r="8" fill={`url(#equiposGrad2${id})`} />
    <circle cx="24" cy="30" r="8" fill={`url(#equiposGrad1${id})`} />
    <circle cx="18" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="#ffffff" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="#ffffff" opacity="0.8" />
  </svg>
);

const ControlIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`controlGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id={`controlGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 12v16l16 8 16-8V12L24 4z" fill={`url(#controlGrad1${id})`} />
    <path d="M24 8L12 14v12l12 6 12-6V14L24 8z" fill={`url(#controlGrad2${id})`} />
    <path d="M24 12l-4 2v8l4 2 4-2v-8l-4-2z" fill="#ffffff" opacity="0.9" />
    <circle cx="24" cy="18" r="2" fill="#ef4444" />
  </svg>
);

const AnaliticaIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`analiticaGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
      <linearGradient id={`analiticaGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="8" y="28" width="6" height="12" fill={`url(#analiticaGrad1${id})`} rx="2" />
    <rect x="16" y="20" width="6" height="20" fill={`url(#analiticaGrad2${id})`} rx="2" />
    <rect x="24" y="12" width="6" height="28" fill={`url(#analiticaGrad1${id})`} rx="2" />
    <rect x="32" y="16" width="6" height="24" fill={`url(#analiticaGrad2${id})`} rx="2" />
    <line x1="8" y1="28" x2="38" y2="16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VisualizacionIcon = ({ id = "" }: { id?: string }) => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id={`visualGrad1${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id={`visualGrad2${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id={`visualGrad3${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="12" height="12" fill={`url(#visualGrad1${id})`} rx="2" />
    <rect x="24" y="8" width="12" height="12" fill={`url(#visualGrad2${id})`} rx="2" />
    <rect x="8" y="28" width="12" height="12" fill={`url(#visualGrad3${id})`} rx="2" />
    <rect x="24" y="24" width="12" height="12" fill={`url(#visualGrad1${id})`} rx="2" />
  </svg>
);

export default function Hero() {
  const categories = [
    { icon: ProyectoIcon, label: "Proyecto" },
    { icon: TiempoRealIcon, label: "Tiempo real" },
    { icon: EquiposIcon, label: "Equipos" },
    { icon: ControlIcon, label: "Control" },
    { icon: AnaliticaIcon, label: "Analítica" },
    { icon: VisualizacionIcon, label: "Visualización" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 pt-16 md:pt-20 overflow-hidden">
      <div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-16 z-10">
        {/* Título Principal */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">
            Sistema de control de{" "}
            <span className="relative inline-block">
              <span className="relative z-10">disponibilidad</span>
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 3 100 1 150 1C200 1 250 3 298 6"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            y ventas para proyectos de parcelación
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-7 md:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
          Centraliza la disponibilidad de lotes, conecta a tu equipo comercial y técnico, y elimina ventas duplicadas desde una sola plataforma.
          </p>
          
          {/* Botón CTA */}
          <div className="flex justify-center">
            <Button href="https://app.parcydigital.com" variant="primary" size="lg">
              Solicita una demo
            </Button>
          </div>
        </div>

        {/* Categorías/Iconos */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-14 lg:mt-16">
          {/* Carousel en móvil, grid en desktop */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 hero-carousel">
            <div className="flex gap-8 min-w-max snap-x snap-mandatory scroll-smooth">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 group cursor-pointer transition-all duration-300 hover:scale-110 snap-center min-w-[120px]"
                  >
                    <div className="mb-3 transition-all duration-300 group-hover:scale-110 drop-shadow-xl">
                      <IconComponent id={`-mobile-${index}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">
                      {category.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Grid en desktop */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 group cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <div className="mb-3 transition-all duration-300 group-hover:scale-110 drop-shadow-xl">
                    <IconComponent id={`-desktop-${index}`} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Imagen Hero */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 lg:mt-20">
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
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
      </div>
    </section>
  );
}
