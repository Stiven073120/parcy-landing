import Image from "next/image";
import { Timer, ClipboardList, ShieldCheck, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    icon: Timer,
    role: "Asesor",
    title: "Reserva el lote",
    description:
      "El asesor reserva y arranca un cronómetro. Si no se concreta, el lote se libera solo.",
    status: { label: "Reservado", color: "#f59e0b" },
  },
  {
    n: "02",
    icon: ClipboardList,
    role: "Asesor",
    title: "Solicita la venta",
    description:
      "Adjunta los datos del cliente y el documento. La reserva deja de expirar mientras se revisa.",
    status: { label: "Con solicitud", color: "#f59e0b" },
  },
  {
    n: "03",
    icon: ShieldCheck,
    role: "Administrador",
    title: "Aprueba o rechaza",
    description:
      "El administrador revisa la solicitud. Cada decisión queda registrada y auditada por lote.",
    status: { label: "En revisión", color: "#0088cc" },
  },
  {
    n: "04",
    icon: BadgeCheck,
    role: "Todo el equipo",
    title: "Lote vendido",
    description:
      "Al aprobar, el lote pasa a Vendido para todos. Sin posibilidad de venderlo dos veces.",
    status: { label: "Vendido", color: "#f43f5e" },
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-night-2 to-night py-20 sm:py-28 lg:py-32">
      {/* Decoración */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,#000_45%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            Cómo funciona
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Del interés a la venta, con{" "}
            <span className="text-brand-300">control en cada paso.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Un flujo pensado para equipos de parcelación: reservas temporizadas, aprobación
            de ventas y trazabilidad completa del estado de cada lote.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Línea conectora con degradado de estados (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden px-20 lg:block">
            <div className="h-px w-full bg-gradient-to-r from-amber-400/50 via-brand-400/50 to-rose-400/50" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} i={i}>
                  <div className="flex h-full flex-col">
                    {/* Ícono con glow del color de estado */}
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-night-2 text-white"
                        style={{
                          color: s.status.color,
                          boxShadow: `0 0 32px -6px ${s.status.color}80`,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-white/35">
                        {s.n}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 flex-1 text-pretty text-sm leading-relaxed text-white/55">
                      {s.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[11px] font-medium uppercase tracking-wide text-white/40">
                        {s.role}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                        style={{
                          backgroundColor: `${s.status.color}1f`,
                          borderColor: `${s.status.color}4d`,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: s.status.color }}
                        />
                        {s.status.label}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Ventana de producto brillando sobre lo oscuro */}
        <Reveal className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-500/20 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-night-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <Image
              src="/images/features/dashboard.png"
              alt="Tablero de Parcy Digital con la gestión de lotes y su estado"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
