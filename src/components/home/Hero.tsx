import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Hospital, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/Assets-01.png";
import consultancyImage from "@/assets/red-consultancy.png";
import assets02Image from "@/assets/Assets-02.png";
import studImage from "@/assets/stud.png";
import doctorImage from "@/assets/doctor.png";
import Silk from "@/components/Silk";

// Carousel slides for Confidence Group of Institutions
const institutionsSlides = [
  {
    image: heroImage,
    tagline: "CONFIDENCE GROUP OF INSTITUTIONS",
    heading: "Together We'll Explore New Things",
    description: "We believe everyone should have the opportunity to create progress through education.",
    ctaText: "Explore Courses",
    ctaLink: "/institution",
  },
];

// Carousel slides for Educational Consultancy
const consultancySlides = [
  {
    image: assets02Image,
    tagline: "CONFIDENCE EDUCATIONAL CONSULTANCY",
    heading: "Your Path to Success Starts Here",
    description: "Expert career counselling, study abroad guidance, and admission assistance for your educational journey.",
    ctaText: "Get Counselling",
    ctaLink: "/consultancy",
    alignRight: true, // Align content to right since person is on left
  },
];

// Combined slides array
const heroSlides = [
  ...institutionsSlides,
  ...consultancySlides,
];

const infoCards = [
  {
    icon: Hospital,
    title: "Confidence Group of Institutions",
    description: "Confidence offers recognized paramedical programs with placement assistance and modern infrastructure.",
    link: "/institution",
    isScroll: false,
  },
  {
    icon: Lightbulb,
    title: "Confidence Educational Consultancy",
    description: "Expert career counselling, study abroad guidance, and admission assistance for your educational journey.",
    link: "/consultancy",
    isScroll: false,
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
    <section className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden h-full w-full">
          <div className="flex h-full" style={{ margin: 0, padding: 0 }}>
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden"
              >
                {/* Silk Background for first carousel slide */}
                {index === 0 && (
                  <div className="absolute inset-0 z-0 w-full h-full">
                    <Silk
                      speed={1}
                      scale={1}
                      color="#15325C"
                      noiseIntensity={1.5}
                      rotation={0}
                    />
                  </div>
                )}

                {/* Silk Background for second carousel slide (red) */}
                {index === 1 && (
                  <div className="absolute inset-0 z-0 w-full h-full">
                    <Silk
                      speed={1}
                      scale={1}
                      color="#9E2023"
                      noiseIntensity={1.5}
                      rotation={0}
                    />
                  </div>
                )}

                {/* Background Image - No borders, full coverage - Hidden for first and second slides */}
                {index !== 0 && index !== 1 && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '100%',
                      margin: 0,
                      padding: 0,
                      border: 'none',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                )}

                {/* Overlay - Hidden for first and second slides */}
                {index !== 0 && index !== 1 && (
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }}
                  />
                )}

                {/* Student Image for first slide - Right aligned, above background */}
                {index === 0 && (
                  <div className="absolute right-0 bottom-0 z-[5] pointer-events-none">
                    <img
                      src={studImage}
                      alt="Student"
                      className="h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] w-auto"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'right bottom',
                        display: 'block',
                        maxHeight: '100vh'
                      }}
                    />
                  </div>
                )}

                {/* Doctor Image for second slide - Left aligned, above background */}
                {index === 1 && (
                  <div className="absolute left-0 bottom-0 z-[5] pointer-events-none">
                    <img
                      src={doctorImage}
                      alt="Doctor"
                      className="h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] w-auto"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'left bottom',
                        display: 'block',
                        maxHeight: '100vh'
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-4 max-w-[1220px] w-full">
                    <div className={`space-y-6 ${index === 1 ? 'ml-auto text-right max-w-2xl' : 'max-w-2xl'}`}>
                      <p className="text-sm md:text-base uppercase tracking-wider text-white drop-shadow-lg font-zonapro">
                        {slide.tagline}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-zonapro font-hairline text-white drop-shadow-lg leading-tight">
                        {slide.heading}
                      </h1>
                      <p className={`text-lg md:text-xl text-white drop-shadow-lg font-zonapro ${index === 1 ? 'ml-auto max-w-xl' : 'max-w-xl'}`}>
                        {slide.description}
                      </p>
                      <div className={index === 1 ? 'flex justify-end' : ''}>
                        {slide.ctaLink.startsWith('http') ? (
                          <a href={slide.ctaLink} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-zonapro">
                              {slide.ctaText}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        ) : (
                          <Link to={slide.ctaLink}>
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-zonapro">
                              {slide.ctaText}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="flex flex-col items-start space-y-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-zonapro font-hairline text-secondary">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground font-zonapro flex-1">
                      {card.description}
                    </p>
                    {card.isScroll ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById('why-us');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-primary font-zonapro font-medium hover:underline inline-flex items-center gap-2 group mt-auto"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        to={card.link}
                        className="text-primary font-zonapro font-medium hover:underline inline-flex items-center gap-2 group mt-auto"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
