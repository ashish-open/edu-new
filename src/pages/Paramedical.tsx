import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, Award, CheckCircle } from "lucide-react";

const paramedicalCourses = [
  {
    name: "BSc Medical Lab Technology",
    eligibility: "12th with PCB",
    duration: "3 Years",
    ageLimit: "No Age Limit",
    career: "Clinical Labs, Hospitals, Diagnostic Centers, Research Labs"
  },
  {
    name: "Diploma in MLT",
    eligibility: "10th Pass",
    duration: "2 Years",
    ageLimit: "No Age Limit",
    career: "Medical Labs, Blood Banks, Pathology Centers"
  },
  {
    name: "BSc Radiology",
    eligibility: "12th with PCB",
    duration: "3 Years",
    ageLimit: "No Age Limit",
    career: "Radiology Departments, Imaging Centers, Hospitals"
  },
  {
    name: "BSc Optometry",
    eligibility: "12th with PCB",
    duration: "3 Years",
    ageLimit: "No Age Limit",
    career: "Eye Hospitals, Optical Stores, Vision Centers"
  },
  {
    name: "Diploma Nursing Assistant",
    eligibility: "10th Pass",
    duration: "1 Year",
    ageLimit: "No Age Limit",
    career: "Hospitals, Clinics, Home Healthcare"
  },
  {
    name: "GNM Nursing",
    eligibility: "12th Pass",
    duration: "3.5 Years",
    ageLimit: "No Age Limit",
    career: "Hospitals, Nursing Homes, Community Health Centers"
  }
];

const highlights = [
  "No age limit - Apply anytime",
  "Eligibility from 10th pass onwards",
  "100% Placement assistance",
  "Recognized & affiliated programs",
  "Modern labs & practical training",
  "Industry-expert faculty"
];

const Paramedical = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-accent-foreground/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-inter font-semibold">CONFIDENCE PARAMEDICAL COLLEGE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
                  Start Your Healthcare Career Today
                </h1>
                <p className="text-lg md:text-xl opacity-95 font-inter">
                  No age limit. Flexible eligibility. Professional training with guaranteed placement support.
                </p>
              </div>
              <div className="bg-accent-foreground/10 p-6 rounded-xl">
                <h3 className="text-xl font-poppins font-semibold mb-4">Key Highlights</h3>
                <ul className="space-y-2">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 font-inter">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-12 text-center">
              Paramedical Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paramedicalCourses.map((course) => (
                <Card key={course.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-poppins font-semibold text-secondary">
                      {course.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-inter">
                        <span className="font-semibold">Eligibility:</span> {course.eligibility}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm font-inter">
                        <span className="font-semibold">Duration:</span> {course.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent flex-shrink-0" />
                      <p className="text-sm font-inter font-semibold text-accent">
                        {course.ageLimit}
                      </p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs font-inter text-muted-foreground">
                        <span className="font-semibold">Career Opportunities:</span> {course.career}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">Apply Now</Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Why Choose Confidence Paramedical College?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Flexible Entry</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    With eligibility starting from 10th pass and no age restrictions, we welcome students at any stage of their life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Quality Education</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Recognized programs with modern infrastructure, labs, and experienced faculty ensure top-notch training.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Placement Support</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    100% placement assistance with tie-ups in hospitals, labs, and healthcare facilities across India.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Hands-on Training</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Emphasis on practical training and clinical exposure to prepare you for real-world healthcare settings.
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
              Begin Your Healthcare Journey
            </h2>
            <p className="text-lg font-inter mb-8 opacity-95">
              Contact us for detailed course information and admission guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919605894644">
                <Button size="lg" variant="secondary">
                  Call Now
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

export default Paramedical;
