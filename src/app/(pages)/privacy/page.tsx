import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/sections/LegalHero";
import PrivacyPolicy from "./sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos",
  description:
    "Conoce cómo Parcy Digital recolecta, usa, protege y elimina tus datos personales, incluidos los tratados a través de la integración con WhatsApp Business de Meta. Conforme a la Ley 1581 de 2012.",
  openGraph: {
    title: "Política de Privacidad - Parcy Digital",
    description:
      "Cómo Parcy Digital trata y protege los datos personales de visitantes, usuarios de la plataforma e integraciones con Meta.",
    url: "https://parcydigital.com/privacy",
  },
  alternates: {
    canonical: "https://parcydigital.com/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <LegalHero
        current="privacy"
        eyebrow="Legal"
        title={
          <>
            Política de Privacidad y{" "}
            <span className="text-celeste">Tratamiento de Datos</span>
          </>
        }
        description="Explicamos con claridad qué datos recolectamos, para qué los usamos, con quién los compartimos y cómo puedes ejercer tus derechos, incluida la eliminación de tus datos."
      />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
