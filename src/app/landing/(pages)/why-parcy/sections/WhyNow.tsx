import CTAButton from "@/components/ui/CTAButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Iconos SVG personalizados con gradientes
const UrgencyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 sm:w-20 sm:h-20">
    <defs>
      <linearGradient id="urgencyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#urgencyGrad)" />
    <circle cx="24" cy="24" r="16" fill="white" opacity="0.3" />
    <line x1="24" y1="24" x2="24" y2="12" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="24" x2="32" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="white" />
    <path d="M40 24c0 8.8-7.2 16-16 16s-16-7.2-16-16" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5" />
  </svg>
);

export default function WhyNow() {
  const reasons = [
    "Cada día con procesos manuales es tiempo perdido",
    "Las ventas duplicadas afectan tu reputación",
    "Tu competencia ya está digitalizando",
    "Los errores de coordinación cuestan dinero",
  ];

  const benefits = [
    "Sin permanencia",
    "Implementación inmediata",
    "Soporte incluido",
    "Prueba sin compromiso",
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[linear-gradient(to_bottom_right,#1e293b,#0f172a,#1e293b)] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <UrgencyIcon />
        </div>

        {/* Main heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ¿Por qué{" "}
            <span className="relative inline-block">
              <span className="bg-[linear-gradient(to_right,#f59e0b,#ef4444)] bg-clip-text text-transparent">
                ahora
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#nowGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="nowGradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#f59e0b"/>
                    <stop offset="1" stopColor="#ef4444"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            ?
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
            Cada día que pasa sin una solución especializada representa pérdidas evitables para tu operación
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[linear-gradient(to_bottom_right,#f59e0b,#ef4444)] flex items-center justify-center text-white font-bold shadow-lg">
                  !
                </div>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed pt-1">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-white/20 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Comienza hoy mismo
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Implementación en minutos. Sin riesgos, sin compromisos largos.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <CTAButton 
                variant="secondary"
                className="group bg-white hover:bg-gray-100 text-gray-900 shadow-2xl"
              >
                <span className="flex items-center justify-center gap-3">
                  Solicita una demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </CTAButton>
              <CTAButton 
                href="/landing/pricing" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Ver planes y precios
              </CTAButton>
            </div>
            
            {/* Benefits list */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm sm:text-base text-gray-200 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent mb-2">
              5min
            </div>
            <div className="text-sm text-gray-400">Setup completo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(to_right,#3b82f6,#8b5cf6)] bg-clip-text text-transparent mb-2">
              0
            </div>
            <div className="text-sm text-gray-400">Permanencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(to_right,#8b5cf6,#ec4899)] bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-400">Disponibilidad</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(to_right,#10b981,#06b6d4)] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-400">Especializado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
