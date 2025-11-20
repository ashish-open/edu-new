import * as React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Building2, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Heart,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface Feature {
  id: string | number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: "primary" | "accent" | "orange" | "magenta";
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  className?: string;
}

const FeatureCard = ({ feature, index, className }: FeatureCardProps) => {
  const Icon = feature.icon;
  const colorClass = feature.color || "primary";
  
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    orange: "bg-orange/10 text-orange",
    magenta: "bg-magenta/10 text-magenta",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("h-full", className)}
    >
      <Card className="bg-white border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className={cn("p-3 rounded-lg w-fit mb-4", colorMap[colorClass])}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-zonapro font-hairline text-secondary mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground font-zonapro flex-1">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface FeatureCardsGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FeatureCardsGrid = ({
  features,
  title = "Why Choose Us",
  subtitle = "Discover what makes us the preferred choice for quality education",
  className,
}: FeatureCardsGridProps) => {
  return (
    <section className={cn("w-full bg-background py-16", className)}>
      <div className="container mx-auto px-4 max-w-[1220px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-zonapro font-semibold text-secondary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground font-zonapro"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default features data
const defaultFeatures: Feature[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from experienced professionals and industry experts who bring real-world knowledge to the classroom.",
    color: "primary",
  },
  {
    id: 2,
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art laboratories, well-equipped classrooms, and modern facilities for hands-on learning.",
    color: "accent",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Comprehensive placement support with industry connections and career guidance to help you succeed.",
    color: "orange",
  },
  {
    id: 4,
    icon: Award,
    title: "Recognized Programs",
    description: "All our courses are recognized and accredited, ensuring your qualifications are valued by employers.",
    color: "magenta",
  },
  {
    id: 5,
    icon: Users,
    title: "Student Support",
    description: "Dedicated support services including counseling, mentorship, and academic assistance throughout your journey.",
    color: "primary",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Career Growth",
    description: "Programs designed to enhance your career prospects with practical skills and industry-relevant curriculum.",
    color: "accent",
  },
];

const FeatureCards = () => {
  return <FeatureCardsGrid features={defaultFeatures} />;
};

export default FeatureCards;

