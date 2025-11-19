# New Components Guide

This document describes the new reusable components created for the educational website.

## Components Created

### 1. StudentTestimonials
**Location:** `src/components/home/StudentTestimonials.tsx`

A component for displaying student testimonials in a grid layout with ratings, photos, and testimonials.

**Usage:**
```tsx
import StudentTestimonials from "@/components/home/StudentTestimonials";
// or
import { StudentTestimonialsGrid } from "@/components/home/StudentTestimonials";

// With default data
<StudentTestimonials />

// With custom data
<StudentTestimonialsGrid 
  testimonials={[
    {
      id: 1,
      name: "Student Name",
      courseName: "Course Name",
      photo: "url-to-photo",
      rating: 5.0,
      testimonial: "Testimonial text..."
    }
  ]}
  title="Custom Title"
  subtitle="Custom Subtitle"
/>
```

**Props:**
- `testimonials`: Array of testimonial objects
- `title`: Section title (default: "What Our Students Say")
- `subtitle`: Section subtitle
- `className`: Additional CSS classes

### 2. Statistics
**Location:** `src/components/home/Statistics.tsx`

A component for displaying animated statistics/numbers with icons.

**Usage:**
```tsx
import Statistics from "@/components/home/Statistics";
// or
import { StatisticsGrid } from "@/components/home/Statistics";

// With default data
<Statistics />

// With custom data
<StatisticsGrid 
  statistics={[
    {
      id: 1,
      icon: GraduationCap,
      value: 5000,
      label: "Students Enrolled",
      suffix: "+"
    }
  ]}
  title="Our Achievements"
  subtitle="Numbers that speak for our commitment"
/>
```

**Props:**
- `statistics`: Array of statistic objects with icon, value, label, suffix/prefix
- `title`: Section title
- `subtitle`: Section subtitle
- `className`: Additional CSS classes

### 3. FeatureCards
**Location:** `src/components/home/FeatureCards.tsx`

A component for displaying feature cards with icons and descriptions.

**Usage:**
```tsx
import FeatureCards from "@/components/home/FeatureCards";
// or
import { FeatureCardsGrid } from "@/components/home/FeatureCards";

// With default data
<FeatureCards />

// With custom data
<FeatureCardsGrid 
  features={[
    {
      id: 1,
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Learn from experienced professionals...",
      color: "primary" // or "accent", "orange", "magenta"
    }
  ]}
  title="Why Choose Us"
  subtitle="Discover what makes us the preferred choice"
/>
```

**Props:**
- `features`: Array of feature objects with icon, title, description, color
- `title`: Section title
- `subtitle`: Section subtitle
- `className`: Additional CSS classes

### 4. CourseCard
**Location:** `src/components/home/CourseCard.tsx`

A reusable course card component that can be used individually or in a grid.

**Usage:**
```tsx
import { CourseCard, CourseCardsGrid } from "@/components/home/CourseCard";

// Individual card
<CourseCard 
  course={{
    id: 1,
    name: "BSc Nursing",
    description: "Bachelor of Science in Nursing",
    duration: "4 Years",
    eligibility: "12th with PCB",
    category: "Paramedical",
    link: "/courses/nursing"
  }}
/>

// Grid of courses
<CourseCardsGrid 
  courses={[...]}
  title="Our Courses"
  subtitle="Explore our comprehensive range"
  variant="default" // or "compact"
  showViewAll={true}
  viewAllLink="/courses"
/>
```

**Props:**
- `course`: Course object with name, description, duration, eligibility, etc.
- `variant`: "default" or "compact"
- `index`: Animation delay index
- `className`: Additional CSS classes

### 5. FAQ
**Location:** `src/components/home/FAQ.tsx`

A FAQ section component using accordion for expandable questions and answers.

**Usage:**
```tsx
import FAQ from "@/components/home/FAQ";
// or
import { FAQSection } from "@/components/home/FAQ";

// With default data
<FAQ />

// With custom data
<FAQSection 
  faqs={[
    {
      id: 1,
      question: "What are the eligibility criteria?",
      answer: "Eligibility criteria vary by course..."
    }
  ]}
  title="Frequently Asked Questions"
  subtitle="Find answers to common questions"
/>
```

**Props:**
- `faqs`: Array of FAQ items with question and answer
- `title`: Section title
- `subtitle`: Section subtitle
- `className`: Additional CSS classes

## Design System Compliance

All components follow the design guidelines:

- ✅ Use HSL color variables from `index.css`
- ✅ Use `font-poppins` for headings
- ✅ Use `font-inter` for body text
- ✅ Follow container pattern: `container mx-auto px-4 max-w-[1220px]`
- ✅ Use standard spacing: `py-16` for sections
- ✅ Use theme colors: `primary`, `secondary`, `accent`, `orange`, `magenta`, `yellow`
- ✅ Cards use: `bg-white rounded-xl shadow-lg hover:shadow-xl`
- ✅ Responsive design with `md:` and `lg:` breakpoints

## Integration Example

To add these components to your homepage, update `src/pages/Index.tsx`:

```tsx
import StudentTestimonials from "@/components/home/StudentTestimonials";
import Statistics from "@/components/home/Statistics";
import FeatureCards from "@/components/home/FeatureCards";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CourseFinder />
        <Statistics /> {/* Add statistics */}
        <WhyConfidence />
        <FeatureCards /> {/* Add feature cards */}
        <ParamedicalSpotlight />
        <StudentTestimonials /> {/* Add testimonials */}
        <ConsultancyBanner />
        <FAQ /> {/* Add FAQ section */}
        <ContactBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
```

## Customization

All components accept custom data and can be styled using the `className` prop. The default data provided is just for demonstration - replace it with your actual content.

## Dependencies

All required dependencies are already installed:
- `framer-motion` - For animations
- `lucide-react` - For icons
- `@radix-ui/react-avatar` - For avatar component
- `clsx` and `tailwind-merge` - For className utilities

