"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Clock, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 4500; // avance automático entre pasos
const IDLE_MS = 12000; // tras un clic, espera antes de volver a avanzar

type StatusKey = "reservado" | "solicitud" | "revision" | "vendido";

const STATUS: Record<StatusKey, { label: string; color: string }> = {
  reservado: { label: "Reservado", color: "var(--color-reservado)" },
  solicitud: { label: "Con solicitud", color: "var(--color-reservado)" },
  revision: { label: "En revisión", color: "var(--color-brand-600)" },
  vendido: { label: "Vendido", color: "var(--color-vendido)" },
};

const STEPS: { role: string; title: string; description: string; status: StatusKey; log: string }[] = [
  {
    role: "Asesor",
    title: "Reserva la unidad",
    description:
      "La reserva arranca un cronómetro. Si la venta no avanza, la unidad se libera sola y vuelve a estar disponible.",
    status: "reservado",
    log: "Reservado por Andrés Mejía",
  },
  {
    role: "Asesor",
    title: "Solicita la venta",
    description:
      "Adjunta los datos del cliente. La reserva se congela mientras la solicitud se revisa.",
    status: "solicitud",
    log: "Solicitud de venta enviada",
  },
  {
    role: "Administrador",
    title: "Aprueba o rechaza",
    description:
      "Revisa la solicitud y decide. Cada decisión queda registrada con autor y fecha.",
    status: "revision",
    log: "En revisión por Administración",
  },
  {
    role: "Todo el equipo",
    title: "La unidad queda vendida",
    description:
      "Pasa a Vendido para todos al mismo tiempo. Nadie puede volver a venderlo.",
    status: "vendido",
    log: "Venta aprobada. Unidad vendida",
  },
];

const TIMES = ["10:12", "10:25", "10:40", "10:41"];

/** Banda de azul profundo: los pasos a la izquierda y la ficha de la unidad a la derecha. */
export default function Flow() {
  const [step, setStep] = useState(0);
  const [lastClick, setLastClick] = useState(0);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.4 });

  // Presentación automática: rota los pasos mientras la sección está a la vista y nadie interactúa
  useEffect(() => {
    if (reduce || !inView) return;
    const sinceClick = Date.now() - lastClick;
    const wait = sinceClick < IDLE_MS ? IDLE_MS - sinceClick : AUTOPLAY_MS;
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), wait);
    return () => clearTimeout(id);
  }, [step, inView, reduce, lastClick]);
  const current = STEPS[step];
  const status = STATUS[current.status];

  // Cronómetro de la reserva: solo corre en el primer paso
  const [secs, setSecs] = useState(23 * 60 + 41);
  useEffect(() => {
    if (step !== 0) return;
    const id = setInterval(() => setSecs((s) => (s <= 0 ? 24 * 60 : s - 1)), 1000);
    return () => clearInterval(id);
  }, [step]);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <section ref={sectionRef} data-header-dark className="band-navy band-topo fade-b-surface overflow-hidden pb-28 pt-16 sm:pt-20 lg:pb-36 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Pasos */}
          <div className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.5rem]">
              De la reserva a la venta, <span className="text-celeste-light">sin pisarse.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:mx-0 sm:text-lg">
              Un flujo con dos controles: reservas con tiempo y aprobación de cada venta.
              Elige un paso para ver cómo cambia la unidad.
            </p>

            <ol className="mt-8 text-left">
              {STEPS.map((s, i) => {
                const isActive = i === step;
                const isPast = i < step;
                return (
                  <li key={s.title} className="relative isolate pl-12">
                    {isActive && (
                      <motion.span
                        layoutId="flow-paso-activo"
                        aria-hidden="true"
                        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                        className="absolute -inset-x-3 -top-2.5 bottom-2.5 -z-10 rounded-2xl border border-white/10 bg-white/[0.06]"
                      />
                    )}
                    {/* Línea conectora */}
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`absolute left-[15px] top-8 h-[calc(100%-8px)] w-0 border-l border-dashed ${
                          isPast ? "border-brand-300" : "border-white/25"
                        }`}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setStep(i);
                        setLastClick(Date.now());
                      }}
                      aria-current={isActive ? "step" : undefined}
                      className="group block w-full pb-5 text-left"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-200 ${
                          isActive
                            ? "border-brand-500 bg-brand-600 text-white"
                            : isPast
                              ? "border-brand-300 bg-transparent text-brand-300"
                              : "border-white/25 bg-transparent text-white/60 group-hover:border-white/50"
                        }`}
                      >
                        {isPast ? <Check className="h-4 w-4" /> : i + 1}
                      </span>
                      <span className="block text-xs font-medium uppercase tracking-[0.08em] text-brand-300/80">
                        {s.role}
                      </span>
                      <span
                        className={`mt-0.5 block text-lg font-semibold transition-colors duration-200 ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {s.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="block overflow-hidden"
                          >
                            <span className="block max-w-md pt-1.5 text-[15px] leading-relaxed text-white/70">
                              {s.description}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Ficha de la unidad que reacciona al paso elegido */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="card border-white/20 text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.25),0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between border-b border-line-soft px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink-faint">Unidad</p>
                  <p className="mt-0.5 text-xl font-semibold text-ink">14-S2</p>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.status}
                    initial={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.12 } }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1 text-sm font-medium text-ink"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: status.color }} />
                    {status.label}
                  </motion.span>
                </AnimatePresence>
              </div>

              <dl className="grid grid-cols-3 gap-4 px-5 py-4 text-center text-sm sm:px-6 sm:text-left">
                <div>
                  <dt className="text-ink-faint">Sector</dt>
                  <dd className="mt-0.5 font-medium text-ink">2</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Área</dt>
                  <dd className="mt-0.5 font-medium text-ink tnum">466 m²</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Precio</dt>
                  <dd className="mt-0.5 font-medium text-ink tnum">$194.044.730</dd>
                </div>
              </dl>

              {/* Zona que cambia con el paso */}
              <div className="border-t border-line-soft px-5 py-4 sm:px-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -4, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    {step === 0 && (
                      <div className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2.5">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span
                            className="absolute inline-flex h-full w-full rounded-full"
                            style={{
                              backgroundColor: status.color,
                              animation: reduce ? undefined : "pulse-ring 1.8s ease-out infinite",
                            }}
                          />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: status.color }} />
                        </span>
                        <Clock className="h-4 w-4 text-ink-soft" aria-hidden="true" />
                        <span className="text-sm text-ink">
                          La reserva se libera en <span className="font-semibold tnum">{mm}:{ss}</span>
                        </span>
                      </div>
                    )}
                    {step === 1 && (
                      <div className="rounded-lg bg-surface px-3 py-2.5 text-sm">
                        <p className="text-ink-faint">Cliente</p>
                        <p className="mt-0.5 font-medium text-ink">Laura Cárdenas</p>
                        <p className="text-ink-soft">Separación: $9.700.000 · Plan a 36 cuotas</p>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-2.5">
                        <p className="text-sm text-ink">Solicitud de Andrés Mejía</p>
                        <div className="flex gap-2" aria-hidden="true">
                          <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-brand-600 px-3 text-xs font-medium text-white">
                            <Check className="h-3.5 w-3.5" /> Aprobar
                          </span>
                          <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-panel px-3 text-xs font-medium text-ink-soft">
                            <X className="h-3.5 w-3.5" /> Rechazar
                          </span>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-ink">
                          Vendido para todo el equipo. Ya no aparece como disponible.
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Historial auditado */}
              <div className="border-t border-line-soft px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink-faint">Historial</p>
                <ol className="mt-2.5 space-y-2">
                  <AnimatePresence initial={false}>
                    {STEPS.slice(0, step + 1).map((s, i) => (
                      <motion.li
                        key={s.log}
                        layout
                        initial={{ opacity: 0, y: reduce ? 0 : 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.12 } }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="flex items-baseline gap-3 text-sm"
                      >
                        <span className="w-11 shrink-0 text-ink-faint tnum">{TIMES[i]}</span>
                        <span className={i === step ? "font-medium text-ink" : "text-ink-soft"}>{s.log}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
