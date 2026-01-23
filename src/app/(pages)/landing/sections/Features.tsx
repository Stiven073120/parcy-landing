import { Eye, Clock, Users, ShieldCheck, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Visualización interactiva de lotes",
      description: "Tu equipo interno visualiza cada lote de forma clara e interactiva. Facilita la gestión de disponibilidad sin depender de planos estáticos en PDF.",
    },
    {
      icon: Clock,
      title: "Disponibilidad sincronizada en tiempo real",
      description: "Estados por colores actualizados al instante para todo tu equipo. Evita confusiones, duplicados y errores entre equipos técnicos y comerciales.",
    },
    {
      icon: Users,
      title: "Gestión de equipos internos",
      description: "Crea usuarios con roles y permisos configurables según las responsabilidades de tu equipo. Control total de acceso y edición de información.",
    },
    {
      icon: ShieldCheck,
      title: "Control y trazabilidad completa",
      description: "Cada cambio en la disponibilidad queda registrado. Transparencia total para tu equipo interno. Auditoría completa de modificaciones.",
    },
    {
      icon: BarChart3,
      title: "Informes para gestión interna",
      description: "Accede a datos e indicadores en tiempo real sobre disponibilidad de lotes. Dashboards diseñados para la toma de decisiones operativas de tu equipo.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Herramientas para tu equipo interno{" "}
            <span className="text-blue-600">de gestión de disponibilidad</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Software diseñado específicamente para la gestión de disponibilidad de lotes en proyectos de parcelación. 
            Orientado a equipos internos, no a CRM de relación con clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Card destacado para CTA */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-8 h-full flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para mejorar la gestión de tu equipo?
              </h3>
              <p className="mb-6 text-blue-50">
                Descubre cómo Parcy puede transformar la gestión de disponibilidad de tu equipo interno.
              </p>
              <Button href="https://app.parcydigital.com" variant="secondary" size="md">
                Solicita una demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
