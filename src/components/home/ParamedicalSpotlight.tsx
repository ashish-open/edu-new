import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, Award } from "lucide-react";

const ParamedicalSpotlight = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent to-accent/80">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-accent-foreground">
            <div className="inline-block bg-accent-foreground/10 px-4 py-2 rounded-full">
              <span className="text-sm font-inter font-semibold">PARAMEDICAL COLLEGE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold">
              Start Your Healthcare Career
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="font-inter text-lg">No Age Limit - Apply Anytime</p>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="font-inter text-lg">Eligibility: 10th Pass</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="font-inter text-lg">Recognized Programs with Placement Support</p>
              </div>
            </div>
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="mt-4">
                Explore Paramedical Courses
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
                alt="Paramedical students in lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParamedicalSpotlight;
