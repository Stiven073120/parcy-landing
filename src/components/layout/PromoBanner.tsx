import Link from "next/link";
import { PROMO, isPromoActive } from "@/data/promo";

/**
 * Franja promocional sobre el Header. Solo se renderiza mientras la campaña
 * de src/data/promo.ts esté activa; la altura del header crece con ella.
 */
export default function PromoBanner() {
  if (!isPromoActive()) return null;

  return (
    <Link
      href="/pricing"
      className="flex h-9 items-center justify-center gap-2 bg-brand-700 px-4 text-center text-[13px] font-medium text-white transition-colors hover:bg-brand-800"
    >
      <span>
        {PROMO.percent}% de descuento en planes anuales
        <span className="text-white/70"> · hasta el {PROMO.deadlineLabel}</span>
      </span>
      <span className="hidden underline underline-offset-4 sm:inline">Ver planes</span>
    </Link>
  );
}
