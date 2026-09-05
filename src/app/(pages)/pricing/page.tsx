import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroPricing from "./sections/HeroPricing";
import PromoAnual from "./sections/PromoAnual";
import PricingPlans from "./sections/PricingPlans";
import Addons from "./sections/Addons";
import Enterprise from "./sections/Enterprise";
import AllPlansInclude from "./sections/AllPlansInclude";
import PricingCTA from "./sections/PricingCTA";

// Revalida cada hora para que la promo caduque sola sin necesidad de redesplegar
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Precios y Planes",
  description: "25% de descuento en planes anuales hasta el 10 de septiembre. Descubre nuestros planes de gestión inmobiliaria para parcelaciones. Desde proyectos pequeños hasta empresas constructoras. Implementación y soporte incluidos.",
  openGraph: {
    title: "Planes y Precios - Parcy Digital",
    description: "25% de descuento en planes anuales hasta el 10 de septiembre. Planes flexibles para gestión de parcelaciones. Desde proyectos pequeños hasta empresas constructoras.",
    url: "https://parcydigital.com/pricing",
  },
  alternates: {
    canonical: "https://parcydigital.com/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Header />
      <HeroPricing />
      <PromoAnual />
      <PricingPlans />
      <Addons />
      <Enterprise />
      <AllPlansInclude />
      <PricingCTA />
      <Footer />
    </>
  );
}
