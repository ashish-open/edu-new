import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Users, Award, TrendingUp, Lightbulb, ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/Assets-02.png";
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

// Comprehensive course list from consultancy
const consultancyCourses = [
  // Medical Courses
  { id: 1, name: "MBBS", category: "Medical", subtext: "" },
  { id: 2, name: "BDS", category: "Medical", subtext: "" },
  { id: 3, name: "BAMS", category: "Medical", subtext: "" },
  { id: 4, name: "BHMS", category: "Medical", subtext: "" },
  
  // Engineering
  { id: 5, name: "ENGINEERING", category: "Engineering", subtext: "ALL BRANCHES" },
  
  // Nursing
  { id: 6, name: "NURSING", category: "Nursing", subtext: "GNM, BSC, PC.BSC, MSC" },
  
  // Pharmacy
  { id: 7, name: "PHARMACY", category: "Pharmacy", subtext: "PHARM D, B PHARM, D PHARM" },
  
  // Allied Health
  { id: 8, name: "BPT", category: "Allied Health", subtext: "PHYSIOTHERAPY" },
  { id: 9, name: "BOT", category: "Allied Health", subtext: "OCCUPATIONAL THERAPY" },
  { id: 10, name: "BASLP", category: "Allied Health", subtext: "" },
  { id: 11, name: "BSC RADIOLOGY", category: "Allied Health", subtext: "" },
  { id: 12, name: "BSC ANESTHESIA", category: "Allied Health", subtext: "" },
  { id: 13, name: "BSC MLT", category: "Allied Health", subtext: "" },
  { id: 14, name: "BSC OPTOMETRY", category: "Allied Health", subtext: "" },
  
  // Management & Business
  { id: 15, name: "BHM", category: "Management", subtext: "HOTEL MANAGEMENT" },
  { id: 16, name: "BBA, MBA", category: "Management", subtext: "" },
  { id: 17, name: "BBA, MBA", category: "Management", subtext: "" },
  
  // Computer Science
  { id: 18, name: "BCA, MCA", category: "Computer Science", subtext: "" },
  
  // Social Work
  { id: 19, name: "BSW, MSW", category: "Social Work", subtext: "" },
  
  // Agriculture
  { id: 20, name: "BSC AGRICULTURE", category: "Agriculture", subtext: "" },
  
  // Coaching
  { id: 21, name: "IAS & IPS", category: "Coaching", subtext: "COACHING" },
  
  // Education
  { id: 22, name: "BEd", category: "Education", subtext: "" },
  
  // Fashion & Design
  { id: 23, name: "FASHION DESIGNING", category: "Design", subtext: "& FASHION PHOTOGRAPHY" },
  { id: 24, name: "BA MULTIMEDIA", category: "Design", subtext: "& GRAPHIC DESIGNING" },
  
  // Aviation & Logistics
  { id: 25, name: "AVIATION LOGISTICS", category: "Aviation", subtext: "& SUPPLY CHAIN MANAGEMENT" },
  
  // Finance & Accounting
  { id: 26, name: "CA, CMA, ACCA", category: "Finance", subtext: "" },
  
  // Law
  { id: 27, name: "LLB, LLM", category: "Law", subtext: "" },
  
  // Forensic Science
  { id: 28, name: "FORENSIC SCIENCE", category: "Science", subtext: "" },
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

        {/* Courses Grid Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                Available Courses
              </h2>
              <p className="text-lg text-muted-foreground font-zonapro">
                Explore our comprehensive range of programs across multiple disciplines
              </p>
            </div>

            {/* Course Grid - Red Cards Design */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {consultancyCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <a
                    href="https://wa.me/919605894644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white text-secondary border-2 border-gray-200 p-4 rounded-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col justify-center min-h-[120px] shadow-sm">
                      <h3 className="font-zonapro font-bold text-sm md:text-base uppercase tracking-wide leading-tight mb-1">
                        {course.name}
                      </h3>
                      {course.subtext && (
                        <p className="font-zonapro font-semibold text-xs text-muted-foreground mt-1">
                          {course.subtext}
                        </p>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* All Other Courses Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <a
                href="https://wa.me/919605894644"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white text-secondary border-2 border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm">
                  <h3 className="font-zonapro font-bold text-lg md:text-xl uppercase tracking-wide text-center">
                    ALL OTHER UG, PG, DIPLOMA COURSES
                  </h3>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Consultancy */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-8 text-center">
              Why Choose Confidence Consultancy?
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
                    <h3 className="font-zonapro font-hairline mb-1">Personalized Approach</h3>
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
              {["India", "Russia", "Ukraine", "Kazakhstan", "China", "Philippines", "Bangladesh", "Kyrgyzstan"].map((country) => (
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
              <a href="tel:+919605894644">
                <Button size="lg" className="bg-white hover:bg-gray-50 text-secondary border-2 border-white/20 w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 9605894644</span>
                </Button>
              </a>
              <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
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
