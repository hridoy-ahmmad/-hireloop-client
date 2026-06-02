
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import JobDiscovery from "@/components/JobDiscovery";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <StatsSection />
      <JobDiscovery />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
