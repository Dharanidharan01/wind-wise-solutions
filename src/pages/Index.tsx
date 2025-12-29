import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ZoomParallaxSection from "@/components/home/ZoomParallaxSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandsSection from "@/components/home/BrandsSection";
import KeyPromisesSection from "@/components/home/KeyPromisesSection";
import CTASection from "@/components/home/CTASection";

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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
