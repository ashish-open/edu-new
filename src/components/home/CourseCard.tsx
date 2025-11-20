import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Course {
  id: string | number;
  name: string;
  description: string;
  duration: string;
  eligibility: string;
  category?: string;
  image?: string;
  link?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
  className?: string;
  variant?: "default" | "compact";
}

export const CourseCard = ({ 
  course, 
  index = 0, 
  className,
  variant = "default"
}: CourseCardProps) => {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("h-full", className)}
    >
      <Card className="bg-white border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        {/* Course Image (if provided) */}
        {course.image && !isCompact && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover"
            />
            {course.category && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  {course.category}
                </Badge>
              </div>
            )}
          </div>
        )}

        <CardHeader className={cn(isCompact && "pb-3")}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-zonapro font-hairline text-secondary flex-1">
              {course.name}
            </h3>
            {course.category && isCompact && (
              <Badge variant="outline" className="shrink-0">
                {course.category}
              </Badge>
            )}
          </div>
          {!isCompact && (
            <p className="text-sm text-muted-foreground font-zonapro mt-1">
              {course.description}
            </p>
          )}
        </CardHeader>

        <CardContent className={cn("space-y-3 flex-1", isCompact && "py-0")}>
          <div className="flex items-start gap-2">
            <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm font-zonapro">
              <span className="font-semibold text-secondary">Eligibility:</span>{" "}
              <span className="text-muted-foreground">{course.eligibility}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-sm font-zonapro">
              <span className="font-semibold text-secondary">Duration:</span>{" "}
              <span className="text-muted-foreground">{course.duration}</span>
            </p>
          </div>
          {isCompact && (
            <p className="text-sm text-muted-foreground font-zonapro line-clamp-2">
              {course.description}
            </p>
          )}
        </CardContent>

        <CardFooter>
          {course.link ? (
            <Link to={course.link} className="w-full">
              <Button variant="outline" className="w-full group">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" className="w-full group">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface CourseCardsGridProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
  showViewAll?: boolean;
  viewAllLink?: string;
  className?: string;
}

export const CourseCardsGrid = ({
  courses,
  title = "Our Programs",
  subtitle = "Explore our comprehensive range of programs",
  variant = "default",
  showViewAll = true,
  viewAllLink = "/consultancy",
  className,
}: CourseCardsGridProps) => {
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
            className="text-3xl md:text-4xl font-zonapro font-semibold text-secondary mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-zonapro"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              variant={variant}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link to={viewAllLink}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

