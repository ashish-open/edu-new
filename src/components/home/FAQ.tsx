import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQSection = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our programs and admissions",
  className,
}: FAQSectionProps) => {
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

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${faq.id}`}
                  className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow px-6"
                >
                  <AccordionTrigger className="text-left font-poppins font-semibold text-secondary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-inter pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Default FAQ data
const defaultFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What are the eligibility criteria for admission?",
    answer: "Eligibility criteria vary by course. Generally, for undergraduate programs, you need to have completed 10+2 with relevant subjects (Physics, Chemistry, Biology for medical courses). Please check the specific course page for detailed eligibility requirements.",
  },
  {
    id: 2,
    question: "Do you provide placement assistance?",
    answer: "Yes, we have a dedicated placement cell that provides comprehensive placement assistance. We maintain strong industry connections and organize campus recruitment drives. Our placement rate is consistently above 85%.",
  },
  {
    id: 3,
    question: "Are the courses recognized and accredited?",
    answer: "All our courses are recognized by relevant regulatory bodies and accredited institutions. We ensure that all programs meet industry standards and are valued by employers.",
  },
  {
    id: 4,
    question: "What is the admission process?",
    answer: "The admission process typically involves submitting an application form, providing required documents, and attending a counseling session. Some courses may require entrance exams. Our admission team will guide you through the entire process.",
  },
  {
    id: 5,
    question: "Are scholarships available?",
    answer: "Yes, we offer various scholarships based on merit and financial need. Eligible students can apply for scholarships during the admission process. Please contact our admission office for more details.",
  },
  {
    id: 6,
    question: "What facilities are available on campus?",
    answer: "Our campus features modern infrastructure including well-equipped laboratories, libraries, computer labs, hostels, sports facilities, and cafeterias. We ensure a conducive learning environment for all students.",
  },
];

const FAQ = () => {
  return <FAQSection faqs={defaultFAQs} />;
};

export default FAQ;

