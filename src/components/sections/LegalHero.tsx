import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarDays } from "lucide-react";
import { LEGAL, LEGAL_DOCS, type LegalDocKey } from "@/data/legal";

interface LegalHeroProps {
  /** Documento legal que se está mostrando (resalta su pestaña en la navegación). */
  current: LegalDocKey;
  eyebrow: string;
  title: ReactNode;
  description: string;
}

/**
 * Cabecera compartida por las páginas legales (/privacy, /terms, /data-deletion).
 * Mismo lenguaje visual que HeroWhy, pero más compacta: badge, título, resumen,
 * fecha de última actualización y navegación entre documentos.
 */
export default function LegalHero({ current, eyebrow, title, description }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface pb-12 pt-36 sm:pb-16 sm:pt-40">
      {/* Glow + grid enmascarada */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1e3008_1px,transparent_1px),linear-gradient(to_bottom,#0c1e3008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          {eyebrow}
        </span>

        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.08]">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-faint">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          <span>
            Última actualización:{" "}
            <time dateTime={LEGAL.lastUpdated} className="font-medium text-ink-soft">
              {LEGAL.lastUpdatedLabel}
            </time>
          </span>
        </p>

        <nav aria-label="Documentos legales" className="mt-8 flex flex-wrap justify-center gap-2">
          {LEGAL_DOCS.map((doc) => {
            const active = doc.key === current;
            return (
              <Link
                key={doc.key}
                href={doc.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
                    : "rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-700"
                }
              >
                {doc.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
