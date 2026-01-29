import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function PricingCTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[linear-gradient(to_bottom_right,#111827,#1f2937)] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿No estás seguro qué plan elegir?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Agenda una demo personalizada y te ayudamos a encontrar el plan ideal para tu proyecto.
              </p>
              
              <CTAButton
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-gray-900 shadow-xl group"
              >
                <span className="flex items-center justify-center gap-2">
                  Agendar demo gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
