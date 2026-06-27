import Reveal from "@/components/ui/Reveal";

// Estilo base compartido de los campos
const fieldClass =
  "w-full rounded-lg border border-line bg-panel px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-soft";

const cargos = [
  "Propietario / Gerente general",
  "Director comercial",
  "Líder de proyecto / Urbanismo",
  "Asesor comercial",
  "Otro",
];

export default function ContactForm() {
  return (
    <section id="contacto" className="relative scroll-mt-20 bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Contacto
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Solicita una demo de <span className="text-brand-600">Parcy</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Déjanos tus datos y te mostramos cómo llevar la gestión de tu parcelación a una
            sola plataforma.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl">
          {/* Formulario visual (sin lógica de envío por ahora) */}
          <form className="rounded-2xl border border-line bg-panel p-6 shadow-[0_30px_80px_-40px_rgba(12,30,48,0.3)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-nombre" className={labelClass}>
                  Nombre completo
                </label>
                <input id="cf-nombre" type="text" placeholder="Tu nombre" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="cf-cargo" className={labelClass}>
                  Cargo en la empresa
                </label>
                <select id="cf-cargo" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Selecciona tu cargo
                  </option>
                  {cargos.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cf-empresa" className={labelClass}>
                  Empresa o proyecto
                </label>
                <input
                  id="cf-empresa"
                  type="text"
                  placeholder="Nombre de tu proyecto"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="cf-telefono" className={labelClass}>
                  Teléfono
                </label>
                <input
                  id="cf-telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-email" className={labelClass}>
                  Correo electrónico
                </label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="tu@correo.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
            >
              Solicitar demo
            </button>

            <p className="mt-4 text-center text-xs text-ink-faint">
              Te responderemos en menos de 24 horas hábiles.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
