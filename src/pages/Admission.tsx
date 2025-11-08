import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, UserCheck, GraduationCap, Phone } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Initial Enquiry",
    description: "Contact us via phone, WhatsApp, or visit our campus for course information and counselling."
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Counselling & Course Selection",
    description: "Meet with our counsellors to discuss your interests, eligibility, and choose the right program."
  },
  {
    icon: FileText,
    number: "03",
    title: "Document Submission",
    description: "Submit required documents including academic certificates, ID proof, and photographs."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Admission Confirmation",
    description: "Complete the fee payment and receive your admission confirmation letter."
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Start Your Journey",
    description: "Attend orientation and begin your academic journey with confidence."
  }
];

const documents = [
  "10th Mark Sheet",
  "12th Mark Sheet (if applicable)",
  "Transfer Certificate",
  "Conduct Certificate",
  "Aadhaar Card Copy",
  "Passport Size Photographs (6 copies)",
  "Caste Certificate (if applicable)",
  "Income Certificate (for scholarship)"
];

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
              Admission Process
            </h1>
            <p className="text-lg md:text-xl opacity-95 font-inter max-w-3xl">
              Simple, transparent, and student-friendly admission process. We guide you at every step.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-12 text-center">
              How to Apply
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-poppins font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-poppins font-semibold mb-2 text-secondary">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground font-inter">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Required Documents
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-3 font-inter">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground font-inter border-t pt-4">
                  <strong>Note:</strong> Additional documents may be required for specific courses. Our admission team will guide you through the complete documentation process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3">Admission Timings</h3>
                  <p className="text-sm font-inter text-muted-foreground mb-2">
                    Admissions are open throughout the year for most courses.
                  </p>
                  <p className="text-sm font-inter text-muted-foreground">
                    <strong>Office Hours:</strong> Mon - Sat, 9:00 AM - 5:00 PM
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3">Fee Structure</h3>
                  <p className="text-sm font-inter text-muted-foreground mb-2">
                    Fee varies by course. Contact us for detailed fee structure and payment options.
                  </p>
                  <p className="text-sm font-inter text-muted-foreground">
                    <strong>Scholarship:</strong> Available for eligible students
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3">Age Limit</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Most paramedical courses have no upper age limit. For other courses, age criteria depend on the program and university norms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3">Seats Availability</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Limited seats available. Early application is recommended to secure admission in your desired course.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg font-inter mb-8 opacity-95 max-w-2xl mx-auto">
              Contact our admission team for personalized guidance and support throughout the admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919605894644">
                <Button size="lg" variant="secondary">
                  Call +91 9605894644
                </Button>
              </a>
              <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90">
                  WhatsApp Enquiry
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Admission;
