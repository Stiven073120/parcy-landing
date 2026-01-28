import { Eye, Clock, Users, ShieldCheck, BarChart3, Layers } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Visualización interactiva",
      description: "Cada lote visible de forma clara e interactiva. Gestiona disponibilidad sin depender de planos PDF estáticos.",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-200 hover:border-cyan-400"
    },
    {
      icon: Clock,
      title: "Tiempo real",
      description: "Estados actualizados al instante para todo el equipo. Evita confusiones, duplicados y errores entre departamentos.",
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-200 hover:border-blue-400"
    },
    {
      icon: Users,
      title: "Gestión de equipos",
      description: "Usuarios con roles y permisos configurables. Control total de acceso según responsabilidades de cada miembro.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-200 hover:border-purple-400"
    },
    {
      icon: ShieldCheck,
      title: "Control y trazabilidad",
      description: "Cada cambio queda registrado con auditoría completa. Transparencia total para el equipo interno.",
      color: "from-pink-500 to-red-500",
      borderColor: "border-pink-200 hover:border-pink-400"
    },
    {
      icon: BarChart3,
      title: "Informes en tiempo real",
      description: "Datos e indicadores actualizados sobre disponibilidad. Dashboards para toma de decisiones operativas.",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200 hover:border-orange-400"
    },
    {
      icon: Layers,
      title: "Estados personalizados",
      description: "Define estados específicos para tu proceso. Adaptado a la forma de trabajo de tu equipo y proyecto.",
      color: "from-green-500 to-cyan-500",
      borderColor: "border-green-200 hover:border-green-400"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              gestionar disponibilidad
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Funciones diseñadas específicamente para la gestión de lotes en proyectos de parcelación.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
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

              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border-2 border-gray-600 overflow-hidden shadow-2xl">
                {/* 
                  IMAGEN NECESARIA:
                  - Screenshot de dashboard con vista general
                  - Múltiples secciones: plano principal, lista de lotes, estadísticas
                  - Diseño moderno tipo SaaS
                  - Colores oscuros con acentos cyan/azul
                  - Mostrar elementos de UI: botones, filtros, gráficos
                  - Aspecto profesional y limpio
                  - Dimensiones sugeridas: 1400x900px
                */}
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Layers className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      Dashboard principal de gestión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
