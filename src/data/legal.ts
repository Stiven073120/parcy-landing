/**
 * Datos legales de la empresa — fuente única de verdad para las páginas
 * /privacy, /terms y /data-deletion y para el footer.
 *
 * Meta (verificación de Tech Provider) y la Ley 1581 de 2012 exigen que el
 * responsable del tratamiento esté plenamente identificado. Completa los TODO
 * antes de enviar la app a revisión.
 */
export const LEGAL = {
  brand: "Parcy Digital",
  // TODO: razón social completa tal como figura en el registro mercantil (p. ej. "Parcy Digital S.A.S.")
  legalName: "Parcy Digital S.A.S.",
  // TODO: NIT. Mientras esté vacío no se muestra en las páginas legales.
  nit: "902038166-0",
  // TODO: ciudad y dirección de notificaciones judiciales
  address: "Colombia",
  // Canal para consultas, reclamos y solicitudes de eliminación de datos.
  // Sugerencia: crear el alias privacidad@parcydigital.com y cambiarlo aquí.
  email: "contacto@parcydigital.com",
  siteUrl: "https://parcydigital.com",
  appUrl: "https://app.parcydigital.com",
  // Fecha de la última versión publicada de los documentos legales
  lastUpdated: "2026-10-09",
  lastUpdatedLabel: "9 de octubre de 2026",
} as const;

export type LegalDocKey = "privacy" | "terms" | "data-deletion";

/** Documentos legales públicos. Se usan en el footer y en la navegación entre páginas legales. */
export const LEGAL_DOCS: ReadonlyArray<{ key: LegalDocKey; href: string; label: string }> = [
  { key: "privacy", href: "/privacy", label: "Política de privacidad" },
  { key: "terms", href: "/terms", label: "Términos y condiciones" },
  { key: "data-deletion", href: "/data-deletion", label: "Eliminación de datos" },
];

/** Enlaces oficiales de Meta citados en la política de privacidad y los términos. */
export const META_LINKS = {
  privacyPolicy: "https://www.facebook.com/privacy/policy/",
  whatsappPrivacy: "https://www.whatsapp.com/legal/privacy-policy",
  platformTerms: "https://developers.facebook.com/terms/",
  whatsappBusinessTerms: "https://www.whatsapp.com/legal/business-terms/",
  whatsappMessagingPolicy: "https://business.whatsapp.com/policy",
  businessSettings: "https://business.facebook.com/settings/",
} as const;
