import { Metadata } from "next";
import Header from "@/components/layout/Header";

import HeroWhy from "./sections/HeroWhy";
import SpecializedSolution from "./sections/SpecializedSolution";
import KeyBenefits from "./sections/KeyBenefits";
import UseCases from "./sections/UseCases";
import CompetitiveAdvantages from "./sections/CompetitiveAdvantages";
import WhyNow from "./sections/WhyNow";

export const metadata: Metadata = {
  title: "¿Por qué Parcy? - Ventajas y Beneficios",
  description: "Descubre por qué Parcy Digital es la solución especializada para gestión de parcelaciones. Beneficios, casos de uso y ventajas competitivas frente a CRM genéricos.",
  openGraph: {
    title: "¿Por qué elegir Parcy Digital?",
    description: "La solución especializada en gestión de parcelaciones que conecta proyecto, ventas y gestión en un solo lugar.",
    url: "https://parcydigital.com/landing/why-parcy",
  },
  alternates: {
    canonical: "https://parcydigital.com/landing/why-parcy",
  },
};

export default function WhyParcy() {
  return (
    <>
      <Header />
      <HeroWhy />
      <SpecializedSolution />
      <KeyBenefits />
      <UseCases />
      <CompetitiveAdvantages />
      <WhyNow />
    </>
  );
}
