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
  title: "Precios y planes",
  description:
    "Planes del CRM para proyectos inmobiliarios: vivienda en altura, parcelaciones y urbanismos. Desde un primer proyecto hasta constructoras con varias empresas. Sin permanencia, implementación y soporte incluidos, precios en COP.",
  openGraph: {
    title: "Planes y precios de Parcy Digital",
    description:
      "Planes flexibles para gestionar y vender tus unidades. Sin permanencia, implementación y soporte incluidos.",
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
      <main>
        <HeroPricing />
        <PromoAnual />
        <PricingPlans />
        <Addons />
        <Enterprise />
        <AllPlansInclude />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
