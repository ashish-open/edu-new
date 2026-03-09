import { useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    BookOpen,
    Briefcase,
    Building2,
    Calendar,
    CheckCircle,
    ChevronRight,
    Clock,
    GraduationCap,
    Heart,
    MapPin,
    Phone,
    Star,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Course Data ───────────────────────────────────────────────────────────────
const courses = [
    {
        id: "medical-laboratory-technology",
        name: "Medical Laboratory Technology",
        shortName: "MLT",
        badge: "DIPLOMA IN",
        duration: "2 Years",
        eligibility: "10th Pass",
        color: "primary",
        bgColor: "bg-primary",
        accent: "#1a56db",
        icon: Heart,
        tagline: "Diagnose. Detect. Deliver.",
        description:
            "The Diploma in Medical Laboratory Technology (DMLT) trains students in essential clinical laboratory skills including haematology, biochemistry, microbiology, and pathology. Graduates are equipped to work in hospitals, diagnostic centers, and research labs.",
        highlights: [
            "Haematology & Blood Banking",
            "Clinical Biochemistry",
            "Microbiology & Immunology",
            "Histopathology & Cytology",
            "Radiology & Imaging Basics",
        ],
        careerRoles: [
            "Lab Technician",
            "Phlebotomist",
            "Blood Bank Technician",
            "Diagnostic Center Assistant",
            "Research Lab Assistant",
        ],
        image:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "hospitality-management",
        name: "Hospitality Management",
        shortName: "HM",
        badge: "DIPLOMA IN",
        duration: "2 Year",
        eligibility: "10th Pass",
        color: "orange",
        bgColor: "bg-orange",
        accent: "#f97316",
        icon: Star,
        tagline: "Serve. Manage. Excel.",
        description:
            "The Diploma in Hospitality Management prepares students for rewarding careers in the hospitality and tourism sector. Covering hotel operations, food & beverage management, front-office handling, and guest service excellence.",
        highlights: [
            "Hotel Operations & Front Office",
            "Food & Beverage Management",
            "Housekeeping & Facility Management",
            "Event & Banquet Coordination",
            "Customer Relationship Management",
        ],
        careerRoles: [
            "Hotel Executive",
            "Guest Relations Officer",
            "Food & Beverage Associate",
            "Event Coordinator",
            "Travel & Tourism Executive",
        ],
        image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "hospital-administration",
        name: "Hospital Administration",
        shortName: "HA",
        badge: "DIPLOMA IN",
        duration: "2 Year",
        eligibility: "10th Pass",
        color: "magenta",
        bgColor: "bg-magenta",
        accent: "#d946ef",
        icon: Building2,
        tagline: "Lead. Organise. Heal.",
        description:
            "The Diploma in Hospital Administration equips students with the knowledge and skills to manage hospital operations, patient administration, healthcare systems, and regulatory compliance. Ideal for those seeking leadership roles in the healthcare industry.",
        highlights: [
            "Hospital Management Systems",
            "Patient Administration & Records",
            "Healthcare Policy & Compliance",
            "Financial Management in Healthcare",
            "HR & Staff Coordination",
        ],
        careerRoles: [
            "Hospital Administrator",
            "Medical Records Officer",
            "Healthcare Coordinator",
            "Clinic Manager",
            "Health Insurance Executive",
        ],
        image:
            "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80",
    },
];

// ─── Why Choose Us Features ────────────────────────────────────────────────────
const features = [
    {
        icon: CheckCircle,
        title: "100% Placement Assistance",
        description:
            "Dedicated placement cell with strong industry connections to ensure every graduate lands the right opportunity.",
        color: "primary",
    },
    {
        icon: GraduationCap,
        title: "Experienced Faculty",
        description:
            "Learn from qualified professionals with extensive academic and industry experience across all programs.",
        color: "accent",
    },
    {
        icon: Building2,
        title: "Modern Infrastructure",
        description:
            "State-of-the-art labs, well-equipped classrooms, library, and practical training facilities.",
        color: "orange",
    },
    {
        icon: Users,
        title: "Mock Interview Training",
        description:
            "Comprehensive interview preparation with industry experts to build confidence and sharpen communication skills.",
        color: "magenta",
    },
    {
        icon: Award,
        title: "Recognized Programs",
        description:
            "All diplomas are recognized and affiliated with reputed regulatory boards for maximum career value.",
        color: "primary",
    },
    {
        icon: TrendingUp,
        title: "Personality Development",
        description:
            "Holistic growth programs focusing on soft skills, leadership, and professional etiquette.",
        color: "accent",
    },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
    { value: "500+", label: "Students Graduated" },
    { value: "3", label: "Diploma Programs" },
    { value: "100%", label: "Placement Assistance" },
    { value: "10+", label: "Years of Excellence" },
];

// ─── Color Map ─────────────────────────────────────────────────────────────────
const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    orange: "bg-orange/10 text-orange border-orange/20",
    magenta: "bg-magenta/10 text-magenta border-magenta/20",
};

const badgeBgMap: Record<string, string> = {
    primary: "bg-primary text-white",
    orange: "bg-orange text-white",
    magenta: "bg-magenta text-white",
};

// ─── Course Detail Component ────────────────────────────────────────────────────
const CourseDetail = ({ course }: { course: (typeof courses)[0] }) => {
    const Icon = course.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            id={`course-${course.id}`}
            className="rounded-2xl overflow-hidden shadow-xl border border-border bg-white mb-12"
        >
            {/* Course Hero Banner */}
            <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                    <div>
                        <span
                            className={`inline-block text-xs font-zonapro font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${badgeBgMap[course.color]}`}
                        >
                            {course.badge}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-zonapro font-bold text-white mb-2">
                            {course.name}
                        </h2>
                        <p className="text-white/80 font-zonapro italic text-lg">
                            {course.tagline}
                        </p>
                    </div>
                </div>
                {/* Duration & Eligibility Chips */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                    <span className="flex items-center gap-1 bg-white/95 text-secondary text-xs font-zonapro font-semibold px-3 py-1.5 rounded-full shadow">
                        <Clock className="h-3.5 w-3.5" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-white/95 text-secondary text-xs font-zonapro font-semibold px-3 py-1.5 rounded-full shadow">
                        <GraduationCap className="h-3.5 w-3.5" /> {course.eligibility}
                    </span>
                </div>
            </div>

            {/* Course Body */}
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Description */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h3 className="text-xl font-zonapro font-semibold text-secondary mb-3">
                            About This Program
                        </h3>
                        <p className="text-muted-foreground font-zonapro leading-relaxed">
                            {course.description}
                        </p>
                    </div>

                    {/* Course Highlights */}
                    <div>
                        <h3 className="text-xl font-zonapro font-semibold text-secondary mb-4">
                            What You'll Learn
                        </h3>
                        <ul className="space-y-3">
                            {course.highlights.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center gap-3 font-zonapro text-secondary/90"
                                >
                                    <span
                                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${course.bgColor}`}
                                    >
                                        {i + 1}
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Career Roles + CTA */}
                <div className="space-y-6">
                    <div className="bg-muted rounded-xl p-6">
                        <h3 className="text-lg font-zonapro font-semibold text-secondary mb-4 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            Career Opportunities
                        </h3>
                        <ul className="space-y-2">
                            {course.careerRoles.map((role, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm font-zonapro text-secondary/80"
                                >
                                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Facts */}
                    <div className="bg-muted rounded-xl p-6 space-y-4">
                        <h3 className="text-lg font-zonapro font-semibold text-secondary flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Quick Facts
                        </h3>
                        <div className="space-y-3 text-sm font-zonapro">
                            <div className="flex items-center gap-2 text-secondary/80">
                                <Clock className="h-4 w-4 text-primary" />
                                Duration: <span className="font-semibold">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary/80">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                Eligibility:{" "}
                                <span className="font-semibold">{course.eligibility}</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary/80">
                                <Calendar className="h-4 w-4 text-primary" />
                                Age Limit: <span className="font-semibold">None</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary/80">
                                <Award className="h-4 w-4 text-primary" />
                                Recognition:{" "}
                                <span className="font-semibold">Government Recognized</span>
                            </div>
                        </div>
                    </div>

                    <a href="https://wa.me/919694002002" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary hover:bg-primary/90 font-zonapro py-6 text-base">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                    <a href="tel:9694002002">
                        <Button variant="outline" className="w-full font-zonapro py-6 text-base mt-2">
                            <Phone className="mr-2 h-4 w-4" />
                            Call for Admission
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// ─── Main Institution Page ──────────────────────────────────────────────────────
const Institution = () => {
    const [searchParams] = useSearchParams();
    const courseParam = searchParams.get("course");
    const coursesSectionRef = useRef<HTMLDivElement>(null);
    const specificCourseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (courseParam) {
            setTimeout(() => {
                const el = document.getElementById(`course-${courseParam}`);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300);
        }
    }, [courseParam]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                {/* ── Hero Banner ─────────────────────────────────────── */}
                <section
                    className="relative py-24 md:py-32 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #173060 0%, #0C3E79 50%, #025B8E 100%)",
                    }}
                >
                    {/* Dot pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-10 z-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="container mx-auto px-4 max-w-[1220px] relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <p className="text-xs uppercase tracking-widest text-yellow font-zonapro mb-4">
                                Confidence Group of Institutions
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-zonapro font-hairline text-white leading-tight mb-6">
                                Excellence in{" "}
                                <span className="text-yellow">Professional Education</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/85 font-zonapro leading-relaxed mb-8">
                                Recognized diploma programs in paramedical, hospitality, and
                                healthcare administration — designed to launch your career from
                                day one.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#courses-section"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("courses-section")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-yellow text-secondary hover:bg-yellow/90 px-8 py-6 text-base font-zonapro font-semibold"
                                    >
                                        Explore Courses
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-base font-zonapro"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Stats Strip ─────────────────────────────────────── */}
                <section className="bg-white border-b shadow-sm">
                    <div className="container mx-auto px-4 max-w-[1220px]">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="py-8 text-center"
                                >
                                    <p className="text-3xl md:text-4xl font-zonapro font-bold text-primary mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm font-zonapro text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── About Section ───────────────────────────────────── */}
                <section className="py-16 md:py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-[1220px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="text-xs uppercase tracking-widest text-primary font-zonapro mb-3">
                                    Who We Are
                                </p>
                                <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-5 leading-tight">
                                    Confidence Group of Institutions
                                </h2>
                                <p className="text-muted-foreground font-zonapro leading-relaxed mb-4">
                                    Confidence Group of Institutions is a premier educational institution
                                    located in Nedumkandam, Idukki District, Kerala. We specialize in
                                    paramedical, hospitality, and healthcare administration diploma
                                    programs that are recognized by Government and affiliated
                                    regulatory bodies.
                                </p>
                                <p className="text-muted-foreground font-zonapro leading-relaxed mb-6">
                                    Our mission is to empower students—regardless of age or
                                    background—with quality education, hands-on training, and career
                                    support that leads to meaningful employment. With a dedicated
                                    placement cell, experienced faculty, and modern infrastructure, we
                                    are committed to your success every step of the way.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-sm font-zonapro text-secondary/80">
                                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                                        Near Private Bus Stand, Old Darsana Theatre Building,
                                        Nedumkandam, Idukki, Kerala — 685553
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-zonapro text-secondary/80">
                                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                        <a href="tel:9694002002" className="hover:text-primary transition-colors">
                                            +91 9694002002
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-zonapro text-secondary/80">
                                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                                        No Age Limit — Apply Anytime
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                                        alt="Confidence Group of Institutions campus"
                                        className="w-full aspect-[4/3] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-zonapro">Programs</p>
                                        <p className="font-zonapro font-bold text-secondary text-lg">
                                            Government Recognized
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Courses Section ─────────────────────────────────── */}
                <section
                    id="courses-section"
                    ref={coursesSectionRef}
                    className="py-16 md:py-24 bg-muted"
                >
                    <div className="container mx-auto px-4 max-w-[1220px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-14"
                        >
                            <p className="text-xs uppercase tracking-widest text-primary font-zonapro mb-3">
                                Our Programs
                            </p>
                            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                                Diploma Courses Offered
                            </h2>
                            <p className="text-muted-foreground font-zonapro max-w-xl mx-auto">
                                Choose from our range of government-recognized diploma programs
                                designed for a successful career.
                            </p>

                            {/* Course Quick Nav */}
                            <div className="flex flex-wrap gap-3 justify-center mt-8">
                                {courses.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => {
                                            document
                                                .getElementById(`course-${c.id}`)
                                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className={`px-5 py-2.5 rounded-full text-sm font-zonapro font-medium text-white transition-all hover:scale-105 shadow-md ${c.bgColor}`}
                                    >
                                        {c.shortName} — {c.name}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <div ref={specificCourseRef}>
                            {courses.map((course) => (
                                <CourseDetail key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Why Choose Us ────────────────────────────────────── */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-[1220px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <p className="text-xs uppercase tracking-widest text-primary font-zonapro mb-3">
                                Our Advantage
                            </p>
                            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                                Why Choose Confidence?
                            </h2>
                            <p className="text-muted-foreground font-zonapro max-w-xl mx-auto">
                                We go beyond textbooks — your success is our commitment.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <Card className="h-full hover:shadow-lg transition-shadow border-border">
                                            <CardContent className="p-6">
                                                <div
                                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${colorMap[feature.color]}`}
                                                >
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <h3 className="text-lg font-zonapro font-hairline text-secondary mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm font-zonapro text-muted-foreground leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Campus Location ──────────────────────────────────── */}
                <section className="py-16 bg-muted">
                    <div className="container mx-auto px-4 max-w-[1220px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <p className="text-xs uppercase tracking-widest text-primary font-zonapro mb-3">
                                Find Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
                                Our Campus
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <Card className="border-0 shadow-lg">
                                    <CardContent className="p-8">
                                        <h3 className="text-xl font-zonapro font-semibold text-secondary mb-4 flex items-center gap-2">
                                            <MapPin className="h-5 w-5 text-primary" />
                                            Nedumkandam Campus
                                        </h3>
                                        <p className="text-muted-foreground font-zonapro leading-relaxed mb-6">
                                            Confidence Group of Institutions,
                                            <br />
                                            Near Private Bus Stand,
                                            <br />
                                            Old Darsana Theatre Building,
                                            <br />
                                            Nedumkandam, Idukki District,
                                            <br />
                                            Kerala — 685553
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <a
                                                href="tel:9694002002"
                                                className="flex items-center gap-3 text-sm font-zonapro text-primary hover:underline"
                                            >
                                                <Phone className="h-4 w-4" />
                                                +91 9694002002
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <a
                                    href="https://wa.me/919694002002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 font-zonapro py-6 text-base"
                                    >
                                        Enquire via WhatsApp
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </motion.div>

                            {/* Google Map Embed */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96"
                            >
                                <iframe
                                    title="Confidence Group of Institutions Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2196484741!2d77.0547!3d9.7047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0625c8e2a5b6c5%3A0x5b867d9b0e2ea5d!2sNedumkandam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ────────────────────────────────────────── */}
                <section
                    className="py-20 relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #173060 0%, #0C3E79 50%, #025B8E 100%)",
                    }}
                >
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="container mx-auto px-4 max-w-[1220px] relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-white mb-5">
                                Ready to Begin Your Career Journey?
                            </h2>
                            <p className="text-white/80 font-zonapro mb-8 text-lg">
                                Enroll today in one of our recognized diploma programs and take
                                the first step towards a rewarding career.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/919694002002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-yellow text-secondary hover:bg-yellow/90 px-10 py-6 text-base font-zonapro font-semibold"
                                    >
                                        Apply Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-transparent border-white text-white hover:bg-white/10 px-10 py-6 text-base font-zonapro"
                                    >
                                        Contact Admissions
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Institution;
