import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp, Lightbulb, ArrowRight, Phone, MessageCircle, GraduationCap, Wrench, BookOpen, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/Assets-02.png";
import "./Consultancy.css";

const services = [
  {
    icon: Lightbulb,
    title: "Career Counselling",
    description: "One-on-one guidance to identify your strengths and choose the perfect career path in medical or non-medical fields."
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

// Comprehensive course list organized by streams
const courseCategories = [
  {
    stream: "Medical",
    icon: GraduationCap,
    courses: [
      { id: 1, name: "MBBS", subtext: "" },
      { id: 2, name: "BDS", subtext: "" },
      { id: 3, name: "BAMS", subtext: "" },
      { id: 4, name: "BHMS", subtext: "" },
      { id: 5, name: "NURSING", subtext: "BSC, MSC" },
      { id: 6, name: "PHARMACY", subtext: "PHARM D, B PHARM" },
      { id: 7, name: "BPT", subtext: "PHYSIOTHERAPY" },
      { id: 8, name: "BOT", subtext: "OCCUPATIONAL THERAPY" },
      { id: 9, name: "BASLP", subtext: "" },
      { id: 10, name: "BSC RADIOLOGY", subtext: "" },
      { id: 11, name: "BSC ANESTHESIA", subtext: "" },
      { id: 12, name: "BSC MLT", subtext: "" },
      { id: 13, name: "BSC OPTOMETRY", subtext: "" },
    ]
  },
  {
    stream: "Engineering",
    icon: Wrench,
    courses: [
      { id: 14, name: "ENGINEERING", subtext: "ALL BRANCHES" },
    ]
  },
  {
    stream: "Arts and Science",
    icon: BookOpen,
    courses: [
      { id: 15, name: "BCA, MCA", subtext: "" },
      { id: 16, name: "BSW, MSW", subtext: "" },
      { id: 17, name: "BSC AGRICULTURE", subtext: "" },
      { id: 18, name: "BEd", subtext: "" },
      { id: 19, name: "BA MULTIMEDIA", subtext: "& GRAPHIC DESIGNING" },
      { id: 20, name: "FASHION DESIGNING", subtext: "& FASHION PHOTOGRAPHY" },
      { id: 21, name: "FORENSIC SCIENCE", subtext: "" },
      { id: 22, name: "BBA, MBA", subtext: "" },
      { id: 23, name: "BHM", subtext: "HOTEL MANAGEMENT" },
      { id: 24, name: "AVIATION LOGISTICS", subtext: "& SUPPLY CHAIN MANAGEMENT" },
      { id: 25, name: "CA, CMA, ACCA", subtext: "" },
      { id: 26, name: "LLB, LLM", subtext: "" },
      { id: 27, name: "IAS & IPS", subtext: "COACHING" },
    ]
  },
  {
    stream: "Diploma",
    icon: FileText,
    courses: [
      { id: 28, name: "D PHARM", subtext: "" },
      { id: 29, name: "GNM", subtext: "GENERAL NURSING & MIDWIFERY" },
      { id: 30, name: "PC.BSC", subtext: "POST BASIC BSC NURSING" },
    ]
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
                <span className="text-sm font-zonapro font-semibold">CONFIDENCE EDUCATIONAL CONSULTANCY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-zonapro font-hairline mb-4">
                Expert Career Counselling & Admission Guidance
              </h1>
              <p className="text-lg md:text-xl opacity-95 font-zonapro">
                BSc Nursing, Pharmacy, General Nursing, Engineering, including all courses, admission in Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                Our Consultancy Services
              </h2>
              <p className="text-lg text-muted-foreground font-zonapro">
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
                      <h3 className="text-lg font-zonapro font-hairline mb-2 text-secondary">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-zonapro">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Courses Accordion Section - Compact Design */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                Available Courses
              </h2>
              <p className="text-lg text-muted-foreground font-zonapro">
                Click on any stream to explore courses. Expand to see all available programs.
              </p>
            </div>

            {/* Compact Accordion Design */}
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {courseCategories.map((category, categoryIndex) => {
                  const StreamIcon = category.icon;
                  return (
                    <motion.div
                      key={category.stream}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                    >
                      <AccordionItem
                        value={`stream-${categoryIndex}`}
                        className="bg-white rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                          <div className="flex items-center gap-4 w-full">
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <StreamIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 text-left">
                              <h3 className="text-xl md:text-2xl font-zonapro font-hairline text-secondary">
                                {category.stream}
                              </h3>
                              <p className="text-sm text-muted-foreground font-zonapro mt-1">
                                {category.courses.length} {category.courses.length === 1 ? 'course' : 'courses'} available
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
                            {category.courses.map((course, index) => (
                              <motion.a
                                key={course.id}
                                href="https://wa.me/919694002002"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: index * 0.03 }}
                                className="block"
                              >
                                <div className="bg-muted text-secondary border-2 border-gray-200 p-3 rounded-lg hover:shadow-lg hover:border-primary hover:-translate-y-0.5 transition-all duration-300 cursor-pointer h-full flex flex-col justify-center min-h-[100px] group">
                                  <h4 className="font-zonapro font-bold text-xs md:text-sm uppercase tracking-wide leading-tight mb-1 group-hover:text-primary transition-colors">
                                    {course.name}
                                  </h4>
                                  {course.subtext && (
                                    <p className="font-zonapro font-semibold text-[10px] md:text-xs text-muted-foreground mt-1">
                                      {course.subtext}
                                    </p>
                                  )}
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Why Choose Our Consultancy */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-8 text-center">
              Why Choose Confidence Educational Consultancy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Experienced Counsellors</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      Our team has years of experience in educational counselling and admission guidance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Personalised Approach</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      Every student receives customized guidance based on their unique goals and circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Transparent Process</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      Complete transparency in fees, procedures, and recommendations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Wide Network</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      Connections with top colleges and universities in India and abroad.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Post-Admission Support</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      We stay with you even after admission to ensure smooth transition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 consultancy-check-icon flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-zonapro font-hairline mb-1">Success Track Record</h3>
                    <p className="text-sm text-muted-foreground font-zonapro">
                      Hundreds of students successfully placed in top institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-8 text-center">
              Popular Study Destinations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Kerala", "Karnataka", "Tamilnadu", "Andrapradesh", "Mysore", "Coimbatore", "Banglore", "Chennai", "Mumbai", "Delhi"].map((country) => (
                <Card key={country}>
                  <CardContent className="p-6 text-center">
                    <p className="font-zonapro font-semibold text-secondary">{country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 consultancy-cta text-white">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline mb-4">
              Book Your Free Counselling Session
            </h2>
            <p className="text-lg font-zonapro mb-8 opacity-95 max-w-2xl mx-auto">
              Get expert guidance to choose the right course and college. Our counsellors are ready to help you make the best decision for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919694002002">
                <Button size="lg" className="bg-white hover:bg-gray-50 text-secondary border-2 border-white/20 w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 9694002002</span>
                </Button>
              </a>
              <a href="https://wa.me/919694002002" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Now</span>
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
