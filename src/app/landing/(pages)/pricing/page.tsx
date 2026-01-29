import Header from "@/components/layout/Header";
import HeroPricing from "./sections/HeroPricing";
import PricingPlans from "./sections/PricingPlans";
import Addons from "./sections/Addons";
import Enterprise from "./sections/Enterprise";
import AllPlansInclude from "./sections/AllPlansInclude";
import PricingCTA from "./sections/PricingCTA";

export default function Pricing() {
  return (
    <>
      <Header />
      <HeroPricing />
      <PricingPlans />
      <Addons />
      <Enterprise />
      <AllPlansInclude />
      <PricingCTA />
    </>
  );
}
