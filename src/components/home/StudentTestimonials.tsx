import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export interface StudentTestimonial {
  id: string | number;
  name: string;
  courseName: string;
  photo?: string;
  rating: number;
  testimonial: string;
}

interface TestimonialCardProps {
  testimonial: StudentTestimonial;
  className?: string;
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "overflow-hidden bg-white border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col",
          className
        )}
      >
        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Header: Photo and Name */}
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-14 w-14 border-2 border-primary/10">
              {testimonial.photo ? (
                <AvatarImage src={testimonial.photo} alt={testimonial.name} />
              ) : null}
              <AvatarFallback className="bg-primary/10 text-primary font-semibold font-poppins">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-secondary leading-tight font-poppins">
                {testimonial.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 font-inter">
                {testimonial.courseName}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(testimonial.rating)
                      ? "text-yellow fill-yellow"
                      : "text-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-secondary font-inter">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-base text-muted-foreground leading-relaxed font-inter flex-1">
            "{testimonial.testimonial}"
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface StudentTestimonialsGridProps {
  testimonials: StudentTestimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const StudentTestimonialsGrid = ({
  testimonials,
  title = "What Our Students Say",
  subtitle = "Hear from students who have transformed their careers through our courses",
  className,
}: StudentTestimonialsGridProps) => {
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
            className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground font-inter"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default testimonials data for educational institution
const defaultTestimonials: StudentTestimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    courseName: "BSc Nursing",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    testimonial: "The BSc Nursing program at Confidence has been life-changing. The faculty is experienced, the infrastructure is modern, and the placement assistance helped me secure a position at a leading hospital. Highly recommend!",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    courseName: "BSc Medical Lab Technology",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    testimonial: "The hands-on training and modern lab facilities made learning medical lab technology incredibly practical. The course curriculum is comprehensive and aligned with industry standards. Great support from instructors!",
  },
  {
    id: 3,
    name: "Anjali Patel",
    courseName: "BPT (Physiotherapy)",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    testimonial: "The Physiotherapy program provided excellent clinical exposure and practical training. The faculty members are experts in their field and the placement cell helped me get multiple job offers. Thank you Confidence!",
  },
  {
    id: 4,
    name: "Vikram Singh",
    courseName: "Pharmacy (B.Pharm)",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    testimonial: "The Pharmacy course structure is perfect for building a strong foundation. The lab facilities are well-equipped and the industry visits provided valuable insights. I'm now working at a reputed pharmaceutical company.",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    courseName: "BSc Radiology",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    testimonial: "The Radiology program gave me practical skills I could immediately apply. The imaging equipment is state-of-the-art and the clinical training was comprehensive. The placement assistance was excellent!",
  },
  {
    id: 6,
    name: "Amit Desai",
    courseName: "MBBS",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    testimonial: "The best investment I've made in my medical career. The MBBS program is comprehensive, the faculty are experienced doctors, and the clinical rotations provided excellent exposure. Highly recommend Confidence Group!",
  },
];

const StudentTestimonials = () => {
  return <StudentTestimonialsGrid testimonials={defaultTestimonials} />;
};

export default StudentTestimonials;

