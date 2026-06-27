"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationLink from "@/components/layout/NavigationLink";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/pricing", label: "Precios" },
  { href: "/why-parcy", label: "¿Por qué Parcy?" },
];

const APP_URL = "https://app.parcydigital.com";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/80 backdrop-blur-xl"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" onClick={close}>
            <Image
              src="/logos/parcy_principal.png"
              alt="Parcy Digital - Gestión para parcelaciones"
              width={140}
              height={48}
              className="h-9 w-auto object-contain md:h-10"
              priority
            />
          </Link>

          {/* Navegación desktop */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            role="navigation"
            aria-label="Navegación principal"
          >
            {navigationLinks.map((link) => (
              <NavigationLink key={link.href} href={link.href} onClick={close}>
                {link.label}
              </NavigationLink>
            ))}
          </nav>

          {/* Acciones desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            <a
              href={APP_URL}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
            >
              Iniciar sesión
            </a>
            <CTAButton size="md" href="/#contacto">Solicita una demo</CTAButton>
          </div>

          {/* Botón menú mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 rounded-lg p-2 text-ink-soft transition-colors hover:bg-surface active:bg-surface lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-40 mt-16 bg-ink/20 backdrop-blur-sm md:mt-20 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Menú mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-50 border-b border-line bg-white/98 shadow-[0_24px_60px_-24px_rgba(12,30,48,0.25)] backdrop-blur-xl md:top-20 lg:hidden"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-accent-500 to-accent-400" />
              <nav className="space-y-1 px-6 py-6" aria-label="Menú móvil">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="space-y-2 pt-4">
                  <a
                    href={APP_URL}
                    onClick={close}
                    className="block rounded-xl border border-line px-4 py-3 text-center text-base font-medium text-ink-soft transition-colors hover:text-brand-600"
                  >
                    Iniciar sesión
                  </a>
                  <CTAButton size="md" href="/#contacto" className="w-full justify-center">
                    Solicita una demo
                  </CTAButton>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
