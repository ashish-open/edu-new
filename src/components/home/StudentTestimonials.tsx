import * as React from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

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
    <div className={cn("flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0 px-3", className)}>
      <Card
        className={cn(
          "overflow-hidden bg-white border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
        )}
      >
        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Header: Photo and Name */}
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-14 w-14 border-2 border-primary/10">
              {testimonial.photo ? (
                <AvatarImage src={testimonial.photo} alt={testimonial.name} />
              ) : null}
              <AvatarFallback className="bg-primary/10 text-primary font-semibold font-zonapro">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-hairline text-lg text-secondary leading-tight font-zonapro">
                {testimonial.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 font-zonapro">
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
            <span className="text-sm font-medium text-secondary font-zonapro">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-base text-muted-foreground leading-relaxed font-zonapro flex-1">
            "{testimonial.testimonial}"
          </blockquote>
        </CardContent>
      </Card>
    </div>
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

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
            className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4"
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

        {/* Carousel Container */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
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
