import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { LEGAL } from "@/data/legal";

export interface LegalSection {
  /** Ancla de la sección (#id). Debe ser única dentro de la página. */
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalArticleProps {
  sections: LegalSection[];
}

const tocLinkClass =
  "-ml-px flex gap-3 border-l border-transparent pl-4 text-sm leading-snug text-ink-soft transition-colors hover:border-brand-600 hover:text-brand-600";

function TocList({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-2.5 border-l border-line">
      {sections.map((section, index) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className={tocLinkClass}>
            <span className="shrink-0 tabular-nums text-ink-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/**
 * Cuerpo de las páginas legales: tabla de contenido fija a la izquierda (desktop,
 * desplegable en móvil) y secciones numeradas con anclas. El scroll suave y el
 * offset del header fijo los aporta `html` en globals.css.
 */
export default function LegalArticle({ sections }: LegalArticleProps) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          {/* Tabla de contenido */}
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pr-2">
            {/* Móvil: desplegable */}
            <details className="rounded-2xl border border-line bg-surface p-4 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-ink">
                Contenido del documento
              </summary>
              <div className="mt-4">
                <TocList sections={sections} />
              </div>
            </details>

            {/* Desktop: fija */}
            <nav aria-label="Contenido del documento" className="hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Contenido
              </p>
              <div className="mt-4">
                <TocList sections={sections} />
              </div>
            </nav>

            <div className="mt-8 hidden rounded-2xl border border-line bg-surface p-5 lg:block">
              <p className="text-sm font-semibold text-ink">¿Dudas sobre tus datos?</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Escríbenos y te respondemos dentro de los plazos de ley.
              </p>
              <a
                href={`mailto:${LEGAL.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {LEGAL.email}
              </a>
            </div>
          </aside>

          {/* Contenido */}
          <article className="mt-10 max-w-3xl lg:mt-0">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-line-soft py-8 first:pt-0 last:border-b-0"
              >
                <h2 className="flex gap-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  <span className="tabular-nums text-brand-600">{index + 1}.</span>
                  <span>{section.title}</span>
                </h2>
                <div className="legal-prose mt-4">{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
