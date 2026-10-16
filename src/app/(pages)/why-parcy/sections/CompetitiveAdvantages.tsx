import Reveal from "@/components/ui/Reveal";

const advantages = [
  {
    title: "Puesta en marcha rápida",
    description: "Sin implementaciones de meses: cargas tu proyecto, importas tus unidades y empiezas.",
  },
  {
    title: "Soporte en español",
    description: "Un equipo en Colombia que entiende cómo se vende un proyecto inmobiliario.",
  },
  {
    title: "Mejoras continuas",
    description: "La plataforma evoluciona contigo, sin upgrades costosos ni módulos sueltos.",
  },
  {
    title: "Precio claro en COP",
    description: "Cobros en pesos, sin costos ocultos ni permanencia. Cancelas cuando quieras.",
  },
];

export default function CompetitiveAdvantages() {
  return (
    <section className="fade-b-navy bg-panel pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              Ventajas <span className="text-celeste">que se notan</span>
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              Más allá de las funciones, lo que hace distinta la experiencia con Parcy.
            </p>
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {advantages.map((a) => (
                <li key={a.title} className="grid gap-1 py-6 text-center sm:grid-cols-[220px_1fr] sm:gap-8 sm:text-left">
                  <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                  <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">{a.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
