import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/sections/LegalHero";
import TermsContent from "./sections/TermsContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web y de la plataforma Parcy Digital: cuentas, planes y pagos, uso aceptable, contenido del cliente, integraciones con WhatsApp Business y responsabilidad.",
  openGraph: {
    title: "Términos y Condiciones - Parcy Digital",
    description:
      "Condiciones que regulan el uso de la plataforma Parcy Digital y sus integraciones.",
    url: "https://parcydigital.com/terms",
  },
  alternates: {
    canonical: "https://parcydigital.com/terms",
  },
};

export default function Terms() {
  return (
    <>
      <Header />
      <LegalHero
        current="terms"
        eyebrow="Legal"
        title={
          <>
            Términos y <span className="text-celeste">Condiciones</span> de uso
          </>
        }
        description="Las reglas que regulan el uso del sitio web y de la plataforma Parcy Digital, incluidas las condiciones para usar la integración con WhatsApp Business."
      />
      <TermsContent />
      <Footer />
    </>
  );
}
