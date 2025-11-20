import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, GraduationCap } from "lucide-react";

const popularCourses = [
  {
    name: "MBBS",
    eligibility: "12th with Physics, Chemistry, Biology",
    duration: "5.5 Years",
    description: "Bachelor of Medicine and Bachelor of Surgery"
  },
  {
    name: "BSc Nursing",
    eligibility: "12th with PCB or 10+2 equivalent",
    duration: "4 Years",
    description: "Bachelor of Science in Nursing"
  },
  {
    name: "BSc Medical Lab Technology",
    eligibility: "12th with PCB",
    duration: "3 Years",
    description: "Bachelor of Science in Medical Laboratory Technology"
  },
  {
    name: "Pharmacy (B.Pharm)",
    eligibility: "12th with PCB/PCM",
    duration: "4 Years",
    description: "Bachelor of Pharmacy"
  },
  {
    name: "BPT (Physiotherapy)",
    eligibility: "12th with PCB",
    duration: "4.5 Years",
    description: "Bachelor of Physiotherapy"
  },
  {
    name: "BSc Radiology",
    eligibility: "12th with PCB",
    duration: "3 Years",
    description: "Bachelor of Science in Radiology"
  }
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
            Popular Programs
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Explore our most sought-after programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <Card key={course.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-poppins font-semibold text-secondary">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {course.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-inter">
                    <span className="font-semibold">Eligibility:</span> {course.eligibility}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-inter">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/consultancy" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/consultancy">
            <Button size="lg">
              Explore All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
