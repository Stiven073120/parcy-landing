import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parcy digital | Gestion inmobiliaria",
  description: "Parcy digital | Gestion inmobiliaria",
  keywords: ["gestion inmobiliaria", "parcy", "inmobiliaria", "propiedades", "propiedades en venta", "propiedades en alquiler", "propiedades en arriendo", "propiedades en renta", "propiedades en compra", "propiedades en venta", "propiedades en alquiler", "propiedades en arriendo", "propiedades en renta", "propiedades en compra"],
  authors: [{ name: "Parcy", url: "https://parcydigital.com" }],
  creator: "Parcy digital",
  openGraph: {
    title: "Parcy digital | Gestion inmobiliaria",
    description: "Parcy digital | Gestion inmobiliaria",
    url: "https://parcydigital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
