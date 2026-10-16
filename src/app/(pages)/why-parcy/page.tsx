import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroWhy from "./sections/HeroWhy";
import SpecializedSolution from "./sections/SpecializedSolution";
import KeyBenefits from "./sections/KeyBenefits";
import UseCases from "./sections/UseCases";
import CompetitiveAdvantages from "./sections/CompetitiveAdvantages";
import WhyNow from "./sections/WhyNow";

export const metadata: Metadata = {
  title: "¿Por qué Parcy?",
  description:
    "Por qué Parcy Digital es el CRM especializado en vender proyectos inmobiliarios por disponibilidad: beneficios, casos de uso y ventajas frente a un CRM genérico adaptado.",
  openGraph: {
    title: "¿Por qué elegir Parcy Digital?",
    description:
      "El CRM que entiende tu proyecto: unidades, disponibilidad, ventas y equipo en un solo lugar.",
    url: "https://parcydigital.com/why-parcy",
  },
  alternates: {
    canonical: "https://parcydigital.com/why-parcy",
  },
};

export default function WhyParcy() {
  return (
    <>
      <Header />
      <main>
        <HeroWhy />
        <SpecializedSolution />
        <KeyBenefits />
        <UseCases />
        <CompetitiveAdvantages />
        <WhyNow />
      </main>
      <Footer />
    </>
  );
}
