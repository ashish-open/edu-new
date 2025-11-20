import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/home/Hero";
import CampusGallery from "@/components/home/CampusGallery";
import Statistics from "@/components/home/Statistics";
import WhyConfidence from "@/components/home/WhyConfidence";
import FeatureCards from "@/components/home/FeatureCards";
import ParamedicalSpotlight from "@/components/home/ParamedicalSpotlight";
import StudentTestimonials from "@/components/home/StudentTestimonials";
import ConsultancyBanner from "@/components/home/ConsultancyBanner";
import FAQ from "@/components/home/FAQ";
import ContactBlock from "@/components/home/ContactBlock";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CampusGallery />
        <Statistics />
        <WhyConfidence />
        <FeatureCards />
        <ParamedicalSpotlight />
        <StudentTestimonials />
        <ConsultancyBanner />
        <FAQ />
        <ContactBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
