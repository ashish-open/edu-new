import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Statistic {
  id: string | number;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatisticCardProps {
  statistic: Statistic;
  index: number;
  className?: string;
}

const StatisticCard = ({ statistic, index, className }: StatisticCardProps) => {
  const Icon = statistic.icon;
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = statistic.value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= statistic.value) {
        setDisplayValue(statistic.value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [statistic.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("text-center", className)}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-lg bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="mb-2">
          <span className="text-4xl md:text-5xl font-bold text-secondary font-poppins">
            {statistic.prefix}
            {displayValue.toLocaleString()}
            {statistic.suffix}
          </span>
        </div>
        <p className="text-lg text-muted-foreground font-inter">
          {statistic.label}
        </p>
      </div>
    </motion.div>
  );
};

interface StatisticsGridProps {
  statistics: Statistic[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const StatisticsGrid = ({
  statistics,
  title = "Our Achievements",
  subtitle = "Numbers that speak for our commitment to excellence",
  className,
}: StatisticsGridProps) => {
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

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((statistic, index) => (
            <StatisticCard
              key={statistic.id}
              statistic={statistic}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default statistics data
const defaultStatistics: Statistic[] = [
  {
    id: 1,
    icon: GraduationCap,
    value: 5000,
    label: "Students Enrolled",
    suffix: "+",
  },
  {
    id: 2,
    icon: BookOpen,
    value: 25,
    label: "Courses Offered",
    suffix: "+",
  },
  {
    id: 3,
    icon: Briefcase,
    value: 85,
    label: "Placement Rate",
    suffix: "%",
  },
  {
    id: 4,
    icon: Award,
    value: 15,
    label: "Years of Excellence",
    suffix: "+",
  },
];

const Statistics = () => {
  return <StatisticsGrid statistics={defaultStatistics} />;
};

export default Statistics;

