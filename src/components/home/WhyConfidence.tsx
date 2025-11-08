import { CheckCircle, Users, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "100% Placement Assistance",
    description: "We ensure every student gets the right opportunity to kickstart their career."
  },
  {
    icon: Users,
    title: "Mock Interview Training",
    description: "Prepare with confidence through our comprehensive interview preparation program."
  },
  {
    icon: Building2,
    title: "Adequate Classrooms & Labs",
    description: "State-of-the-art infrastructure for hands-on learning experience."
  },
  {
    icon: TrendingUp,
    title: "Personality Development Support",
    description: "Build soft skills and confidence to excel in your professional journey."
  }
];

const WhyConfidence = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
            Why Choose Confidence
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Your success is our commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
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
  );
};

export default WhyConfidence;
