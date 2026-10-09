import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/sections/LegalHero";
import DataDeletionContent from "./sections/DataDeletionContent";

export const metadata: Metadata = {
  title: "Eliminación de Datos",
  description:
    "Instrucciones paso a paso para solicitar la eliminación de tus datos personales en Parcy Digital, incluidos los obtenidos a través de la integración con WhatsApp Business de Meta.",
  openGraph: {
    title: "Eliminación de Datos - Parcy Digital",
    description:
      "Cómo solicitar que Parcy Digital elimine tus datos personales y en qué plazos lo hacemos.",
    url: "https://parcydigital.com/data-deletion",
  },
  alternates: {
    canonical: "https://parcydigital.com/data-deletion",
  },
};

export default function DataDeletion() {
  return (
    <>
      <Header />
      <LegalHero
        current="data-deletion"
        eyebrow="Legal"
        title={
          <>
            Cómo <span className="text-brand-600">eliminar tus datos</span> de Parcy
          </>
        }
        description="Instrucciones claras para solicitar el borrado de tu información personal, qué eliminamos, qué debemos conservar por ley y en cuánto tiempo lo hacemos."
      />
      <DataDeletionContent />
      <Footer />
    </>
  );
}
