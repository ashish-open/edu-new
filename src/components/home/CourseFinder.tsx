import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Medical", "Paramedical", "Nursing", "Management"];

// Category-specific images
const categoryImages = {
  Medical: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  Paramedical: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
  Nursing: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
  Management: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
};

const allCourses = [
  { name: "MBBS", category: "Medical" },
  { name: "BDS", category: "Medical" },
  { name: "BAMS", category: "Medical" },
  { name: "BHMS", category: "Medical" },
  { name: "BSc Medical Lab Technology", category: "Paramedical" },
  { name: "Pharmacy (B.Pharm)", category: "Paramedical" },
  { name: "BPT (Physiotherapy)", category: "Paramedical" },
  { name: "BSc Radiology", category: "Paramedical" },
  { name: "BSc Optometry", category: "Paramedical" },
  { name: "Diploma MLT", category: "Paramedical" },
  { name: "Diploma Nursing Assistant", category: "Paramedical" },
  { name: "BSc Nursing", category: "Nursing" },
  { name: "GNM", category: "Nursing" },
  { name: "ANM", category: "Nursing" },
  { name: "BBA", category: "Management" },
  { name: "MBA", category: "Management" },
  { name: "Hospitality Management", category: "Management" },
  { name: "Hospital Administration", category: "Management" }
];

const CourseFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("Medical");

  const filteredCourses = allCourses.filter(course => course.category === selectedCategory);

  // Split courses into two columns
  const midPoint = Math.ceil(filteredCourses.length / 2);
  const leftColumn = filteredCourses.slice(0, midPoint);
  const rightColumn = filteredCourses.slice(midPoint);

  const currentImage = categoryImages[selectedCategory as keyof typeof categoryImages] || categoryImages.Medical;

  return (
    <section className="pt-0 pb-16 lg:pb-24 overflow-hidden relative -mt-12 md:-mt-20 lg:-mt-28">
      {/* Subtle Gradient Background - Smooth transition from hero, extends upward to cover gap, full width */}
      <div className="absolute -top-24 md:-top-32 lg:-top-40 left-0 right-0 bottom-0 w-full bg-gradient-to-br from-secondary/5 via-primary/8 to-secondary/10 pointer-events-none" />
      
      {/* Additional depth with blurred orbs - extends upward, full width */}
      <div className="absolute -top-24 md:-top-32 lg:-top-40 left-0 right-0 bottom-0 w-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      {/* Content Container with proper z-index and top padding to account for overlap */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-24 md:pt-28 lg:pt-36">
        {/* Main Content: Image Left, Content Right - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[800px] w-full">
          {/* Left Side - Portrait Image with Enhanced Styling */}
          <div className="relative w-full h-full lg:h-[800px] order-2 lg:order-1 flex items-center justify-center lg:justify-start px-4 lg:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-md lg:max-w-full h-[500px] lg:h-[700px]"
              >
                {/* Image Container with Rounded Corners and Shadow */}
                <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 z-10 pointer-events-none" />
                  
                  {/* Image */}
                  <img
                    src={currentImage}
                    alt={`${selectedCategory} courses`}
                    className="w-full h-full object-cover object-center lg:object-left-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-tr-full -z-10 blur-3xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Heading, Description, Filters and Course List - Full Remaining Space */}
          <div className="flex flex-col justify-center h-full px-6 lg:px-12 xl:px-16 py-8 lg:py-12 order-1 lg:order-2">
            {/* Heading and Description */}
            <div className="mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-semibold text-secondary mb-4 lg:mb-6 leading-tight">
                Popular Courses
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-inter max-w-2xl leading-relaxed">
                Explore our wide range of programs. From idea to career, our integrated approach powers growth at every phase—medical, paramedical, nursing, and management—so you get expert guidance, recognized programs, and placement assistance.
              </p>
            </div>

            {/* Category Tabs - Improved spacing and alignment */}
            <div className="flex flex-wrap gap-3 mb-8 lg:mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-secondary text-white shadow-md border-2 border-secondary scale-105"
                      : "bg-transparent text-secondary border-2 border-secondary/30 hover:border-secondary/50 hover:bg-secondary/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Two-Column List View - Better spacing and alignment */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 mb-8 lg:mb-10"
              >
                {/* Left Column */}
                <div className="space-y-0">
                  {leftColumn.map((course) => (
                    <div key={course.name}>
                      <Link 
                        to="/courses" 
                        className="block py-3.5 border-b border-secondary/20 hover:text-primary hover:border-secondary/40 transition-all duration-200 group"
                      >
                        <span className="text-base font-inter text-secondary group-hover:translate-x-1 inline-block transition-transform duration-200">
                          {course.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-0">
                  {rightColumn.map((course) => (
                    <div key={course.name}>
                      <Link 
                        to="/courses" 
                        className="block py-3.5 border-b border-secondary/20 hover:text-primary hover:border-secondary/40 transition-all duration-200 group"
                      >
                        <span className="text-base font-inter text-secondary group-hover:translate-x-1 inline-block transition-transform duration-200">
                          {course.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* View All CTA - Better alignment and spacing */}
            <div className="mt-auto">
              <Link 
                to="/courses" 
                className="inline-flex items-center gap-4 group text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-semibold">
                  View All Courses
                </span>
                <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
