import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/Assets-01.png";

const diplomaCourses = [
  {
    id: 1,
    name: "MEDICAL LABORATORY TECHNOLOGY",
    color: "primary",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
    description: "Learn essential lab techniques and diagnostic procedures",
    link: "/consultancy",
  },
  {
    id: 2,
    name: "HOSPITALITY MANAGEMENT",
    color: "orange",
    bgColor: "bg-orange",
    textColor: "text-orange-foreground",
    description: "Master hotel operations and guest service excellence",
    link: "/consultancy",
  },
  {
    id: 3,
    name: "HOSPITAL ADMINISTRATION",
    color: "magenta",
    bgColor: "bg-magenta",
    textColor: "text-magenta-foreground",
    description: "Develop skills in healthcare administration and management",
    link: "/consultancy",
  },
];

const ParamedicalSpotlight = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="container mx-auto px-4 max-w-[1220px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-zonapro font-hairline text-yellow leading-tight mb-8">
                DIPLOMA IN
              </h2>
            </motion.div>

            {/* Course Cards */}
            <div className="space-y-4">
              {diplomaCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={course.link}>
                    <div
                      className={`${course.bgColor} ${course.textColor} px-6 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold">•</span>
                          <h3 className="text-lg md:text-xl font-zonapro font-hairline uppercase tracking-wide">
                            {course.name}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm mt-2 opacity-90 ml-8">
                        {course.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              <div className="flex items-start gap-3 text-white/90">
                <Calendar className="h-5 w-5 mt-1 flex-shrink-0 text-yellow" />
                <p className="font-zonapro text-lg">No Age Limit - Apply Anytime</p>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <GraduationCap className="h-5 w-5 mt-1 flex-shrink-0 text-yellow" />
                <p className="font-zonapro text-lg">Eligibility: 10th Pass</p>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <Award className="h-5 w-5 mt-1 flex-shrink-0 text-yellow" />
                <p className="font-zonapro text-lg">Recognized Programs with Placement Support</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
                alt="Student with diploma courses"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            {/* Decorative lines */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="absolute top-0 right-0 w-1 h-16 bg-primary rotate-45"></div>
              <div className="absolute top-4 right-4 w-1 h-12 bg-primary rotate-45"></div>
              <div className="absolute top-8 right-8 w-1 h-8 bg-primary rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParamedicalSpotlight;
