"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationLink from "@/components/layout/NavigationLink";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
    { href: "/products", label: "Productos" },
    { href: "/services", label: "Servicios" },
    { href: "/about-us", label: "Nosotros" },
    { href: "/why-parcy", label: "¿Por qué Parcy?" }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-1001 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Parcy
          </Link>

          {/* Navegación Desktop */}
          <nav 
            className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center"
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

          {/* Botón Iniciar Sesión */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button href="https://app.parcydigital.com" variant="primary" size="md">
              Iniciar sesión
            </Button>
          </div>

          {/* Botón Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 z-1002 min-w-[48px] min-h-[48px] rounded-full hover:bg-gray-100 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X size={28} className="text-blue-600" aria-hidden="true" />
            ) : (
              <Menu size={28} className="text-gray-800" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-md z-1000 lg:hidden flex flex-col items-center justify-center min-h-screen shadow-md border-b border-gray-100"
          >
            <nav 
              className="flex flex-col items-center justify-center h-full gap-8"
              role="navigation"
              aria-label="Menú móvil"
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
              <Button href="https://app.parcydigital.com" variant="primary" size="md">
                Iniciar sesión
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
