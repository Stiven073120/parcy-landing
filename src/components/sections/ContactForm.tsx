"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const fieldClass =
  "h-11 w-full rounded-lg border border-line bg-panel px-3.5 text-[15px] text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-150 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

const cargos = [
  "Propietario / Gerente general",
  "Director comercial",
  "Líder de proyecto",
  "Asesor comercial",
  "Otro",
];

const benefits = [
  "Demo con tu proyecto en mente, en menos de 24 horas hábiles",
  "Implementación y capacitación incluidas",
  "Sin permanencia. Precios en COP",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("El formulario no está configurado todavía. Escríbenos a contacto@parcydigital.com.");
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    // Campo trampa para bots: si viene lleno, no se envía
    if (data.get("botcheck")) return;

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nueva solicitud de demo desde parcydigital.com",
          from_name: "Parcy Digital (landing)",
          nombre: data.get("nombre"),
          cargo: data.get("cargo"),
          empresa: data.get("empresa"),
          telefono: data.get("telefono"),
          email: data.get("email"),
          mensaje: data.get("mensaje"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "No se pudo enviar");
      setStatus("success");
      form.reset();
    } catch {
      setError("No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a contacto@parcydigital.com.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" data-header-dark className="band-navy band-topo scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="text-center sm:text-left">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.5rem]">
              Solicita <span className="text-celeste-light">una demo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-white/70 sm:mx-0">
              Te mostramos Parcy con tu proyecto en mente: tus etapas, tus unidades y tu equipo.
            </p>
            <ul className="mx-auto mt-8 w-fit max-w-sm space-y-3 sm:mx-0 sm:w-auto sm:max-w-none">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-left text-[15px] text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            {status === "success" ? (
              <div
                role="status"
                className="card p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">Solicitud recibida</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Te escribimos en menos de 24 horas hábiles para agendar la demo.
                </p>
                <Button variant="secondary" size="md" className="mt-6" onClick={() => setStatus("idle")}>
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate={false}
                className="card p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8"
              >
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-nombre" className={labelClass}>
                      Nombre completo
                    </label>
                    <input
                      id="cf-nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-cargo" className={labelClass}>
                      Cargo
                    </label>
                    <select id="cf-cargo" name="cargo" defaultValue="" required className={fieldClass}>
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
                      name="empresa"
                      type="text"
                      required
                      autoComplete="organization"
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
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
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
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="tu@empresa.com"
                      className={fieldClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="cf-mensaje" className={labelClass}>
                      Cuéntanos de tu proyecto <span className="font-normal text-ink-faint">(opcional)</span>
                    </label>
                    <textarea
                      id="cf-mensaje"
                      name="mensaje"
                      rows={3}
                      placeholder="Tipo de proyecto, cantidad de unidades, tamaño del equipo…"
                      className={`${fieldClass} h-auto resize-y py-2.5`}
                    />
                  </div>
                </div>

                {status === "error" && error && (
                  <p role="alert" className="mt-4 text-sm text-vendido">
                    {error}
                  </p>
                )}

                <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando…" : "Solicitar demo"}
                </Button>

                {/* Autorización de tratamiento de datos (Ley 1581 de 2012) */}
                <p className="mt-4 text-center text-xs leading-relaxed text-ink-faint">
                  Al enviar este formulario autorizas a Parcy Digital a tratar tus datos para
                  contactarte, conforme a nuestra{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-brand-600 underline underline-offset-2 transition-colors hover:text-brand-700"
                  >
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
