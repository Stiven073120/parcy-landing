"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Lock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 7000;
const IDLE_MS = 15000; // tras un clic, espera antes de retomar el avance automático

type Callout = { x: number; y: number; label: string; align?: "left" | "right" };

type Slide = {
  id: string;
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  callouts: Callout[];
};

// Capturas reales del producto. Las etiquetas se posicionan en % del área de la imagen.
const SLIDES: Slide[] = [
  {
    id: "plano",
    label: "Plano interactivo",
    title: "Cada unidad sobre el plano real",
    description:
      "Verde disponible, amarillo reservado, rojo vendido. El estado de cada unidad, sobre el plano de tu proyecto.",
    src: "/images/solution/plano_interactivo.png",
    alt: "Plano interactivo del proyecto Parcy Demo con cada lote marcado en verde, rojo o gris según su estado",
    callouts: [
      { x: 46, y: 22, label: "Cada punto es una unidad con su estado" },
      { x: 72, y: 62, label: "Filtra por estado desde la leyenda", align: "right" },
    ],
  },
  {
    id: "inventario",
    label: "Inventario de unidades",
    title: "Totales en tiempo real, filtros por estado y etapa",
    description:
      "Cuántas unidades quedan, cuáles están reservadas y cuáles vendidas. Busca por número y filtra por sector.",
    src: "/images/hero/dashboard_hero.png",
    alt: "Listado de lotes del proyecto con totales de disponibles, reservados y vendidos y filtros por estado y sector",
    callouts: [
      { x: 60, y: 20, label: "Totales por estado" },
      { x: 30, y: 52, label: "Filtra por estado y sector" },
      { x: 62, y: 80, label: "Área y precio por unidad", align: "right" },
    ],
  },
  {
    id: "panel",
    label: "Panel de control",
    title: "Lo que pasó hoy, en una sola vista",
    description:
      "Reservas activas, ventas del mes, últimas transacciones y notificaciones del equipo.",
    src: "/images/hero/prueba.png",
    alt: "Panel de control con resumen de ventas, reservas activas, últimas transacciones y notificaciones",
    callouts: [
      { x: 34, y: 36, label: "Reservas activas y ventas del mes" },
      { x: 70, y: 84, label: "Avance por proyecto", align: "right" },
    ],
  },
  {
    id: "proyectos",
    label: "Proyectos",
    title: "Varios proyectos, una sola plataforma",
    description:
      "Cada proyecto con su empresa, su plano y sus totales. Cambias de proyecto sin cambiar de herramienta.",
    src: "/images/picture_1.png",
    alt: "Ficha del proyecto Golf Club con su plano, la empresa y los totales de lotes",
    callouts: [
      { x: 54, y: 30, label: "Plano del proyecto" },
      { x: 70, y: 82, label: "Totales del proyecto", align: "right" },
    ],
  },
];

export default function ProductTour() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });

  const autoplay = !reduce && inView && !paused;

  // Avance automático mientras la sección está a la vista y nadie interactúa
  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [autoplay, active]);

  // Al elegir manualmente se detiene el autoplay un rato; luego retoma solo
  const select = useCallback((i: number) => {
    setActive(i);
    setPaused(true);
    if (idleRef.current) clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => setPaused(false), IDLE_MS);
  }, []);
  useEffect(() => () => {
    if (idleRef.current) clearTimeout(idleRef.current);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select((active + 1) % SLIDES.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select((active - 1 + SLIDES.length) % SLIDES.length);
    }
  };

  const slide = SLIDES[active];

  return (
    <section
      id="capturas"
      ref={sectionRef}
      className="fade-b-navy scroll-mt-20 overflow-hidden bg-panel pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Así se ve <span className="text-celeste">en la app.</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Capturas reales de los módulos con los que tu equipo trabaja todos los días.
          </p>
        </div>

        {/* Tabs en móvil: chips con scroll horizontal */}
        <div className="-mx-4 mt-8 overflow-x-auto px-4 no-scrollbar sm:-mx-6 sm:px-6 lg:hidden">
          <div className="flex w-max gap-2" role="tablist" aria-label="Módulos de Parcy" onKeyDown={onKeyDown}>
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                id={`tour-tab-m-${s.id}`}
                aria-selected={i === active}
                aria-controls="tour-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                className={`h-9 whitespace-nowrap rounded-full border px-3.5 text-sm font-medium transition-colors duration-150 ${
                  i === active
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-panel text-ink-soft hover:border-line-strong hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:mt-10 lg:grid-cols-[300px_1fr] lg:gap-12 xl:grid-cols-[340px_1fr]">
          {/* Lista en escritorio */}
          <div
            className="hidden lg:block"
            role="tablist"
            aria-label="Módulos de Parcy"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
          >
            {SLIDES.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`tour-tab-${s.id}`}
                  aria-selected={isActive}
                  aria-controls="tour-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  className={`relative block w-full overflow-hidden rounded-xl border px-5 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "border-line bg-surface"
                      : "border-transparent hover:bg-surface/60"
                  }`}
                >
                  <span className={`block text-base font-semibold ${isActive ? "text-ink" : "text-ink-soft"}`}>
                    {s.label}
                  </span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-1.5 text-sm leading-relaxed text-ink-soft">
                          {s.description}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {/* Progreso del autoplay */}
                  {isActive && autoplay && (
                    <span
                      key={`progress-${s.id}`}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-600"
                      style={{ animation: `tour-progress ${AUTOPLAY_MS}ms linear forwards` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Ventana del producto: en escritorio se ve en perspectiva y se endereza al pasar el mouse */}
          <div className="tour-stage">
          <div
            id="tour-panel"
            role="tabpanel"
            aria-labelledby={`tour-tab-${slide.id}`}
            className="card tour-window overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-line-soft bg-surface px-3.5 py-2">
              <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              </div>
              <div className="mx-auto hidden items-center gap-1.5 rounded-md border border-line bg-panel px-3 py-1 text-[11px] text-ink-faint sm:flex">
                <Lock className="h-2.5 w-2.5" aria-hidden="true" />
                <span className="truncate">app.parcydigital.com/{slide.id}</span>
              </div>
              <div aria-hidden="true" className="hidden w-[46px] shrink-0 sm:block" />
            </div>

            <div className="relative aspect-[1846/916] w-full bg-surface">
              {/* Todas las capturas montadas: el cambio es un fundido, sin recargas */}
              {SLIDES.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={s.src}
                    alt={i === active ? s.alt : ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover object-center"
                  />
                </motion.div>
              ))}

              {/* Etiquetas sobre la captura (escritorio) */}
              <AnimatePresence mode="wait">
                <motion.div key={slide.id} className="absolute inset-0 hidden sm:block" aria-hidden="true">
                  {slide.callouts.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      transition={{ duration: 0.45, delay: 0.35 + i * 0.12, ease: EASE }}
                      className="absolute flex items-center gap-2"
                      style={{
                        left: `${c.x}%`,
                        top: `${c.y}%`,
                        transform: c.align === "right" ? "translateX(-100%)" : undefined,
                        flexDirection: c.align === "right" ? "row-reverse" : "row",
                      }}
                    >
                      <span className="relative flex h-3 w-3 shrink-0">
                        <span
                          className="absolute inline-flex h-full w-full rounded-full bg-brand-600"
                          style={{ animation: reduce ? undefined : "pulse-ring 2s ease-out infinite" }}
                        />
                        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-panel bg-brand-600" />
                      </span>
                      <span className="whitespace-nowrap rounded-md border border-line bg-panel px-2.5 py-1.5 text-xs font-medium text-ink shadow-[var(--shadow-card)]">
                        {c.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          </div>
        </div>

        {/* Descripción del módulo activo (móvil y tablet) */}
        <div className="mt-6 text-center lg:hidden" aria-live="polite">
          <h3 className="text-lg font-semibold text-ink">{slide.title}</h3>
          <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-ink-soft">{slide.description}</p>
          <ul className="mt-4 space-y-2">
            {slide.callouts.map((c) => (
              <li key={c.label} className="flex items-center justify-center gap-2.5 text-sm text-ink">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
