"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

// Access key pública de Web3Forms (https://web3forms.com). Es pública por diseño.
// Configúrala en .env.local como NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nuevo contacto desde parcydigital.com");
    formData.append("from_name", "Parcy Digital - Web");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Ocurrió un error de conexión. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <section
      id="contacto"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 overflow-hidden scroll-mt-20"
      aria-labelledby="contacto-heading"
    >
      {/* Patrón de cuadrícula sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Columna izquierda - Información */}
          <div className="max-w-xl">
            <h2
              id="contacto-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                proyecto
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Cuéntanos sobre tu parcelación o urbanismo y te mostramos cómo Parcy
              puede ayudarte a controlar la disponibilidad y eliminar ventas duplicadas.
              Te respondemos en menos de 24 horas.
            </p>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Escríbenos</div>
                  {/* TODO: reemplazar por el email real */}
                  <a
                    href="mailto:hola@parcydigital.com"
                    className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    hola@parcydigital.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Llámanos</div>
                  {/* TODO: reemplazar por el teléfono real */}
                  <a
                    href="tel:+573000000000"
                    className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    +57 300 000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ubicación</div>
                  {/* TODO: reemplazar por la ubicación real */}
                  <span className="text-base font-medium text-gray-900">
                    Colombia
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Nuestro equipo te responderá muy pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot anti-spam de Web3Forms */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Empresa / Proyecto
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Nombre del proyecto"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+57 300 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Al enviar aceptas que nos pongamos en contacto contigo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
