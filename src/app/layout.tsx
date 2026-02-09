import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://parcydigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Parcy Digital - Plataforma de Gestión para Parcelaciones y Urbanismos",
    template: "%s | Parcy Digital"
  },
  description: "Controla la disponibilidad de lotes en tiempo real, conecta tu equipo comercial y técnico, y elimina ventas duplicadas. Gestión inteligente de proyectos inmobiliarios de parcelación.",
  keywords: [
    "gestión inmobiliaria",
    "parcelaciones",
    "urbanismo",
    "lotes",
    "disponibilidad en tiempo real",
    "CRM inmobiliario",
    "gestión de proyectos inmobiliarios",
    "software inmobiliario",
    "ventas de lotes",
    "parcy digital",
    "gestión de urbanizaciones",
    "control de disponibilidad",
    "preventa inmobiliaria",
    "SaaS inmobiliario"
  ],
  authors: [{ name: "Parcy Digital", url: baseUrl }],
  creator: "Parcy Digital",
  publisher: "Parcy Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: "Parcy Digital",
    title: "Parcy Digital - Gestión Inteligente de Parcelaciones",
    description: "La plataforma SaaS especializada en gestión de proyectos de parcelación y urbanismo. Controla disponibilidad de lotes en tiempo real y elimina ventas duplicadas.",
    images: [
      {
        url: `${baseUrl}/images/hero/dashboard_hero.png`,
        width: 1200,
        height: 630,
        alt: "Dashboard de Parcy Digital - Gestión de Parcelaciones"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcy Digital - Gestión Inteligente de Parcelaciones",
    description: "Controla la disponibilidad de lotes en tiempo real y elimina ventas duplicadas. Plataforma especializada en proyectos de parcelación.",
    images: [`${baseUrl}/images/hero/dashboard_hero.png`],
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
  // El canonical se define en cada página específica
  // La raíz (/) redirige a /landing, así que no necesita canonical aquí
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
    "name": "Parcy Digital",
    "url": "https://parcydigital.com",
    "logo": "https://parcydigital.com/logos/parcy_principal.png",
    "description": "Plataforma SaaS especializada en gestión de proyectos de parcelación y urbanismo"
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
