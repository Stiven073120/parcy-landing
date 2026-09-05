import Link from "next/link";
import { Calendar } from "lucide-react";
import { PROMO, isPromoActive } from "@/data/promo";

/**
 * Franja promocional que corona el Header en todas las páginas.
 * Se renderiza dentro del <header> fijo, así que la altura total del header
 * crece mientras la campaña esté activa.
 */
export default function PromoBanner() {
  if (!isPromoActive()) return null;

  return (
    <Link
      href="/pricing"
      className="group flex h-9 items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-800 px-4 text-center text-white transition-opacity hover:opacity-95"
    >
      <Calendar className="h-3.5 w-3.5 shrink-0 text-white/80" aria-hidden="true" />
      <span className="whitespace-nowrap text-[13px] font-medium leading-none">
        <span className="font-semibold">{PROMO.percent}% OFF</span> en planes anuales
        <span className="text-white/75 sm:hidden"> · {PROMO.deadlineShort}</span>
        <span className="hidden text-white/75 sm:inline"> · hasta el {PROMO.deadlineLabel}</span>
      </span>
      <span className="hidden text-[13px] font-semibold leading-none underline-offset-2 group-hover:underline sm:inline">
        Ver planes →
      </span>
    </Link>
  );
}
