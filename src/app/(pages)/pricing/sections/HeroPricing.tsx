export default function HeroPricing() {
  return (
    <section className="relative pt-32 pb-16 sm:pb-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f9fafb)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[linear-gradient(to_bottom_right,#cffafe,#dbeafe)] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Planes que se{" "}
            <span className="relative inline-block">
              <span className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] bg-clip-text text-transparent">
                adaptan
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#pricingGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="pricingGradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}a tu negocio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Sin permanencia. Cancela cuando quieras. Implementación y soporte incluidos.
          </p>
        </div>
      </div>
    </section>
  );
}
