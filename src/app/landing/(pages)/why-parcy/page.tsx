import Header from "@/components/layout/Header";

import HeroWhy from "./sections/HeroWhy";
import SpecializedSolution from "./sections/SpecializedSolution";
import KeyBenefits from "./sections/KeyBenefits";
import UseCases from "./sections/UseCases";
import CompetitiveAdvantages from "./sections/CompetitiveAdvantages";
import WhyNow from "./sections/WhyNow";

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
