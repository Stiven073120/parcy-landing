// Iconos SVG personalizados con gradientes
const CheckCircleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10">
    <defs>
      <linearGradient id="checkGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#checkGradPricing)" />
    <path d="M16 24l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const UpdateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10">
    <defs>
      <linearGradient id="updateGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#updateGradPricing)" />
    <path d="M32 18l-8-6v4c-6 0-10 4-10 10 0 2 1 4 2 5-1-4 2-7 8-7v4l8-6z" fill="white" opacity="0.9"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10">
    <defs>
      <linearGradient id="shieldGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 10v12c0 10 8 18 16 20 8-2 16-10 16-20V10L24 4z" fill="url(#shieldGradPricing)" />
    <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10">
    <defs>
      <linearGradient id="supportGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#supportGradPricing)" />
    <circle cx="24" cy="20" r="3" fill="white" />
    <path d="M24 26v10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default function AllPlansInclude() {
  const features = [
    {
      icon: CheckCircleIcon,
      title: "Sin permanencia",
      description: "Cancela cuando quieras",
      color: "cyan"
    },
    {
      icon: UpdateIcon,
      title: "Actualizaciones",
      description: "Mejoras continuas incluidas",
      color: "purple"
    },
    {
      icon: ShieldIcon,
      title: "Datos seguros",
      description: "Encriptación total",
      color: "pink"
    },
    {
      icon: SupportIcon,
      title: "Soporte local",
      description: "Equipo en español",
      color: "green"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[linear-gradient(to_bottom,#f9fafb,#ffffff)] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Todos los planes incluyen
          </h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const borderColors = {
                cyan: 'hover:border-cyan-300',
                purple: 'hover:border-purple-300',
                pink: 'hover:border-pink-300',
                green: 'hover:border-green-300'
              };
              
              return (
                <div
                  key={index}
                  className={`text-center p-6 sm:p-8 bg-white rounded-2xl border-2 border-gray-200 ${borderColors[feature.color as keyof typeof borderColors]} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="relative inline-flex mb-5">
                    <div className={`absolute inset-0 bg-[linear-gradient(to_bottom_right,#06b6d4,#3b82f6)] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:border-${feature.color}-300 transition-all">
                      <IconComponent />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
