import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/home/Hero";
import CourseFinder from "@/components/home/CourseFinder";
import WhyConfidence from "@/components/home/WhyConfidence";
import ParamedicalSpotlight from "@/components/home/ParamedicalSpotlight";
import ConsultancyBanner from "@/components/home/ConsultancyBanner";
import ContactBlock from "@/components/home/ContactBlock";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CourseFinder />
        <WhyConfidence />
        <ParamedicalSpotlight />
        <ConsultancyBanner />
        <ContactBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
