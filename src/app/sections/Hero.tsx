"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import BrowserFrame from "@/components/ui/BrowserFrame";

// ── Variantes de entrada (stagger por índice) ──────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

// ── Estados de lote (lenguaje visual de Parcy) ─────────────────────────────
const STATUS = [
  { key: "disponible", color: "#22c55e", label: "Disponible" },
  { key: "reservado", color: "#f59e0b", label: "Reservado" },
  { key: "vendido", color: "#f43f5e", label: "Vendido" },
  { key: "bloqueado", color: "#64748b", label: "Bloqueado" },
] as const;

export default function Hero() {
  // Cronómetro de reserva en vivo (arranca tras montar para evitar mismatch de hidratación)
  const [secs, setSecs] = useState(23 * 60 + 41);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s <= 0 ? 24 * 60 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-surface pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* Fondo: superficie azulada + mesh marca/cian + retícula de plano */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-[440px] w-[560px] rounded-full bg-brand-200 opacity-40 blur-[120px]" />
        <div className="absolute right-[-8%] top-12 h-[400px] w-[500px] rounded-full bg-accent-300 opacity-30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-brand-100 opacity-50 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1e300d_1px,transparent_1px),linear-gradient(to_bottom,#0c1e300d_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_15%,#000_45%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Texto centrado ──────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-[0_1px_16px_-12px_rgba(12,30,48,0.18)]"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-600" />
            Software de gestión para parcelaciones y urbanismos
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.07] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            Controla la <span className="text-brand-600">disponibilidad</span> y la
            venta de tus lotes desde un solo plano.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft"
          >
            Parcy organiza tu proyecto en etapas y lotes sobre un plano interactivo,
            sincroniza a tu equipo comercial y técnico, y blinda cada operación con
            reservas temporizadas y aprobación de ventas. Sin ventas duplicadas, sin
            Excel desactualizado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CTAButton href="#contacto" className="group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Solicita una demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </CTAButton>
            <Link
              href="#caracteristicas"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-panel px-7 py-3.5 text-base font-semibold text-ink-soft transition-all hover:border-ink-faint/50 hover:text-ink sm:w-auto"
            >
              Ver capacidades
            </Link>
          </motion.div>

          {/* Leyenda de estados */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {STATUS.map((s) => (
              <span key={s.key} className="inline-flex items-center gap-2 text-sm text-ink-soft">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.label}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="mt-5 text-sm text-ink-faint"
          >
            Hecho para urbanizadores en Colombia · Cobros en COP
          </motion.p>
        </div>

        {/* ── Producto en escena: bisel de color + ventana ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Glow suave detrás de la ventana */}
          <div className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-gradient-to-b from-brand-200/45 via-accent-100/25 to-transparent blur-2xl" />

          {/* Ventana de producto (navegador + imagen real) */}
          <BrowserFrame
            src="/images/hero/dashboard_hero.png"
            alt="Parcy Digital — Plano de urbanismo y gestión de disponibilidad de lotes"
            width={1920}
            height={1080}
            priority
          />

          {/* Tarjeta de lote flotante con cronómetro en vivo */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.9, ease: "easeOut" }}
            className="absolute -bottom-6 right-4 hidden w-56 rounded-xl border border-line bg-panel p-4 shadow-[0_24px_60px_-22px_rgba(12,30,48,0.4)] sm:block lg:-right-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Lote 07</p>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium"
                style={{
                  backgroundColor: "rgba(245,158,11,0.14)",
                  borderColor: "rgba(245,158,11,0.34)",
                  borderWidth: 1,
                  color: "#92400e",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                Reservado
              </span>
            </div>

            <dl className="mt-3 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <dt className="text-ink-faint">Etapa</dt>
                <dd className="font-medium text-ink-soft">2</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-faint">Área</dt>
                <dd className="font-medium text-ink-soft">320 m²</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-faint">Precio</dt>
                <dd className="font-semibold text-ink">$185.000.000</dd>
              </div>
            </dl>

            <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#fff7ed] px-2.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ backgroundColor: "#f59e0b", animation: "pulse-ring 1.8s ease-out infinite" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
              </span>
              <Clock className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-[11px] font-medium text-amber-700">
                Libera en {mm}:{ss}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
