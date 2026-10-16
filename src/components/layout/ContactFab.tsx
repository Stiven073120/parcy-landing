"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Mail, MessageCircle, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// TODO: reemplazar por el número real de la oficina de ventas (formato internacional sin "+")
const WHATSAPP_URL = "https://wa.me/573000000000?text=Hola%2C%20quiero%20conocer%20Parcy%20Digital";
const EMAIL = "contacto@parcydigital.com";

/**
 * Lanzador de contacto (abajo a la derecha): un círculo de vidrio con el
 * isotipo de Parcy y un punto "Disponible", como el estado de un lote. Al
 * pasar el mouse muestra una etiqueta; al pulsar abre la ficha con WhatsApp,
 * correo y demo.
 */
export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const rows = [
    { href: WHATSAPP_URL, icon: MessageCircle, title: "WhatsApp", detail: "Escríbenos ahora", external: true },
    { href: `mailto:${EMAIL}`, icon: Mail, title: "Correo", detail: EMAIL, external: true },
    { href: "/#contacto", icon: CalendarCheck, title: "Agendar demo", detail: "Con tu proyecto en mente", external: false },
  ];

  return (
    <div ref={ref} className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="contact-fab-card"
            role="dialog"
            aria-label="Opciones de contacto"
            initial={{ opacity: 0, y: reduce ? 0 : 10, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 8, scale: reduce ? 1 : 0.97, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ transformOrigin: "bottom right" }}
            className="relative w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/65 via-white/45 to-brand-100/45 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(11,110,245,0.08),0_30px_70px_-24px_rgba(11,110,245,0.45)] backdrop-blur-2xl backdrop-saturate-[1.8] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-24 before:rounded-t-[inherit] before:bg-gradient-to-b before:from-white/70 before:to-white/0"
          >
            <div className="relative flex items-center justify-between border-b border-white/70 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50">
                  <Image src="/logo-p.png" alt="" width={64} height={64} className="h-5 w-5 object-contain" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Equipo Parcy</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-disponible" />
                    Respondemos en menos de 24 h hábiles
                  </p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar" className="-mr-1 rounded-md p-1 text-ink-faint transition-colors hover:bg-white/60 hover:text-ink">
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="relative divide-y divide-white/70">
              {rows.map((r) => (
                <li key={r.title}>
                  <a
                    href={r.href}
                    target={r.external ? "_blank" : undefined}
                    rel={r.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/60"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-brand-50/80 text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <r.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">{r.title}</span>
                      <span className="block truncate text-xs text-ink-soft">{r.detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group flex items-center gap-2">
        {/* Etiqueta que aparece al pasar el mouse (escritorio) */}
        <span
          aria-hidden="true"
          className={`pointer-events-none hidden translate-x-2 rounded-full border border-white/80 bg-gradient-to-r from-white/60 to-brand-100/50 px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_30px_-14px_rgba(11,110,245,0.5)] backdrop-blur-2xl backdrop-saturate-150 transition-[opacity,transform] duration-200 ease-out sm:block ${
            open ? "" : "group-hover:translate-x-0 group-hover:opacity-100"
          }`}
        >
          ¿Hablamos? · Disponible
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="contact-fab-card"
          aria-label={open ? "Cerrar contacto" : "Contactar al equipo de Parcy"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-white/50 via-white/20 to-brand-100/40 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-6px_14px_-6px_rgba(11,110,245,0.25),0_0_0_1px_rgba(11,110,245,0.08),0_14px_36px_-12px_rgba(11,110,245,0.5)] backdrop-blur-xl backdrop-saturate-[1.8] before:pointer-events-none before:absolute before:inset-x-2 before:top-1 before:h-1/2 before:rounded-full before:bg-gradient-to-b before:from-white/80 before:to-white/0 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-6px_14px_-6px_rgba(11,110,245,0.3),0_0_0_1px_rgba(11,110,245,0.14),0_18px_44px_-12px_rgba(11,110,245,0.6)] active:scale-[0.97]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.15 }} className="relative text-ink">
                <X className="h-5 w-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span key="logo" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.15 }} className="relative">
                <Image src="/logo-p.png" alt="" width={64} height={64} className="h-7 w-7 object-contain" />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-disponible/60" style={{ animation: reduce ? undefined : "pulse-ring 2.4s ease-out infinite" }} />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-disponible" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
