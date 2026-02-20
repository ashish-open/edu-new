import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  "BSc Nursing", "MSc Nursing", "GNM Nursing", "PCBSc Nursing",
  "Diploma Nursing Care Assistant", "Diploma Physiotherapy",
  "B.Pharm", "M.Pharm", "D.Pharm", "Pharm.D",
  "BA", "BBA", "B.Com", "BJMC",
  "B.Sc", "BCA", "B.Sc IT"
];

const CourseFilter = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
            Find Your Course
          </h2>
          <p className="text-lg text-muted-foreground font-zonapro">
            Explore our wide range of programs
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {courses.map((course) => (
            <Link key={course} to="/consultancy">
              <Button
                variant="outline"
                className="font-zonapro hover:bg-primary hover:text-primary-foreground transition-all"
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
