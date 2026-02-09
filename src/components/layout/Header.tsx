"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationLink from "@/components/layout/NavigationLink";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
    // Si es un ancla (empieza con #), hacer scroll suave
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Si es una ruta normal, dejar que Next.js Link maneje la navegación
  };

  const navigationLinks = [
    // { href: "/landing/products", label: "Productos" },
    { href: "/landing", label: "Inicio" },
    // { href: "/landing/about-us", label: "Nosotros" },
    { href: "/landing/pricing", label: "Precios" },
    { href: "/landing/why-parcy", label: "¿Por qué Parcy?" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/parcy_principal.png"
              alt="Parcy Digital - Plataforma de Gestión para Parcelaciones"
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navegación Desktop */}
          <nav 
            className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center max-w-2xl mx-8"
            role="navigation"
            aria-label="Navegación principal"
          >
            {navigationLinks.map((link) => (
              <NavigationLink 
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </NavigationLink>
            ))}
          </nav>

          {/* Botón Iniciar Sesión Desktop */}
          <div className="hidden lg:flex items-center shrink-0">
            <CTAButton size="md">
              Iniciar sesión
            </CTAButton>
          </div>

          {/* Botón Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors active:bg-gray-200 relative z-50"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X size={24} className="text-gray-700" aria-hidden="true" />
            ) : (
              <Menu size={24} className="text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay de fondo cuando el menú está abierto */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 mt-16 md:mt-20"
          />
        )}
      </AnimatePresence>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-16 md:top-20 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200"
          >
            <div className="relative overflow-hidden">
              {/* Gradiente decorativo sutil */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
              
              <nav 
                className="px-6 py-8 space-y-2"
                role="navigation"
                aria-label="Menú móvil"
              >
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="block px-4 py-3.5 rounded-xl text-base font-medium text-gray-800 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200 border border-transparent hover:border-cyan-100"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationLinks.length * 0.1, duration: 0.3 }}
                  className="pt-6 pb-2"
                >
                  <CTAButton 
                    size="md"
                    className="w-full justify-center"
                  >
                    Iniciar sesión
                  </CTAButton>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
