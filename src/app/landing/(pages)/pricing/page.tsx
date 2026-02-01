import { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroPricing from "./sections/HeroPricing";
import PricingPlans from "./sections/PricingPlans";
import Addons from "./sections/Addons";
import Enterprise from "./sections/Enterprise";
import AllPlansInclude from "./sections/AllPlansInclude";
import PricingCTA from "./sections/PricingCTA";

export const metadata: Metadata = {
  title: "Precios y Planes - Parcy Digital",
  description: "Descubre nuestros planes de gestión inmobiliaria para parcelaciones. Desde proyectos pequeños hasta empresas constructoras. Implementación y soporte incluidos.",
  openGraph: {
    title: "Planes y Precios - Parcy Digital",
    description: "Planes flexibles para gestión de parcelaciones. Desde proyectos pequeños hasta empresas constructoras.",
    url: "https://parcydigital.com/landing/pricing",
  },
  alternates: {
    canonical: "https://parcydigital.com/landing/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Header />
      <HeroPricing />
      <PricingPlans />
      <Addons />
      <Enterprise />
      <AllPlansInclude />
      <PricingCTA />
    </>
  );
}
