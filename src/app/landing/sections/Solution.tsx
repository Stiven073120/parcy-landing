import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Solution() {
  const benefits = [
    {
      number: "01",
      title: "Visualización clara",
      description: "Cada lote visible e interactivo para decisiones rápidas",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      number: "02",
      title: "Tiempo real",
      description: "Estados actualizados al instante, cero confusiones",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: "03",
      title: "Equipos sincronizados",
      description: "Técnicos y comerciales con la misma información",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Control de disponibilidad{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              en tiempo real
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Parcy centraliza la gestión de disponibilidad, sincroniza tu equipo y garantiza información confiable para evitar errores.
          </p>
        </div>

        {/* Main Content - Image + Benefits */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image placeholder - DESCRIPCIÓN PARA GENERAR IMAGEN */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
                {/* 
                  IMAGEN NECESARIA:
                  - Mockup de interfaz de software mostrando un plano/mapa de parcelación
                  - Vista de lotes con diferentes colores (verde=disponible, amarillo=reservado, rojo=vendido)
                  - Interfaz limpia estilo dashboard
                  - Colores: cyan y azul predominantes
                  - Aspecto profesional SaaS
                  - Dimensiones sugeridas: 1200x800px
                */}
                <div className="aspect-[3/2] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                      Vista de plano con disponibilidad en tiempo real
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits side */}
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 items-start group"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  {benefit.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Button 
                href="https://app.parcydigital.com" 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-100">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Información sincronizada
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              0
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Ventas duplicadas
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Real-time
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Actualización instantánea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
