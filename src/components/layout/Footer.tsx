import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/pricing", label: "Precios" },
    { href: "/why-parcy", label: "¿Por qué Parcy?" },
    { href: "#contacto", label: "Contacto" },
    { href: "https://app.parcydigital.com", label: "Iniciar sesión", external: true },
  ];

  const legalLinks = [
    // TODO: crear estas páginas y reemplazar los href="#"
    { href: "#", label: "Política de privacidad" },
    { href: "#", label: "Términos y condiciones" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/parcy_principal.png"
              alt="Parcy Digital"
              width={140}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Plataforma especializada en gestión de parcelaciones y urbanismos.
              Controla la disponibilidad de lotes en tiempo real.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:contacto@parcydigital.com"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  contacto@parcydigital.com
                </a>
              </li>
              {/* TODO: reemplazar por la ubicación real */}
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-sm text-gray-400">Colombia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {year} Parcy Digital. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Hecho para urbanizadores profesionales.
          </p>
        </div>
      </div>
    </footer>
  );
}
