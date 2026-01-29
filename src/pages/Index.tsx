import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ChatBot from "@/components/chat/ChatBot";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ZoomParallaxSection from "@/components/home/ZoomParallaxSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandsSection from "@/components/home/BrandsSection";
import KeyPromisesSection from "@/components/home/KeyPromisesSection";
import CTASection from "@/components/home/CTASection";
import MapSection from "@/components/home/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ZoomParallaxSection />
        <WhyChooseUs />
        <BrandsSection />
        <KeyPromisesSection />
        <CTASection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Index;
