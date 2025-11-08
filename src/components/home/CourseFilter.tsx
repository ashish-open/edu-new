import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  "MBBS", "BDS", "BSc Nursing", "BSc MLT", "Pharmacy", "BPT", 
  "BBA", "MBA", "BSc Radiology", "Diploma MLT", "Diploma Nursing Assistant",
  "BSc Optometry", "BAMS", "BHMS"
];

const CourseFilter = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
            Find Your Course
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Explore our wide range of programs
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {courses.map((course) => (
            <Link key={course} to="/courses">
              <Button 
                variant="outline" 
                className="font-inter hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {course}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFilter;
