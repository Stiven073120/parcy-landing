import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  Check,
  Clock,
  FileSpreadsheet,
  Headset,
  History,
  LayoutGrid,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/*
  Seis capacidades, todas con la misma anatomía para que se lean de un vistazo:
  icono, título, una frase y, abajo, una viñeta pequeña con el dato real del
  producto (totales, cronómetro, aprobación, avance, importación, roles).
  Las viñetas usan los colores de estado porque son contenido de producto.
*/

function VignetteInventario() {
  const stats: { label: string; value: string; dot?: string }[] = [
    { label: "Total", value: "430" },
    { label: "Disponibles", value: "107", dot: "var(--color-disponible)" },
    { label: "Reservados", value: "4", dot: "var(--color-reservado)" },
    { label: "Vendidos", value: "219", dot: "var(--color-vendido)" },
  ];
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-line bg-panel px-1.5 py-2 text-center">
          <p className="flex items-center justify-center gap-1 text-[10px] font-medium text-ink-faint">
            {s.dot && <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: s.dot }} aria-hidden="true" />}
            {s.label}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-ink tnum">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

function VignetteReserva() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-panel px-3 py-2.5">
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-reservado" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-reservado" />
      </span>
      <span className="min-w-0 truncate text-[13px] text-ink">
        <span className="font-semibold">Unidad 14-S2</span> reservada
      </span>
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-md bg-surface px-2 py-1 text-xs font-medium text-ink tnum">
        <Clock className="h-3 w-3 text-ink-soft" aria-hidden="true" />
        23:41
      </span>
    </div>
  );
}

function VignetteAprobacion() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-panel px-3 py-2.5">
      <span className="min-w-0 truncate text-[13px] text-ink">
        Solicitud de <span className="font-semibold">Andrés M.</span>
      </span>
      <span className="flex shrink-0 gap-1.5" aria-hidden="true">
        <span className="inline-flex h-7 items-center gap-1 rounded-md bg-brand-600 px-2.5 text-xs font-medium text-white">
          <Check className="h-3 w-3" /> Aprobar
        </span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line text-ink-soft">
          <X className="h-3 w-3" />
        </span>
      </span>
    </div>
  );
}

function VignetteReportes() {
  const rows = [
    { name: "Residencial Las Palmas", pct: 65 },
    { name: "Club de Golf", pct: 42 },
  ];
  return (
    <div className="space-y-2 rounded-lg border border-line bg-panel px-3 py-2.5">
      {rows.map((r) => (
        <div key={r.name}>
          <div className="flex items-center justify-between text-[11px]">
            <span className="truncate font-medium text-ink">{r.name}</span>
            <span className="shrink-0 text-ink-faint tnum">{r.pct}%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface">
            <div className="h-full rounded-full bg-brand-600" style={{ width: `${r.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function VignetteImportar() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2.5 text-[12px]">
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-surface px-2 py-1 font-medium text-ink">
        <FileSpreadsheet className="h-3.5 w-3.5 text-disponible" aria-hidden="true" />
        unidades.xlsx
      </span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden="true" />
      <span className="min-w-0 truncate text-ink">
        <span className="font-semibold tnum">430</span> unidades · <span className="tnum">3</span> etapas
      </span>
    </div>
  );
}

function VignetteRoles() {
  const roles = [
    { Icon: ShieldCheck, name: "Admin" },
    { Icon: UserRound, name: "Asesor" },
    { Icon: Headset, name: "Soporte" },
  ];
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {roles.map((r) => (
        <div key={r.name} className="flex items-center justify-center gap-1.5 rounded-lg border border-line bg-panel px-1.5 py-2 text-[12px] font-medium text-ink">
          <r.Icon className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
          {r.name}
        </div>
      ))}
    </div>
  );
}

const capabilities = [
  {
    Icon: LayoutGrid,
    title: "Inventario en tiempo real",
    description: "Cuántas unidades quedan, cuáles están reservadas y cuáles vendidas, con filtros por estado y etapa.",
    Vignette: VignetteInventario,
  },
  {
    Icon: Clock,
    title: "Reservas con cronómetro",
    description: "La reserva bloquea la unidad por un tiempo. Si la venta no avanza, se libera sola.",
    Vignette: VignetteReserva,
  },
  {
    Icon: ShieldCheck,
    title: "Aprobación de ventas",
    description: "El asesor solicita con los datos del cliente y el administrador aprueba o rechaza.",
    Vignette: VignetteAprobacion,
  },
  {
    Icon: BarChart3,
    title: "Reportes exportables",
    description: "Ventas del mes, reservas activas y avance por proyecto y etapa, en Excel o CSV.",
    Vignette: VignetteReportes,
  },
  {
    Icon: FileSpreadsheet,
    title: "Importación por Excel",
    description: "Carga cientos de unidades desde tu hoja, por etapa y número, en minutos.",
    Vignette: VignetteImportar,
  },
  {
    Icon: UserRound,
    title: "Roles y permisos",
    description: "Administrador, asesor y soporte. Cada quien ve y hace solo lo suyo.",
    Vignette: VignetteRoles,
  },
];

const extras = [
  {
    Icon: Calculator,
    title: "Simulador de financiación",
    description: "Planes de pago con o sin interés, separación y cuotas, frente al cliente.",
  },
  {
    Icon: Building2,
    title: "Multiempresa",
    description: "Varias empresas y proyectos en una sola cuenta, con cupos por plan.",
  },
  {
    Icon: History,
    title: "Todo queda registrado",
    description: "Cada cambio de estado guarda autor y fecha, con papelera para revertir errores.",
  },
];

export default function Capabilities() {
  return (
    <section id="capacidades" className="fade-b-panel scroll-mt-20 bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Todo lo que necesitas para <span className="text-celeste">vender por disponibilidad.</span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Seis capacidades que siguen el ciclo de cada unidad: del inventario a la reserva, la
            venta y el reporte.
          </p>
          <a href="#capturas" className="link-arrow mt-4 text-sm">
            Ver capturas reales
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} i={i % 3} className="card card-hover flex flex-col p-5 text-center sm:p-6 sm:text-left">
              <span className="icon-tile mx-auto sm:mx-0">
                <c.Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mx-auto mt-1.5 max-w-[36ch] text-pretty text-[15px] leading-relaxed text-ink-soft sm:mx-0">
                {c.description}
              </p>
              <div className="mt-5 rounded-xl border border-line bg-surface p-2 text-left sm:mt-auto">
                <c.Vignette />
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Lo que también incluye, en una sola fila */}
        <Reveal className="card mt-4 divide-y divide-line-soft md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {extras.map((e) => (
            <div key={e.title} className="flex items-start gap-3 p-5 text-left sm:p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <e.Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{e.title}</h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-ink-soft">{e.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
