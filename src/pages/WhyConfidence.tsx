import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Building2, TrendingUp, Award, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: CheckCircle,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell ensuring every graduate gets the right opportunity to kickstart their career in leading healthcare organizations."
  },
  {
    icon: Users,
    title: "Mock Interview Training",
    description: "Comprehensive interview preparation program with industry experts to build confidence and communication skills."
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art classrooms, well-equipped labs, library, and practical training facilities for hands-on learning."
  },
  {
    icon: TrendingUp,
    title: "Personality Development",
    description: "Holistic development programs focusing on soft skills, leadership, and professional etiquette."
  },
  {
    icon: Award,
    title: "Recognized & Affiliated",
    description: "All programs are recognized and affiliated with reputed universities and regulatory bodies."
  },
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from industry experts and qualified professionals with extensive teaching and practical experience."
  },
  {
    icon: Briefcase,
    title: "Industry Connections",
    description: "Strong network with hospitals, clinics, labs, and healthcare institutions across India for internships and placements."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Updated syllabus aligned with industry requirements, combining theoretical knowledge with practical skills."
  }
];

const WhyConfidencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
              Why Choose Confidence Group of Institutions
            </h1>
            <p className="text-lg md:text-xl opacity-95 font-inter max-w-3xl">
              Your success is our commitment. We provide more than just education - we build careers and transform lives.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-secondary">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-12 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">100%</p>
                <p className="text-sm font-inter text-muted-foreground">Placement Support</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-poppins font-bold text-accent mb-2">500+</p>
                <p className="text-sm font-inter text-muted-foreground">Students Placed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-poppins font-bold text-orange mb-2">15+</p>
                <p className="text-sm font-inter text-muted-foreground">Programs Offered</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-2">2</p>
                <p className="text-sm font-inter text-muted-foreground">Modern Campuses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Our Approach to Student Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-poppins font-bold text-primary mb-3">01</div>
                  <h3 className="text-xl font-poppins font-semibold mb-2">Quality Education</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Updated curriculum, experienced faculty, and practical training to ensure students are industry-ready from day one.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-poppins font-bold text-accent mb-3">02</div>
                  <h3 className="text-xl font-poppins font-semibold mb-2">Skill Development</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Focus on both technical and soft skills through workshops, seminars, and personality development programs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-poppins font-bold text-orange mb-3">03</div>
                  <h3 className="text-xl font-poppins font-semibold mb-2">Career Support</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Placement assistance, interview preparation, and continuous support even after course completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-16 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Join Hundreds of Successful Alumni
            </h2>
            <p className="text-lg font-inter mb-8 opacity-95 max-w-2xl mx-auto">
              Our students are working in leading hospitals, labs, and healthcare institutions across India and abroad.
            </p>
            <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Start Your Journey Today
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyConfidencePage;
