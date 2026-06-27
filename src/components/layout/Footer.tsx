import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const APP_URL = "https://app.parcydigital.com";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/pricing", label: "Precios" },
    { href: "/why-parcy", label: "¿Por qué Parcy?" },
    { href: "/#caracteristicas", label: "Capacidades" },
    { href: APP_URL, label: "Iniciar sesión", external: true },
  ];

  const legalLinks = [
    // TODO: crear estas páginas y reemplazar los href="#"
    { href: "#", label: "Política de privacidad" },
    { href: "#", label: "Términos y condiciones" },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <Image
              src="/logos/parcy_principal.png"
              alt="Parcy Digital"
              width={140}
              height={48}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Software especializado en gestión de parcelaciones y urbanismos. Controla la
              disponibilidad de tus lotes y véndelos sin errores.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              Navegación
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href="mailto:contacto@parcydigital.com"
                  className="text-sm text-white/65 transition-colors hover:text-brand-300"
                >
                  contacto@parcydigital.com
                </a>
              </li>
              {/* TODO: reemplazar por la ubicación real */}
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-sm text-white/65">Colombia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} Parcy Digital. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/45">Hecho para urbanizadores en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
}
