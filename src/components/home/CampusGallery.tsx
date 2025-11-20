import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, Users, Microscope, Award, BookOpen, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import local images
import img1 from "@/assets/IMG-20251118-WA0036.jpg";
import img2 from "@/assets/IMG-20251118-WA0032.jpg";
import img3 from "@/assets/IMG-20251118-WA0034.jpg";
import img4 from "@/assets/IMG-20251118-WA0030.jpg";
import img5 from "@/assets/IMG-20240205-WA0011.jpg";
import img6 from "@/assets/IMG-20240221-WA0021.jpg";
import img7 from "@/assets/IMG-20240205-WA0014.jpg";
import img8 from "@/assets/IMG-20250305-WA0033.jpg";
import img9 from "@/assets/IMG-20241221-WA0044.jpg";
import img10 from "@/assets/IMG-20241221-WA0051.jpg";
import img11 from "@/assets/IMG-20241221-WA0048.jpg";
import img12 from "@/assets/IMG-20250423-nfWA0051.jpg";
import img13 from "@/assets/djkfhj.jpg";
import img14 from "@/assets/kkdj.jpg";
import img15 from "@/assets/dd.jpg";
import img16 from "@/assets/ff.jpg";
import img17 from "@/assets/coll.jpg";
import img18 from "@/assets/cok.jpg";
import img19 from "@/assets/com.jpg";
import img20 from "@/assets/meeting room.jpg";

type GalleryCategory = "All" | "Campus Life" | "Programs" | "Facilities" | "Events";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: GalleryCategory;
  description?: string;
}

const galleryItems: GalleryItem[] = [
  // Campus Life
  {
    id: 1,
    image: img1,
    title: "Campus Activities",
    category: "Campus Life",
    description: "Vibrant student life and activities"
  },
  {
    id: 2,
    image: img2,
    title: "Student Community",
    category: "Campus Life",
    description: "Building connections and friendships"
  },
  {
    id: 3,
    image: img3,
    title: "Campus Events",
    category: "Campus Life",
    description: "Celebrating together"
  },
  {
    id: 4,
    image: img4,
    title: "Student Life",
    category: "Campus Life",
    description: "Memorable moments on campus"
  },
  {
    id: 5,
    image: img17,
    title: "College Campus",
    category: "Campus Life",
    description: "Our beautiful campus grounds"
  },
  {
    id: 6,
    image: img18,
    title: "Campus Environment",
    category: "Campus Life",
    description: "Aspiring learning atmosphere"
  },
  {
    id: 7,
    image: img19,
    title: "Institution Life",
    category: "Campus Life",
    description: "Experience excellence"
  },
  // Programs
  {
    id: 8,
    image: img5,
    title: "Practical Training",
    category: "Programs",
    description: "Hands-on learning experience"
  },
  {
    id: 11,
    image: img6,
    title: "Program Sessions",
    category: "Programs",
    description: "Interactive learning"
  },
  {
    id: 12,
    image: img13,
    title: "Academic Excellence",
    category: "Programs",
    description: "Quality education programs"
  },
  // Facilities
  {
    id: 14,
    image: img20,
    title: "Meeting Room",
    category: "Facilities",
    description: "Modern conference facilities"
  },
  {
    id: 15,
    image: img7,
    title: "Campus Facilities",
    category: "Facilities",
    description: "Well-equipped infrastructure"
  },
  {
    id: 16,
    image: img8,
    title: "Institutional Facilities",
    category: "Facilities",
    description: "State-of-the-art amenities"
  },
  {
    id: 17,
    image: img15,
    title: "Modern Infrastructure",
    category: "Facilities",
    description: "Advanced facilities for learning"
  },
  {
    id: 18,
    image: img16,
    title: "Campus Infrastructure",
    category: "Facilities",
    description: "Supporting your success"
  },
  // Events
  {
    id: 19,
    image: img9,
    title: "Institutional Events",
    category: "Events",
    description: "Memorable celebrations"
  },
  {
    id: 22,
    image: img10,
    title: "Special Events",
    category: "Events",
    description: "Creating lasting memories"
  },
  {
    id: 23,
    image: img11,
    title: "Campus Celebrations",
    category: "Events",
    description: "Joyful moments together"
  },
  {
    id: 24,
    image: img12,
    title: "Annual Events",
    category: "Events",
    description: "Year-round activities"
  },
];

const categoryIcons = {
  "All": BookOpen,
  "Campus Life": Users,
  "Programs": GraduationCap,
  "Facilities": Building2,
  "Events": Award,
};

const CampusGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Limit "All" view to 6 best images (2 from each main category)
  const getFilteredItems = () => {
    if (selectedCategory === "All") {
      // Show a curated selection: 2 from Campus Life, 2 from Programs, 2 from Facilities/Events
      const campusLife = galleryItems.filter(item => item.category === "Campus Life").slice(0, 2);
      const programs = galleryItems.filter(item => item.category === "Programs").slice(0, 2);
      const facilities = galleryItems.filter(item => item.category === "Facilities").slice(0, 1);
      const events = galleryItems.filter(item => item.category === "Events").slice(0, 1);
      return [...campusLife, ...programs, ...facilities, ...events];
    }
    return galleryItems.filter(item => item.category === selectedCategory);
  };

  const filteredItems = getFilteredItems();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-[1220px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-zonapro font-semibold uppercase tracking-wide">
              Our Campus
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-zonapro font-hairline text-secondary mb-6"
          >
            Experience Campus Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-zonapro max-w-3xl mx-auto leading-relaxed"
          >
            Discover the vibrant community, world-class facilities, and transformative experiences that define life at Confidence Group of Institutions
          </motion.p>
        </div>

        {/* Category Filters - Modern Style */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {(Object.keys(categoryIcons) as GalleryCategory[]).map((category) => {
            const Icon = categoryIcons[category];
            const isActive = selectedCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-3 rounded-xl font-zonapro text-sm font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden group",
                  isActive
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                    : "bg-white text-secondary border-2 border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5"
                )}
              >
                <Icon className={cn(
                  "h-4 w-4 transition-transform duration-300 relative z-10",
                  isActive ? "text-white" : "text-secondary group-hover:scale-110"
                )} />
                <span className="relative z-10">{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-secondary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredItems.map((item, index) => {
              // Create varied heights for masonry effect
              const isTall = index % 4 === 0 || index % 4 === 3;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer",
                    isTall ? "md:row-span-2" : ""
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden",
                    isTall ? "h-[500px]" : "h-[350px]"
                  )}>
                    {/* Image */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredItem === item.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500",
                      hoveredItem === item.id ? "opacity-100" : "opacity-60"
                    )} />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: hoveredItem === item.id ? 1 : 0.8,
                          x: hoveredItem === item.id ? 0 : -10
                        }}
                        transition={{ duration: 0.3 }}
                        className="mb-4"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-zonapro font-semibold text-white border border-white/30">
                          {item.category}
                        </span>
                      </motion.div>

                      {/* Title and Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredItem === item.id ? 1 : 0.9,
                          y: hoveredItem === item.id ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-zonapro font-hairline text-2xl md:text-3xl text-white mb-2">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="font-zonapro text-sm md:text-base text-white/90 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </motion.div>

                      {/* Hover Arrow */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: hoveredItem === item.id ? 1 : 0,
                          x: hoveredItem === item.id ? 0 : -20
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="inline-flex items-center gap-2 text-white font-zonapro font-semibold">
                          <span className="text-sm">Explore</span>
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ transform: hoveredItem === item.id ? 'translateX(100%)' : 'translateX(-100%)' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/919605894644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-zonapro font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Microscope className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>View More Photos</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusGallery;
