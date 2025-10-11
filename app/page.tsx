import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GuaranteeBand } from "@/components/GuaranteeBand";
import { StatsBand } from "@/components/StatsBand";
import { SuccessCasesSection } from "@/components/SuccessCasesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24 md:pb-0">
        <HeroSection />
        <GuaranteeBand />
        <StatsBand />
        <SuccessCasesSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
