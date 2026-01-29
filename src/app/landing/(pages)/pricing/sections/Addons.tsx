// Iconos SVG personalizados con gradientes
const ProyectoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="proyectoGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="url(#proyectoGradPricing)" />
    <path d="M24 8L12 14v16l12 6 12-6V14L24 8z" fill="white" opacity="0.3" />
    <circle cx="24" cy="22" r="4" fill="white" opacity="0.9" />
  </svg>
);

const UsuariosIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <defs>
      <linearGradient id="usuariosGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="8" fill="url(#usuariosGradPricing)" />
    <circle cx="30" cy="18" r="8" fill="url(#usuariosGradPricing)" opacity="0.8" />
    <circle cx="24" cy="30" r="8" fill="url(#usuariosGradPricing)" opacity="0.6" />
    <circle cx="18" cy="18" r="5" fill="white" opacity="0.8" />
    <circle cx="30" cy="18" r="5" fill="white" opacity="0.8" />
    <circle cx="24" cy="30" r="5" fill="white" opacity="0.8" />
  </svg>
);

export default function Addons() {
  const addons = [
    {
      icon: ProyectoIcon,
      title: "Proyectos adicionales",
      price: "$200.000",
      description: "Agrega proyectos extra a tu plan",
    },
    {
      icon: UsuariosIcon,
      title: "Usuarios adicionales",
      price: "Consultar",
      description: "Amplía tu equipo según necesites",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[linear-gradient(to_bottom,#f9fafb,#ffffff)] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Complementos adicionales
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {addons.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#06b6d4,#3b82f6)] rounded-2xl opacity-20 blur-xl"></div>
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-blue-300 transition-all duration-300">
                        <IconComponent />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {addon.title}
                    </h4>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                        {addon.price}
                      </span>
                      {addon.price !== "Consultar" && (
                        <span className="text-lg text-gray-500">/proyecto</span>
                      )}
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {addon.description}
                    </p>
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
