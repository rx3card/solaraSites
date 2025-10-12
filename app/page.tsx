import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GuaranteeBand } from "@/components/GuaranteeBand";

// Lazy load below-the-fold components for better performance
const StatsBand = dynamic(() => import('@/components/StatsBand').then(mod => ({ default: mod.StatsBand })), {
  loading: () => <div className="h-32 bg-transparent" />,
});

const SuccessCasesSection = dynamic(() => import('@/components/SuccessCasesSection').then(mod => ({ default: mod.SuccessCasesSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection').then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-screen bg-transparent" />,
});

const WhyUsSection = dynamic(() => import('@/components/WhyUsSection').then(mod => ({ default: mod.WhyUsSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })), {
  loading: () => <div className="h-screen bg-transparent" />,
});

const PricingSection = dynamic(() => import('@/components/PricingSection').then(mod => ({ default: mod.PricingSection })), {
  loading: () => <div className="h-screen bg-transparent" />,
});

const ProcessSection = dynamic(() => import('@/components/ProcessSection').then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const ContactSection = dynamic(() => import('@/components/ContactSection').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-screen bg-transparent" />,
});

const FAQSection = dynamic(() => import('@/components/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-64 bg-transparent" />,
});

const StickyCTA = dynamic(() => import('@/components/StickyCTA').then(mod => ({ default: mod.StickyCTA })), {
  loading: () => null,
});

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
