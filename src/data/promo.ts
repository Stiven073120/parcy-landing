/**
 * Campaña promocional — fuente única de verdad.
 *
 * Todo lo relacionado con la promo (porcentaje, fecha límite, textos) vive aquí.
 * Para apagarla basta con poner `active: false` y desplegar.
 */
export const PROMO = {
  active: true, // ← poner en false el 11 de septiembre
  percent: 25,
  endsAt: "2026-09-10T23:59:59-05:00", // hora Colombia
  deadlineLabel: "10 de septiembre",
  deadlineShort: "10 de sep",
  headline: "25% de descuento en planes anuales",
} as const;

/** true solo si la campaña sigue vigente en el momento de renderizar. */
export const isPromoActive = () =>
  PROMO.active && Date.now() <= new Date(PROMO.endsAt).getTime();

/** Aplica el descuento redondeando a la decena inferior (el precio termina en 0). */
export const promoPrice = (price: number) =>
  Math.floor((price * (100 - PROMO.percent)) / 100 / 10) * 10;
