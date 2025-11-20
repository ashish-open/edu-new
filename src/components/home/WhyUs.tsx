import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Users, 
  Building2, 
  TrendingUp, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen,
  Target,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const whyUsFeatures = [
  {
    icon: CheckCircle,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell ensuring every graduate gets the right opportunity to kickstart their career in leading healthcare organizations.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Mock Interview Training",
    description: "Comprehensive interview preparation program with industry experts to build confidence and communication skills.",
    color: "accent"
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art classrooms, well-equipped labs, library, and practical training facilities for hands-on learning.",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "Personality Development",
    description: "Holistic development programs focusing on soft skills, leadership, and professional etiquette.",
    color: "magenta"
  },
  {
    icon: Award,
    title: "Recognized & Affiliated",
    description: "All programs are recognized and affiliated with reputed universities and regulatory bodies.",
    color: "primary"
  },
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from industry experts and qualified professionals with extensive teaching and practical experience.",
    color: "accent"
  },
  {
    icon: Briefcase,
    title: "Industry Connections",
    description: "Strong network with hospitals, clinics, labs, and healthcare institutions across India for internships and placements.",
    color: "orange"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Updated syllabus aligned with industry requirements, combining theoretical knowledge with practical skills.",
    color: "magenta"
  }
];

const approachSteps = [
  {
    number: "01",
    title: "Quality Education",
    description: "Updated curriculum, experienced faculty, and practical training to ensure students are industry-ready from day one.",
    color: "primary"
  },
  {
    number: "02",
    title: "Skill Development",
    description: "Focus on both technical and soft skills through workshops, seminars, and personality development programs.",
    color: "accent"
  },
  {
    number: "03",
    title: "Career Support",
    description: "Placement assistance, interview preparation, and continuous support even after course completion.",
    color: "orange"
  }
];

const WhyUs = () => {
  const colorMap = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    orange: "bg-orange/10 text-orange border-orange/20",
    magenta: "bg-magenta/10 text-magenta border-magenta/20",
  };

  return (
    <>
      {/* Hero Section */}
      <section id="why-us" className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-zonapro font-hairline mb-6">
              Why Choose Confidence Group of Institutions
            </h2>
            <p className="text-lg md:text-xl opacity-95 font-zonapro max-w-3xl mx-auto leading-relaxed">
              Your success is our commitment. We provide more than just education - we build careers and transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${colorMap[feature.color as keyof typeof colorMap]} mb-4`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-zonapro font-hairline mb-2 text-secondary">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-zonapro leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
              Our Approach to Student Success
            </h2>
            <p className="text-lg text-muted-foreground font-zonapro max-w-2xl mx-auto">
              A comprehensive three-step process designed to ensure your success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`text-4xl font-zonapro font-bold mb-3 ${
                      step.color === "primary" ? "text-primary" :
                      step.color === "accent" ? "text-accent" :
                      "text-orange"
                    }`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-zonapro font-hairline mb-2 text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-sm font-zonapro text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
        <div className="container mx-auto px-4 max-w-[1220px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline mb-4">
              Join Hundreds of Successful Alumni
            </h2>
            <p className="text-lg font-zonapro mb-8 opacity-95 max-w-2xl mx-auto">
              Our students are working in leading hospitals, labs, and healthcare institutions across India and abroad.
            </p>
            <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="font-zonapro">
                Start Your Journey Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;

