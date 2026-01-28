import { Upload, Settings, Zap, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Carga tu proyecto",
      description: "Importa tu plano y configura los lotes en minutos. Proceso simple que tu equipo técnico puede hacer sin complicaciones.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configura tu equipo",
      description: "Crea usuarios para equipos técnico y comercial. Asigna roles y permisos según responsabilidades de cada miembro.",
      color: "from-blue-500 to-purple-500",
    },
    {
      number: "03",
      icon: Zap,
      title: "Gestiona en tiempo real",
      description: "Tu equipo actualiza disponibilidad al instante. Reservas y ventas sincronizadas para todos los miembros.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Toma decisiones",
      description: "Accede a informes y analítica en tiempo real. Optimiza la gestión operativa con datos actualizados.",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Comienza en{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              minutos
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Configuración rápida y sencilla. Tu equipo estará gestionando disponibilidad con información sincronizada desde el primer día.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12 lg:gap-x-20 lg:gap-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector line for desktop */}
                {index % 2 === 0 && index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[calc(100%+2rem)] w-16 lg:w-20">
                    <svg className="w-full h-2" viewBox="0 0 100 8" fill="none">
                      <path
                        d="M0 4 L100 4"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}

                <div className="flex gap-6 items-start">
                  {/* Number badge */}
                  <div className="shrink-0">
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <step.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual mockup section */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Interfaz intuitiva desde el día uno
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Sin curvas de aprendizaje complicadas
              </p>
            </div>

            {/* Image placeholder */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              {/* 
                IMAGEN NECESARIA:
                - Secuencia de 4 pasos en formato visual (timeline o proceso)
                - Mostrar pantallas/estados del proceso de configuración
                - Iconos de: Upload, Settings, Zap, TrendingUp integrados
                - Flechas o conectores entre pasos
                - Colores gradientes cyan → purple → pink
                - Aspecto moderno y profesional
                - Dimensiones sugeridas: 1200x600px
              */}
              <div className="aspect-[2/1] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center p-8">
                  <div className="flex gap-4 justify-center mb-4">
                    {steps.map((step, index) => (
                      <div key={index} className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Proceso de configuración paso a paso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://app.parcydigital.com" 
              variant="primary" 
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg"
            >
              Solicita una demo
            </Button>
            <Button 
              href="https://app.parcydigital.com" 
              variant="outline" 
              size="lg"
              className="border-2"
            >
              Hablar con un asesor
            </Button>
          </div>
          <p className="text-sm sm:text-base text-gray-500">
            ✓ Implementación incluida · ✓ Soporte dedicado · ✓ Sin permanencia
          </p>
        </div>
      </div>
    </section>
  );
}
