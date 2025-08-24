import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import ProcessSection from "@/components/ProcessSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";
import DemoChatbotsSection from "@/components/DemoChatbotsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import GetThingsDoneSection from "@/components/GetThingsDoneSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <VideoSection />
      <ProcessSection />
      <GetStartedSection />
      <FeaturesSection />
      <DemoChatbotsSection />
      <GetThingsDoneSection />
      <PricingSection />
      <IntegrationsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
