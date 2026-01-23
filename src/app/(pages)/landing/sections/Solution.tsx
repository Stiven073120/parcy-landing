import { Map, TrendingUp, Shield } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Solution() {
  const solutions = [
    {
      icon: Map,
      title: "Visualización del proyecto",
      subtitle: "Gestión visual de lotes para tu equipo",
      description: "Visualiza cada lote de forma clara e interactiva. Tu equipo interno puede gestionar la disponibilidad sin depender de planos estáticos o procesos manuales.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Disponibilidad en tiempo real",
      subtitle: "Sincronización para equipos internos",
      description: "Estados por colores actualizados al instante. Evita confusiones, duplicados y errores entre tu equipo técnico y comercial.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Control y trazabilidad interna",
      subtitle: "Gestión segura para tu equipo",
      description: "Cada cambio queda registrado. Roles y permisos configurables para tu equipo interno. Información confiable que protege la gestión de disponibilidad.",
      color: "from-blue-600 to-cyan-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Gestión de disponibilidad{" "}
            <span className="text-blue-600">para tu equipo interno</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Parcy centraliza la gestión de disponibilidad de lotes, sincroniza equipos técnicos y comerciales internos, 
            y garantiza información confiable en tiempo real para evitar errores y conflictos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200">
                <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="https://app.parcydigital.com" variant="primary" size="lg">
            Ver cómo funciona
          </Button>
        </div>
      </div>
    </section>
  );
}
