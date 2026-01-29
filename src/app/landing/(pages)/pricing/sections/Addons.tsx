// Iconos SVG personalizados con gradientes
const ProyectoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9">
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
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9">
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
      price: "$199.999",
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
          <div className="grid sm:grid-cols-2 gap-6">
            {addons.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <div className="relative inline-flex mb-4">
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#06b6d4,#3b82f6)] rounded-xl opacity-20 blur-xl"></div>
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:border-blue-300 transition-all duration-300">
                        <IconComponent />
                      </div>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {addon.title}
                    </h4>
                    
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                        {addon.price}
                      </span>
                      {addon.price !== "Consultar" && (
                        <span className="text-base text-gray-500">/proyecto</span>
                      )}
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
