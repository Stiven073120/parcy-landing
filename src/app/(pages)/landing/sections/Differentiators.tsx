import { Target, Sparkles, Focus, Link2, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Differentiators() {
  const differentiators = [
    {
      icon: Target,
      title: "Diseñado para gestión de disponibilidad",
      description: "No es un CRM adaptado. Cada función está pensada específicamente para la gestión interna de disponibilidad de lotes en proyectos de parcelación.",
    },
    {
      icon: Sparkles,
      title: "Visual e intuitivo para tu equipo",
      description: "Interfaz clara diseñada para equipos internos. Cualquier miembro de tu equipo técnico o comercial puede usarlo desde el primer día.",
    },
    {
      icon: Focus,
      title: "Enfocado en disponibilidad, no en clientes",
      description: "No gestiona relaciones con clientes. El centro del sistema es la disponibilidad de lotes y la sincronización entre equipos internos.",
    },
    {
      icon: Link2,
      title: "Sincronización entre equipos internos",
      description: "Conecta equipos técnicos y comerciales en un solo flujo. Información sincronizada sin fricciones ni herramientas desconectadas.",
    },
    {
      icon: ShieldCheck,
      title: "Protege la gestión interna",
      description: "Reduce conflictos internos entre equipos y protege a tu equipo de errores evitables en la gestión de disponibilidad.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            No es un CRM.{" "}
            <span className="text-blue-600">Es gestión de disponibilidad</span>{" "}
            para equipos internos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Parcy no es un CRM de relación con clientes. Es software especializado en la gestión de disponibilidad de lotes 
            diseñado para equipos internos de proyectos de parcelación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* Card destacado */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Parcy no gestiona clientes.{" "}
                <span className="text-blue-600">Gestiona la disponibilidad de lotes para tu equipo interno.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button href="https://app.parcydigital.com" variant="primary" size="lg">
            Solicita una demo
          </Button>
        </div>
      </div>
    </section>
  );
}
