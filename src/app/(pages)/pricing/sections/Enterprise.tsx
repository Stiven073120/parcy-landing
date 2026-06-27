import Link from "next/link";
import { Check, Building2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  "Más usuarios y proyectos",
  "Multiempresa a gran escala",
  "Integraciones a medida",
  "Onboarding e importación asistidos",
  "Gerente de cuenta dedicado",
];

export default function Enterprise() {
  return (
    <section className="relative bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-night via-[#0a2236] to-night-2 p-8 shadow-[0_40px_100px_-50px_rgba(7,17,27,0.9)] sm:p-12 md:p-14">
            {/* Decoración */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-600/25 blur-[110px]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,#000_30%,transparent_100%)]" />
            </div>

            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                  A medida
                </span>

                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  ¿Tu operación supera los planes?
                </h2>
                <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-white/65">
                  Para constructoras con muchos proyectos, equipos grandes o necesidades
                  específicas, armamos un plan a la medida de tu operación.
                </p>

                <ul className="mt-7 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-6 md:items-end md:text-right">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-300 ring-1 ring-inset ring-white/15">
                  <Building2 className="h-8 w-8" />
                </span>
                <div className="md:text-right">
                  <div className="text-4xl font-semibold tracking-tight text-white">
                    Plan a medida
                  </div>
                  <p className="mt-1.5 text-sm text-white/60">
                    Precio según tu operación
                  </p>
                </div>
                <Link
                  href="/#contacto"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-brand-50 md:w-auto"
                >
                  Contactar ventas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
