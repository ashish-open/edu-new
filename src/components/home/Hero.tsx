import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Building2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
    tagline: "CONFIDENCE EDUCATION",
    heading: "Together We'll Explore New Things",
    description: "We believe everyone should have the opportunity to create progress through education.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    tagline: "CONFIDENCE EDUCATION",
    heading: "Choose the Right Course with Confidence",
    description: "Expert counselling. Recognized programs. Placement assistance.",
  },
];

const infoCards = [
  {
    icon: GraduationCap,
    title: "Graduation",
    description: "Confidence Education was established and is recognized.",
    link: "/admission",
  },
  {
    icon: Building2,
    title: "University Life",
    description: "Confidence Education was established and is recognized.",
    link: "/facilities",
  },
  {
    icon: BookOpen,
    title: "Education Services",
    description: "Confidence Education was established and is recognized.",
    link: "/courses",
  },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__viewport">
            <div className="embla__container">
              {heroSlides.map((slide, index) => (
                <div key={index} className="embla__slide relative min-w-0 flex-shrink-0 w-full h-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 max-w-[1220px]">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl space-y-6"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-sm md:text-base uppercase tracking-wider text-white/90 font-inter"
                        >
                          {slide.tagline}
                        </motion.p>
                        <motion.h1
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white leading-tight"
                        >
                          {slide.heading}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="text-lg md:text-xl text-white/90 font-inter max-w-xl"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1 }}
                        >
                          <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-inter">
                              Find Courses
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Info Cards Section */}
      <div className="relative -mt-20 md:-mt-24 lg:-mt-32 z-20">
        <div className="container mx-auto px-4 max-w-[1220px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-secondary">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      {card.description}
                    </p>
                    <a
                      href={card.link}
                      className="text-primary font-inter font-medium hover:underline inline-flex items-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .embla {
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        .embla__viewport {
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        .embla__container {
          display: flex;
          height: 100%;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
