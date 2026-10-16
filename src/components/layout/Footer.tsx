import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LEGAL_DOCS } from "@/data/legal";

const APP_URL = "https://app.parcydigital.com";

type FooterLink = { href: string; label: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Producto",
    links: [
      { href: "/#producto", label: "Pruébalo" },
      { href: "/#capturas", label: "Así se ve en la app" },
      { href: "/#capacidades", label: "Capacidades" },
      { href: "/pricing", label: "Precios" },
      { href: "/why-parcy", label: "¿Por qué Parcy?" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/#contacto", label: "Solicitar demo" },
      { href: "mailto:contacto@parcydigital.com", label: "contacto@parcydigital.com", external: true },
      { href: APP_URL, label: "Iniciar sesión", external: true },
    ],
  },
  {
    title: "Legal",
    // Documentos legales (/privacy, /terms, /data-deletion) — fuente: src/data/legal.ts
    links: LEGAL_DOCS.map(({ href, label }) => ({ href, label })),
  },
];

/** Pie en azul noche: continúa la banda de contacto y cierra con la marca gigante. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-header-dark className="overflow-hidden bg-night text-white" role="contentinfo">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="text-center sm:col-span-2 sm:text-left md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Parcy Digital, inicio">
              <Image src="/logo-p.png" alt="" width={64} height={64} className="h-8 w-8 object-contain" />
              <span className="font-display text-[14px] font-extrabold uppercase tracking-[0.08em] text-white">
                Parcy Digital
              </span>
            </Link>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/60 sm:mx-0">
              CRM para proyectos inmobiliarios. Inventario de unidades, reservas, ventas y
              equipo en un solo lugar.
            </p>
            <a href={APP_URL} className="link-arrow mt-5 text-sm !text-brand-300 hover:!text-brand-200">
              Ir a la aplicación
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-center text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {year} Parcy Digital S.A.S. Todos los derechos reservados.</p>
          <p>Hecho en Colombia. Precios en COP.</p>
        </div>

        {/* Marca gigante completa al pie */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-6 select-none pb-4 text-center font-display text-[clamp(4.5rem,17vw,15rem)] font-extrabold leading-none tracking-[-0.05em] text-white/[0.06] sm:pb-6 sm:text-left"
        >
          parcy
        </div>
      </div>
    </footer>
  );
}
