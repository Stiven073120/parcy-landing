import { permanentRedirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Parcy Digital - Plataforma de Gestión para Parcelaciones y Urbanismos",
  description: "Controla la disponibilidad de lotes en tiempo real, conecta tu equipo comercial y técnico, y elimina ventas duplicadas. Gestión inteligente de proyectos inmobiliarios de parcelación.",
  alternates: {
    canonical: "https://parcydigital.com/landing",
  },
  openGraph: {
    url: "https://parcydigital.com/landing",
  },
  robots: {
    index: false, // No indexar la página de redirección
    follow: true,
  },
};

export default function Home() {
  permanentRedirect('/landing');
}
