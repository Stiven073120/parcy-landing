"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PromoBanner from "@/components/layout/PromoBanner";
import Button from "@/components/ui/Button";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#producto", label: "Producto" },
  { href: "/pricing", label: "Precios" },
  { href: "/why-parcy", label: "¿Por qué Parcy?" },
  { href: "/#contacto", label: "Contacto" },
];

const APP_URL = "https://app.parcydigital.com";

/**
 * Header flotante tipo "isla": una pastilla con desenfoque separada del borde,
 * con el logo, los enlaces agrupados en el centro y las acciones a la derecha.
 * Al hacer scroll gana algo de sombra para despegarse del contenido.
 *
 * Sobre las bandas de azul profundo (secciones con `data-header-dark`) la isla
 * pasa a su versión oscura: mismo vidrio, texto blanco. Se detecta midiendo si
 * el centro de la pastilla cae dentro de alguna de esas secciones.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const close = () => setIsOpen(false);

  // Sombra al despegarse del borde superior (sin escuchar el scroll: observa un centinela)
  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;left:0;height:1px;width:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  // Versión oscura mientras la pastilla está sobre una banda de azul profundo
  useEffect(() => {
    const bands = Array.from(document.querySelectorAll<HTMLElement>("[data-header-dark]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const pill = pillRef.current;
      if (!pill) return;
      const r = pill.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      setOnDark(
        bands.some((b) => {
          const br = b.getBoundingClientRect();
          return br.top <= mid && br.bottom >= mid;
        })
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    // Primera medición en el siguiente frame (la ruta ya está pintada)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    const route = href.split("#")[0] || "/";
    return !href.includes("#") && pathname === route;
  };

  const dark = onDark && !isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50" role="banner">
      <PromoBanner />

      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 lg:px-8">
        <div
          ref={pillRef}
          className={`relative flex h-14 items-center justify-between rounded-full border pl-3 pr-2 backdrop-blur-2xl backdrop-saturate-150 transition-[box-shadow,background-color,border-color] duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b sm:pl-4 ${
            dark
              ? "border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_48px_-16px_rgba(0,0,0,0.5)] before:from-white/10 before:to-white/0"
              : scrolled || isOpen
                ? "border-white/60 bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_0_rgba(11,26,46,0.04),0_16px_48px_-16px_rgba(11,26,46,0.3)] before:from-white/45 before:to-white/5"
                : "border-white/60 bg-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_0_rgba(11,26,46,0.04),0_8px_32px_-16px_rgba(11,26,46,0.2)] before:from-white/45 before:to-white/5"
          }`}
        >
          {/* Marca */}
          <Link href="/" className="relative flex shrink-0 items-center gap-2.5" onClick={close} aria-label="Parcy Digital, inicio">
            <Image src="/logo-p.png" alt="" width={64} height={64} className="h-8 w-8 object-contain" priority />
            <span
              className={`font-display text-[14px] font-extrabold uppercase tracking-[0.08em] transition-colors duration-300 ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              Parcy Digital
            </span>
          </Link>

          {/* Enlaces agrupados en el centro */}
          <nav
            className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full border p-1 transition-colors duration-300 lg:flex ${
              dark
                ? "border-white/10 bg-white/[0.06]"
                : "border-white/60 bg-ink/[0.05] shadow-[inset_0_1px_2px_rgba(11,26,46,0.06)]"
            }`}
            aria-label="Navegación principal"
          >
            {navigationLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    active
                      ? "bg-white text-ink shadow-[0_1px_3px_rgba(11,26,46,0.12)]"
                      : dark
                        ? "text-white/75 hover:bg-white/10 hover:text-white"
                        : "text-ink-soft hover:bg-white/60 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative hidden items-center gap-2 lg:flex">
            <Link
              href={APP_URL}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                dark ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              Iniciar sesión
            </Link>
            <Button href="/#contacto" size="md">
              Solicitar demo
            </Button>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className={`relative rounded-full p-2 transition-colors lg:hidden ${
              dark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-soft hover:bg-white/60 hover:text-ink"
            }`}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="menu-movil"
              initial={{ opacity: 0, y: reduce ? 0 : -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 rounded-2xl border border-white/70 bg-white/90 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_60px_-24px_rgba(11,26,46,0.35)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            >
              <nav aria-label="Menú móvil">
                <ul>
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive(link.href) ? "bg-surface text-ink" : "text-ink-soft hover:bg-surface hover:text-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 grid gap-2 border-t border-line-soft p-2 pt-4">
                  <Button href="/#contacto" size="lg" className="w-full">
                    Solicitar demo
                  </Button>
                  <Button href={APP_URL} variant="secondary" size="lg" className="w-full">
                    Iniciar sesión
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 -z-10 cursor-default bg-ink/30 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
