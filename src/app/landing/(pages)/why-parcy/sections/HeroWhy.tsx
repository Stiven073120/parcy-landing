import Button from "@/components/ui/Button";

export default function HeroWhy() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#f9fafb,#ecfeff)]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[linear-gradient(to_bottom_right,#dbeafe,#e0e7ff)] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6 sm:mb-8">
            ¿Por qué elegir{" "}
            <span className="relative inline-block">
              <span className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                Parcy
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#whyGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="whyGradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            ?
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto">
            No es solo software. Es la solución especializada que tu equipo necesita para gestionar disponibilidad de lotes sin errores, duplicados ni descoordinación.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <Button 
              href="https://app.parcydigital.com" 
              variant="primary" 
              size="lg"
              className="group bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] hover:bg-[linear-gradient(to_right,#0891b2,#2563eb)] shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                Solicita una demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            <Button 
              href="/landing/pricing" 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-400"
            >
              Ver planes
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-sm text-gray-600 font-medium">Especializado</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#3b82f6,#8b5cf6)] bg-clip-text text-transparent mb-2">
                0
              </div>
              <p className="text-sm text-gray-600 font-medium">Duplicados</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#8b5cf6,#ec4899)] bg-clip-text text-transparent mb-2">
                Real-time
              </div>
              <p className="text-sm text-gray-600 font-medium">Sincronización</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#10b981,#06b6d4)] bg-clip-text text-transparent mb-2">
                5min
              </div>
              <p className="text-sm text-gray-600 font-medium">Setup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
