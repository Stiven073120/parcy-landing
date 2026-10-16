import Reveal from "@/components/ui/Reveal";

const addons = [
  {
    title: "Proyecto adicional",
    price: "$199.999",
    unit: "/ proyecto al mes",
    description: "Suma proyectos cuando lances una nueva etapa, torre o parcelación, sin cambiar de plan.",
  },
  {
    title: "Usuarios adicionales",
    price: "Consultar",
    unit: "",
    description: "Amplía tu equipo por encima del cupo de usuarios de tu plan.",
  },
];

export default function Addons() {
  return (
    <section className="fade-b-navy bg-surface pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              Amplía tu plan <span className="text-celeste">cuando crezcas</span>
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              Paga solo por lo que sumes.
            </p>
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {addons.map((a) => (
                <li key={a.title} className="grid gap-2 py-6 text-center sm:grid-cols-[1fr_auto] sm:gap-8 sm:text-left">
                  <div>
                    <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                    <p className="mx-auto mt-1 max-w-md text-pretty text-[15px] leading-relaxed text-ink-soft sm:mx-0">
                      {a.description}
                    </p>
                  </div>
                  <p className="text-center sm:text-right">
                    <span className="text-xl font-semibold tracking-tight text-ink tnum">{a.price}</span>
                    {a.unit && <span className="ml-1 text-sm text-ink-faint">{a.unit}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
