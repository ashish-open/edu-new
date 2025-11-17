import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Users, Award, TrendingUp, Lightbulb } from "lucide-react";
import heroImage from "@/assets/red-consultancy.png";
import "./Consultancy.css";

const services = [
  {
    icon: Lightbulb,
    title: "Career Counselling",
    description: "One-on-one guidance to identify your strengths and choose the perfect career path in medical or non-medical fields."
  },
  {
    icon: Globe,
    title: "Study Abroad Guidance",
    description: "Expert advice for pursuing MBBS, BDS, and other programs in top international universities with affordable fees."
  },
  {
    icon: Award,
    title: "Course Selection",
    description: "Comprehensive information about eligibility, admission process, fee structure, and career prospects for various courses."
  },
  {
    icon: Users,
    title: "Admission Assistance",
    description: "End-to-end support for application, documentation, entrance exam preparation, and college admissions."
  },
  {
    icon: TrendingUp,
    title: "Career Planning",
    description: "Strategic planning for long-term career growth with insights on market trends and opportunities."
  },
  {
    icon: CheckCircle,
    title: "College Verification",
    description: "Guidance to choose only recognized and accredited institutions in India and abroad."
  }
];

const Consultancy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="consultancy-hero text-white py-16 md:py-24"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-inter font-semibold">CONFIDENCE EDUCATIONAL CONSULTANCY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
                Expert Career Counselling & Admission Guidance
              </h1>
              <p className="text-lg md:text-xl opacity-95 font-inter">
                Make informed decisions about your educational journey with personalized guidance from experienced counsellors.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
                Our Consultancy Services
              </h2>
              <p className="text-lg text-muted-foreground font-inter">
                Comprehensive support for your educational and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full consultancy-icon-bg mb-4">
                        <Icon className="h-6 w-6 consultancy-icon" />
                      </div>
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-secondary">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Consultancy */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Why Choose Confidence Consultancy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Experienced Counsellors</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Our team has years of experience in educational counselling and admission guidance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Personalized Approach</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Every student receives customized guidance based on their unique goals and circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Transparent Process</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Complete transparency in fees, procedures, and recommendations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Wide Network</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Connections with top colleges and universities in India and abroad.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Post-Admission Support</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      We stay with you even after admission to ensure smooth transition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Success Track Record</h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Hundreds of students successfully placed in top institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Popular Study Destinations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["India", "Russia", "Ukraine", "Kazakhstan", "China", "Philippines", "Bangladesh", "Kyrgyzstan"].map((country) => (
                <Card key={country}>
                  <CardContent className="p-6 text-center">
                    <p className="font-poppins font-semibold text-secondary">{country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 consultancy-cta text-white">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Book Your Free Counselling Session
            </h2>
            <p className="text-lg font-inter mb-8 opacity-95 max-w-2xl mx-auto">
              Get expert guidance to choose the right course and college. Our counsellors are ready to help you make the best decision for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919605894644">
                <Button size="lg" variant="secondary">
                  Call +91 9605894644
                </Button>
              </a>
              <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="consultancy-cta-button">
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Consultancy;
