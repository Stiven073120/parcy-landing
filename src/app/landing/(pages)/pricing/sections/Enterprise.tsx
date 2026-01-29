import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

// Icono SVG personalizado
const EmpresaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10">
    <defs>
      <linearGradient id="empresaGradPricing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="14" height="28" fill="url(#empresaGradPricing)" rx="2" />
    <rect x="26" y="18" width="14" height="22" fill="url(#empresaGradPricing)" opacity="0.8" rx="2" />
    <rect x="12" y="16" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="16" y="16" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="12" y="20" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="16" y="20" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="30" y="22" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="34" y="22" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="30" y="26" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
    <rect x="34" y="26" width="2" height="2" fill="white" opacity="0.8" rx="0.5" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Enterprise() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[linear-gradient(to_bottom_right,#111827,#1f2937)] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                    <EmpresaIcon />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    Enterprise
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Solución personalizada para grandes desarrolladores y múltiples proyectos simultáneos.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Proyectos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Usuarios ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Integraciones a medida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Implementación personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="text-base text-gray-200">Gerente de cuenta dedicado</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                    Custom
                  </div>
                  <p className="text-lg text-cyan-300">Precio personalizado</p>
                </div>
                
                <Button
                  href="https://app.parcydigital.com"
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MailIcon />
                    Contactar ventas
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
