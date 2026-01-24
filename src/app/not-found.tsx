import Link from "next/link";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Contenido */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Página no encontrada
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <p className="text-base md:text-lg text-gray-500">
                Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button href="/landing" variant="primary" size="lg">
                Volver al inicio
              </Button>
              <Button href="https://app.parcydigital.com" variant="secondary" size="lg">
                Ir a la aplicación
              </Button>
            </div>

            {/* Enlaces útiles */}
            <div className="pt-8 md:pt-12 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Enlaces útiles:</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  href="/landing" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Inicio
                </Link>
                <Link 
                  href="/products" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Productos
                </Link>
                <Link 
                  href="/about-us" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Nosotros
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Precios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
