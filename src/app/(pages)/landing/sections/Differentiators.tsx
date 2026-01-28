import { Target, Sparkles, Focus, Link2, ShieldCheck, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Differentiators() {
  const differentiators = [
    {
      icon: Target,
      title: "Diseñado para parcelación",
      description: "No es un CRM adaptado. Cada función está pensada específicamente para gestión de disponibilidad de lotes.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Visual e intuitivo",
      description: "Interfaz clara para equipos internos. Cualquier miembro puede usarlo desde el primer día sin capacitación extensa.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Focus,
      title: "Enfoque en disponibilidad",
      description: "No gestiona clientes ni leads. El centro del sistema es la disponibilidad de lotes y sincronización de equipos.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Link2,
      title: "Sincronización total",
      description: "Conecta técnicos y comerciales en un solo flujo. Información sincronizada sin herramientas desconectadas.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: ShieldCheck,
      title: "Protege tu gestión",
      description: "Reduce conflictos internos y protege a tu equipo de errores evitables en la gestión de disponibilidad.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Implementación rápida",
      description: "Comienza en minutos, no en semanas. Sin configuraciones complejas ni consultorías largas.",
      gradient: "from-green-500 to-cyan-500"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            No es un CRM.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Es gestión especializada
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Parcy no es software genérico adaptado. Es una plataforma diseñada desde cero para la gestión de disponibilidad en proyectos de parcelación.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* CRM Genérico */}
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                    <span className="text-sm font-semibold text-red-300">CRM Genérico</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-sm sm:text-base">Adaptado de software de ventas</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-sm sm:text-base">Enfocado en clientes, no lotes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-sm sm:text-base">Configuración compleja</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-sm sm:text-base">Curva de aprendizaje larga</span>
                    </li>
                  </ul>
                </div>

                {/* Parcy */}
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
                    <span className="text-sm font-semibold text-cyan-300">Parcy Digital</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-white">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-sm sm:text-base">Diseñado para parcelación</span>
                    </li>
                    <li className="flex items-start gap-2 text-white">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-sm sm:text-base">Enfocado en disponibilidad</span>
                    </li>
                    <li className="flex items-start gap-2 text-white">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-sm sm:text-base">Listo para usar en minutos</span>
                    </li>
                    <li className="flex items-start gap-2 text-white">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-sm sm:text-base">Intuitivo desde el día uno</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border-2 border-blue-200 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parcy no gestiona clientes.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gestiona disponibilidad de lotes
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Una plataforma especializada para equipos internos de proyectos de parcelación
            </p>
            <Button 
              href="https://app.parcydigital.com" 
              variant="primary" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Ver la diferencia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
