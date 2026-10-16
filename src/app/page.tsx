import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import PlanoInteractivo from "./sections/PlanoInteractivo";
import ProductTour from "./sections/ProductTour";
import Flow from "./sections/Flow";
import Capabilities from "./sections/Capabilities";
import Comparison from "./sections/Comparison";
import FAQ from "./sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

// Revalida cada hora para que la promo caduque sola sin necesidad de redesplegar
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "CRM para vender proyectos inmobiliarios por disponibilidad",
  description:
    "El CRM para vender por disponibilidad. Inventario de unidades en tiempo real, reservas con cronómetro, aprobación de ventas y reportes. Para vivienda en altura, parcelaciones y urbanismos en Colombia.",
  openGraph: {
    title: "Parcy Digital, el CRM para vender por disponibilidad",
    description:
      "Inventario de unidades en tiempo real, reservas, ventas y equipo en un solo lugar.",
    url: "https://parcydigital.com",
    images: [
      {
        url: "https://parcydigital.com/images/picture_1.png",
        width: 1742,
        height: 907,
        alt: "Parcy Digital: plano del proyecto y totales de unidades",
      },
    ],
  },
  alternates: {
    canonical: "https://parcydigital.com",
  },
};

/*
  Ritmo de la home: azul profundo → blanco → azul pálido → blanco → azul
  profundo → azul pálido → blanco → azul pálido → azul profundo (contacto y pie).
*/
export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <PlanoInteractivo />
        <ProductTour />
        <Flow />
        <Capabilities />
        <Comparison />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
