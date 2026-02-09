export default function AllPlansInclude() {
  const comparisonFeatures = [
    {
      category: "Usuarios",
      basic: "Hasta 5 usuarios",
      professional: "Hasta 12 usuarios",
      enterprise: "Hasta 25 usuarios",
    },
    {
      category: "Proyectos incluidos",
      basic: "1 proyecto",
      professional: "3 proyectos",
      enterprise: "5 proyectos",
    },
    {
      category: "Visualización interactiva",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Gestión en tiempo real",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Roles y permisos",
      basic: "Básicos",
      professional: "Avanzados",
      enterprise: "Avanzados",
    },
    {
      category: "Analítica avanzada",
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      category: "Informes personalizados",
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      category: "Trazabilidad completa",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Integraciones personalizadas",
      basic: false,
      professional: false,
      enterprise: true,
    },
    {
      category: "API de acceso",
      basic: false,
      professional: false,
      enterprise: true,
    },
    {
      category: "Soporte",
      basic: "Por email",
      professional: "Prioritario",
      enterprise: "Dedicado 24/7",
    },
    {
      category: "Capacitación",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Consultoría especializada",
      basic: false,
      professional: false,
      enterprise: true,
    },
    {
      category: "Actualizaciones",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Seguridad y encriptación",
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      category: "Sin permanencia",
      basic: true,
      professional: true,
      enterprise: true,
    },
  ];

  const CheckIcon = ({ value }: { value: boolean | string }) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className="text-green-600">✓</span>
      ) : (
        <span className="text-gray-300">✗</span>
      );
    }
    return (
      <span className="text-sm font-medium text-gray-700">{value}</span>
    );
  };

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
            Comparación de planes
          </h3>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Compara las características incluidas en cada plan para encontrar el que mejor se adapte a tus necesidades
          </p>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="text-left py-5 px-6 font-bold text-sm uppercase tracking-wide text-gray-700">
                      Característica
                    </th>
                    <th className="text-center py-5 px-6 font-bold text-sm uppercase tracking-wide text-gray-700">
                      Básico
                    </th>
                    <th className="text-center py-5 px-6 font-bold text-sm uppercase tracking-wide text-gray-900 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 border-l border-r border-cyan-200 relative">
                      <div className="flex items-center justify-center gap-2">
                        Profesional
                        <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full">
                          Popular
                        </span>
                      </div>
                    </th>
                    <th className="text-center py-5 px-6 font-bold text-sm uppercase tracking-wide text-gray-700">
                      Empresa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 transition-all duration-150 ${
                        index % 2 === 0 ? "bg-white hover:bg-gray-50/50" : "bg-gray-50/30 hover:bg-gray-100/50"
                      }`}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900 text-sm">{feature.category}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center items-center min-h-[28px]">
                          <CheckIcon value={feature.basic} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center bg-gradient-to-br from-cyan-50/40 via-blue-50/40 to-cyan-50/40 border-l border-r border-cyan-100">
                        <div className="flex justify-center items-center min-h-[28px]">
                          <CheckIcon value={feature.professional} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center items-center min-h-[28px]">
                          <CheckIcon value={feature.enterprise} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-6">
            {["Básico", "Profesional", "Empresa"].map((planName, planIndex) => {
              const isPopular = planName === "Profesional";
              return (
                <div
                  key={planIndex}
                  className={`rounded-2xl border overflow-hidden shadow-lg ${
                    isPopular
                      ? "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`px-6 py-4 font-bold text-lg flex items-center justify-between ${
                      isPopular
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <span>{planName}</span>
                    {isPopular && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="divide-y divide-gray-100">
                    {comparisonFeatures.map((feature, featureIndex) => {
                      const value =
                        planName === "Básico"
                          ? feature.basic
                          : planName === "Profesional"
                          ? feature.professional
                          : feature.enterprise;
                      return (
                        <div
                          key={featureIndex}
                          className={`px-6 py-4 flex items-center justify-between transition-colors ${
                            featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <span className="text-sm font-medium text-gray-700 flex-1">{feature.category}</span>
                          <div className="ml-4">
                            <CheckIcon value={value} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
