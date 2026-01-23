import { Upload, Settings, Zap, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Carga tu proyecto",
      description: "Importa tu plano y configura los lotes en minutos. Tu equipo técnico puede hacerlo sin complicaciones.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configura tu equipo interno",
      description: "Crea usuarios para tu equipo técnico y comercial. Asigna roles y permisos según las responsabilidades de cada miembro.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Gestiona disponibilidad en tiempo real",
      description: "Tu equipo actualiza la disponibilidad de lotes al instante. Reservas y ventas sincronizadas para todos los miembros del equipo.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Toma decisiones con datos internos",
      description: "Accede a informes y analítica en tiempo real sobre disponibilidad. Optimiza la gestión operativa de tu equipo.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Configuración rápida{" "}
            <span className="text-blue-600">para tu equipo interno</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            En pocos pasos, tu equipo interno estará gestionando la disponibilidad de lotes con información sincronizada y confiable.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Línea conectora (solo desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-linear-to-r from-blue-300 to-transparent z-0" />
                )}
                
                <div className="flex gap-6 items-start">
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://app.parcydigital.com" variant="primary" size="lg">
              Solicita una demo
            </Button>
            <Button href="https://app.parcydigital.com" variant="outline" size="lg">
              Hablar con un asesor
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Implementación y soporte incluidos en todos los planes
          </p>
        </div>
      </div>
    </section>
  );
}
