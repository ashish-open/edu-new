import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

const ConsultancyBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange to-orange/80">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-orange-foreground">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-orange-foreground/10 p-3 rounded-full">
              <Lightbulb className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-2">
                Career Counselling Services
              </h2>
              <p className="text-lg font-inter opacity-95">
                Get expert guidance to choose the best course in India or Abroad. Make informed decisions for your future.
              </p>
            </div>
          </div>
          <Link to="/consultancy">
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Book Counselling
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyBanner;
