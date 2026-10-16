import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import ContactFab from "@/components/layout/ContactFab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Tipografía de display para titulares (más carácter que Geist en tamaños grandes)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const baseUrl = "https://parcydigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Parcy Digital, el CRM para vender proyectos inmobiliarios por disponibilidad",
    template: "%s | Parcy Digital",
  },
  description:
    "El CRM para vender por disponibilidad. Inventario de unidades en tiempo real, reservas con cronómetro, aprobación de ventas y reportes para vivienda en altura, parcelaciones y urbanismos.",
  keywords: [
    "CRM para constructoras",
    "CRM para parcelaciones",
    "CRM inmobiliario",
    "gestión inmobiliaria",
    "parcelaciones",
    "urbanismo",
    "vivienda en altura",
    "inventario de unidades",
    "venta de apartamentos",
    "lotes",
    "disponibilidad en tiempo real",
    "gestión de proyectos inmobiliarios",
    "software inmobiliario",
    "ventas de lotes",
    "parcy digital",
    "gestión de urbanizaciones",
    "control de disponibilidad",
    "preventa inmobiliaria",
    "SaaS inmobiliario",
  ],
  authors: [{ name: "Parcy Digital", url: baseUrl }],
  creator: "Parcy Digital",
  publisher: "Parcy Digital",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: "Parcy Digital",
    title: "Parcy Digital, el CRM para vender por disponibilidad",
    description:
      "Inventario de unidades en tiempo real, reservas, ventas y equipo en un solo lugar. Para vivienda en altura, parcelaciones y urbanismos.",
    images: [
      {
        url: `${baseUrl}/images/picture_1.png`,
        width: 1742,
        height: 907,
        alt: "Parcy Digital: plano del proyecto y totales de unidades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcy Digital, el CRM para vender por disponibilidad",
    description:
      "Inventario de unidades en tiempo real, reservas, ventas y equipo en un solo lugar.",
    images: [`${baseUrl}/images/picture_1.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport configuration (required by Next.js 16+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#081f4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema básico para la landing page (Organization)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parcy Digital",
    url: "https://parcydigital.com",
    logo: "https://parcydigital.com/logos/parcy_principal.png",
    description:
      "CRM para proyectos inmobiliarios (vivienda en altura, parcelaciones y urbanismos): inventario de unidades, reservas, ventas y reportes",
  };

  return (
    <html lang="es">
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}>
        <SmoothScroll />
        {children}
        <ContactFab />
      </body>
    </html>
  );
}
