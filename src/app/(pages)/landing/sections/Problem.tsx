import { AlertCircle, FileSpreadsheet, Users2, RefreshCw } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Ventas duplicadas y conflictos",
      description: "Información desactualizada que genera conflictos internos y pérdida de ventas entre equipos comerciales y técnicos.",
    },
    {
      icon: FileSpreadsheet,
      title: "Procesos manuales ineficientes",
      description: "Excel, Photoshop y planos editados manualmente a diario que consumen tiempo valioso del equipo interno.",
    },
    {
      icon: Users2,
      title: "Desconexión entre equipos",
      description: "Falta de sincronización entre equipos técnicos y comerciales. Cada uno trabaja con información diferente.",
    },
    {
      icon: RefreshCw,
      title: "Herramientas genéricas inadecuadas",
      description: "Software genérico que no entiende la gestión de disponibilidad de lotes. No diseñado para proyectos de parcelación.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Tu equipo interno trabaja con{" "}
            <span className="text-blue-600">información desactualizada?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            El problema no es vender. Es gestionar la disponibilidad de lotes sin información confiable y sincronizada para tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-900">
            Pérdida de tiempo del equipo, conflictos internos y ventas frustradas por falta de sincronización.
          </p>
        </div>
      </div>
    </section>
  );
}
