import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Features from "./sections/Features";
import Differentiators from "./sections/Differentiators";
import FinalCTA from "./sections/FinalCTA";

export const metadata: Metadata = {
  title: "Plataforma de Gestión para Parcelaciones y Urbanismos",
  description: "Controla la disponibilidad de lotes en tiempo real, conecta tu equipo comercial y técnico, y elimina ventas duplicadas. La herramienta especializada en proyectos de parcelación.",
  openGraph: {
    title: "Parcy Digital - Gestión Inteligente de Parcelaciones",
    description: "Controla disponibilidad de lotes en tiempo real y elimina ventas duplicadas. Plataforma especializada en proyectos de parcelación.",
    url: "https://parcydigital.com",
    images: [
      {
        url: "https://parcydigital.com/images/hero/dashboard_hero.png",
        width: 1200,
        height: 630,
        alt: "Dashboard de Parcy Digital"
      }
    ],
  },
  alternates: {
    canonical: "https://parcydigital.com",
  },
};

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Differentiators />
      {/* <HowItWorks /> */}
      <FinalCTA />
    </>
  );
}