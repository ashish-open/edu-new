import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, Users, Microscope, Award, BookOpen, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    title: "Students in Classroom",
    category: "Campus Life",
    description: "Interactive learning sessions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    title: "Study Groups",
    category: "Campus Life",
    description: "Collaborative learning environment"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Campus Events",
    category: "Campus Life",
    description: "Annual cultural fest"
  },
  // Programs
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
    title: "Medical Lab Technology",
    category: "Programs",
    description: "Hands-on practical training"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    title: "Nursing Program",
    category: "Programs",
    description: "Clinical practice sessions"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
    title: "Physiotherapy Training",
    category: "Programs",
    description: "Practical skill development"
  },
  // Facilities
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    title: "Modern Laboratories",
    category: "Facilities",
    description: "State-of-the-art equipment"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    title: "Library",
    category: "Facilities",
    description: "Extensive collection of resources"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    title: "Smart Classrooms",
    category: "Facilities",
    description: "Technology-enabled learning"
  },
  // Events
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    title: "Graduation Ceremony",
    category: "Events",
    description: "Celebrating achievements"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    title: "Workshop Sessions",
    category: "Events",
    description: "Industry expert interactions"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    title: "Placement Drive",
    category: "Events",
    description: "Career opportunities"
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

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            className="text-4xl md:text-5xl lg:text-6xl font-zonapro font-bold text-secondary mb-6"
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
                  "h-4 w-4 transition-transform duration-300",
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        <h3 className="font-zonapro font-bold text-2xl md:text-3xl text-white mb-2">
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
