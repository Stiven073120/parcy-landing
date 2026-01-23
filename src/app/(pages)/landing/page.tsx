import Header from "@/components/layout/Header";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Features from "./sections/Features";
import Differentiators from "./sections/Differentiators";
import HowItWorks from "./sections/HowItWorks";
import FinalCTA from "./sections/FinalCTA";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Differentiators />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}