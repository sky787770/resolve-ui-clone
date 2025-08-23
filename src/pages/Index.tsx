import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import ProcessSection from "@/components/ProcessSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <VideoSection />
      <ProcessSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
