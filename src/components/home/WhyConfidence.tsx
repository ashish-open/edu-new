import { Users, Building2, TrendingUp, Wifi, Camera, Home } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Personality Development Training",
    description: "Build soft skills and confidence to excel in your professional journey."
  },
  {
    icon: Users,
    title: "Mock Interview Training",
    description: "Prepare with confidence through our comprehensive interview preparation program."
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "24/7 security monitoring ensuring a safe and secure learning environment."
  },
  {
    icon: Wifi,
    title: "Wi-Fi Facility",
    description: "High-speed internet connectivity across campus for seamless learning."
  },
  {
    icon: Building2,
    title: "Adequate Classrooms",
    description: "State-of-the-art infrastructure for hands-on learning experience."
  },
  {
    icon: Home,
    title: "Separate Hostel Facility for Boys & Girls",
    description: "Safe and comfortable accommodation with modern amenities."
  }
];

const WhyConfidence = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Header Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <h2 className="text-2xl md:text-3xl font-zonapro font-hairline text-center uppercase tracking-wide text-secondary">
            Our Specialities
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-zonapro font-hairline mb-2 text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-zonapro leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConfidence;
