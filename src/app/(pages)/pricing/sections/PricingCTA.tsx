import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function PricingCTA() {
  return (
    <section className="fade-b-navy bg-surface pb-28 pt-16 sm:pb-32 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-8 text-center md:grid-cols-[1fr_auto] md:text-left">
          <div>
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              ¿Aún con dudas? <span className="text-celeste">Te ayudamos a elegir.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft md:mx-0">
              Agenda una demo y vemos juntos qué plan encaja con tu proyecto, sin compromiso.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button href="/#contacto" size="lg">
              Agendar una demo
            </Button>
            <Button href="/why-parcy" variant="secondary" size="lg">
              ¿Por qué Parcy?
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
