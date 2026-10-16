import Link from "next/link";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/pricing", label: "Precios" },
  { href: "/why-parcy", label: "¿Por qué Parcy?" },
  { href: "/#contacto", label: "Contacto" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[100dvh] items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl py-20">
          <p className="text-sm font-medium text-ink-faint tnum">Error 404</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Esta página no existe.
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
            Puede que el enlace esté roto o que la página se haya movido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Volver al inicio
            </Button>
            <Button href="https://app.parcydigital.com" variant="secondary" size="lg">
              Ir a la aplicación
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
