import Button from "@/components/ui/Button";
import { Map, Clock, Users, ShieldCheck, BarChart3, Layers } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const categories = [
    { icon: Map, label: "Proyecto" },
    { icon: Clock, label: "Tiempo real" },
    { icon: Users, label: "Equipos" },
    { icon: ShieldCheck, label: "Control" },
    { icon: BarChart3, label: "Analítica" },
    { icon: Layers, label: "Visualización" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Título Principal */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sistema de control de{" "}
            <span className="relative inline-block">
              <span className="relative z-10">disponibilidad</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            y ventas para proyectos de parcelación
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Controla la disponibilidad de lotes en tiempo real, conecta a tu equipo comercial y técnico, y elimina ventas duplicadas desde un solo lugar.
          </p>
          
      
          
          {/* Botón CTA */}
          <div className="flex justify-center">
            <Button href="https://app.parcydigital.com" variant="primary" size="lg">
              Solicita una demo
            </Button>
          </div>
        </div>

        {/* Categorías/Iconos */}
        <div className="max-w-6xl mx-auto mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-3 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <category.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen Hero */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/hero/AT-prueba.webp"
              alt="Parcy - Plataforma de gestión inmobiliaria"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
