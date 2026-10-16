"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroScene from "./HeroScene";
import WordReveal from "@/components/ui/WordReveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const highlights = [
  "Plano con disponibilidad en vivo",
  "Reservas con cronómetro",
  "Aprobación de cada venta",
  "Reportes por etapa y asesor",
];

/**
 * Hero sobre azul profundo con cuadrícula de plano: texto a la izquierda y la
 * escena isométrica (la cuadra, el lote que se resalta y la casa que emerge)
 * flotando a la derecha con un halo azul. El texto arranca pegado al header
 * (sin etiqueta encima del titular). En móvil: titular y botones → escena → puntos clave.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.35 + i * 0.08, ease: EASE },
  });

  return (
    <section data-header-dark className="band-navy band-hero band-topo fade-b-panel overflow-hidden pb-28 pt-24 sm:pt-28 lg:pb-36 lg:pt-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-8 lg:gap-y-7">
          <div className="min-w-0 max-w-2xl text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
            <h1 className="text-balance font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.4rem] lg:text-[4rem]">
              <WordReveal
                text="Vende cada unidad sin cruces ni errores."
                accent="sin cruces ni errores."
                accentClassName="text-celeste-light"
              />
            </h1>

            <motion.p {...enter(0)} className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-white/70 sm:text-lg lg:mx-0 lg:text-xl">
              Apartamentos, casas, lotes o locales: la disponibilidad de cada unidad en tiempo real,
              reservas con cronómetro, aprobación de ventas y reportes. Para vivienda en altura,
              parcelaciones y urbanismos en Colombia.
            </motion.p>

            <motion.div {...enter(1)} className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="#contacto" size="lg" className="group">
                Solicitar demo
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
              <Button href="#producto" variant="inverse" size="lg">
                Probar el plano
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mx-auto w-full min-w-0 max-w-[520px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center lg:-mr-6 xl:-mr-14"
          >
            <HeroScene />
          </motion.div>

          <div className="min-w-0 max-w-2xl lg:col-start-1 lg:row-start-2 lg:self-start">
            <motion.ul {...enter(2)} className="mx-auto grid max-w-md grid-cols-2 gap-2 sm:max-w-none sm:gap-2.5">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-[13px] font-medium leading-snug text-white/90 sm:justify-start sm:rounded-full sm:px-3.5 sm:py-2 sm:text-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </motion.ul>

            <motion.p {...enter(3)} className="mt-5 text-center text-sm text-white/50 lg:text-left">
              Implementación incluida · Sin permanencia · Precios en COP
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
