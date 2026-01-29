import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const benefits = [
    "Sin permanencia",
    "Soporte incluido",
    "Implementación rápida",
    "Actualizaciones constantes",
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        <div className="text-center">
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Transforma la gestión de{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                tu equipo
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#ctaGradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="ctaGradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a los urbanizadores que ya gestionan disponibilidad con confianza. Sincronización total, información en tiempo real, cero conflictos.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12">
            <Button 
              href="https://app.parcydigital.com" 
              variant="secondary" 
              size="lg"
              className="group bg-white hover:bg-gray-100 text-gray-900 shadow-2xl text-lg px-8 py-6"
            >
              <span className="flex items-center justify-center gap-3">
                Solicita una demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              href="https://app.parcydigital.com" 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
            >
              Hablar con un asesor
            </Button>
          </div>
          
          {/* Benefits list */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm sm:text-base text-blue-100 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm sm:text-base text-blue-200">Proyectos activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm sm:text-base text-blue-200">Sin duplicados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm sm:text-base text-blue-200">Disponibilidad</div>
            </div>
          </div>

          {/* Trust badge */}
          <div className="mt-12 sm:mt-16">
            <p className="text-sm sm:text-base text-blue-200 mb-4">
              Plataforma confiable para urbanizadores profesionales
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-blue-100">🔒 Datos seguros</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-blue-100">⚡ Tiempo real</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-blue-100">🇨🇱 Soporte local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
