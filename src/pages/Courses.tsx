import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, MapPin, CheckCircle, Building2, Microscope, BookOpen, Wifi, Users, Bus, Hospital, FileText, UserCheck, Phone as PhoneIcon } from "lucide-react";

const courses = [
  {
    category: "Medical",
    programs: [
      {
        name: "MBBS",
        description: "Bachelor of Medicine and Bachelor of Surgery",
        eligibility: "12th with Physics, Chemistry, Biology (PCB) with minimum 50%",
        duration: "5.5 Years",
        campus: "India & Abroad"
      },
      {
        name: "BDS",
        description: "Bachelor of Dental Surgery",
        eligibility: "12th with PCB with minimum 50%",
        duration: "5 Years",
        campus: "India & Abroad"
      },
      {
        name: "BAMS",
        description: "Bachelor of Ayurvedic Medicine and Surgery",
        eligibility: "12th with PCB",
        duration: "5.5 Years",
        campus: "India"
      },
      {
        name: "BHMS",
        description: "Bachelor of Homeopathic Medicine and Surgery",
        eligibility: "12th with PCB",
        duration: "5.5 Years",
        campus: "India"
      }
    ]
  },
  {
    category: "Nursing",
    programs: [
      {
        name: "BSc Nursing",
        description: "Bachelor of Science in Nursing",
        eligibility: "12th with PCB or 10+2 equivalent",
        duration: "4 Years",
        campus: "Both Campuses"
      },
      {
        name: "GNM (General Nursing & Midwifery)",
        description: "Diploma in General Nursing and Midwifery",
        eligibility: "12th with PCB or equivalent",
        duration: "3.5 Years",
        campus: "Both Campuses"
      }
    ]
  },
  {
    category: "Paramedical",
    programs: [
      {
        name: "BSc Medical Lab Technology",
        description: "Bachelor of Science in Medical Laboratory Technology",
        eligibility: "12th with PCB",
        duration: "3 Years",
        campus: "Rajakkad Campus"
      },
      {
        name: "Diploma in MLT",
        description: "Diploma in Medical Laboratory Technology",
        eligibility: "10th Pass",
        duration: "2 Years",
        campus: "Rajakkad Campus"
      },
      {
        name: "BSc Radiology",
        description: "Bachelor of Science in Radiology & Imaging Technology",
        eligibility: "12th with PCB",
        duration: "3 Years",
        campus: "Rajakkad Campus"
      },
      {
        name: "BSc Optometry",
        description: "Bachelor of Science in Optometry",
        eligibility: "12th with PCB",
        duration: "3 Years",
        campus: "Rajakkad Campus"
      },
      {
        name: "Diploma Nursing Assistant",
        description: "Diploma in Nursing Assistant",
        eligibility: "10th Pass",
        duration: "1 Year",
        campus: "Rajakkad Campus"
      }
    ]
  },
  {
    category: "Allied Health",
    programs: [
      {
        name: "B.Pharm (Pharmacy)",
        description: "Bachelor of Pharmacy",
        eligibility: "12th with PCB/PCM",
        duration: "4 Years",
        campus: "India"
      },
      {
        name: "BPT (Physiotherapy)",
        description: "Bachelor of Physiotherapy",
        eligibility: "12th with PCB",
        duration: "4.5 Years",
        campus: "India"
      }
    ]
  },
  {
    category: "Management",
    programs: [
      {
        name: "BBA",
        description: "Bachelor of Business Administration",
        eligibility: "12th in any stream",
        duration: "3 Years",
        campus: "Nedumkandam Campus"
      },
      {
        name: "MBA",
        description: "Master of Business Administration",
        eligibility: "Graduation in any discipline",
        duration: "2 Years",
        campus: "Nedumkandam Campus"
      }
    ]
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
              Our Courses
            </h1>
            <p className="text-lg md:text-xl opacity-95 font-inter max-w-2xl">
              Explore our comprehensive range of programs designed to shape your future in healthcare, management, and beyond.
            </p>
          </div>
        </section>

        {/* Courses by Category */}
        {courses.map((category) => (
          <section key={category.category} className="py-12 odd:bg-background even:bg-muted">
            <div className="container mx-auto px-4 max-w-[1220px]">
              <h2 className="text-3xl font-poppins font-semibold text-secondary mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((course) => (
                  <Card key={course.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <h3 className="text-xl font-poppins font-semibold text-secondary">
                        {course.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter">
                        {course.description}
                      </p>
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
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <p className="text-sm font-inter">
                          <span className="font-semibold">Campus:</span> {course.campus}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">Enquire Now</Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Paramedical Highlights Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-inter font-semibold text-accent-foreground">CONFIDENCE PARAMEDICAL COLLEGE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4 text-secondary">
                  Start Your Healthcare Career Today
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-inter mb-6">
                  No age limit. Flexible eligibility. Professional training with guaranteed placement support.
                </p>
                <div className="space-y-3">
                  {[
                    "No age limit - Apply anytime",
                    "Eligibility from 10th pass onwards",
                    "100% Placement assistance",
                    "Recognized & affiliated programs",
                    "Modern labs & practical training",
                    "Industry-expert faculty"
                  ].map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 font-inter">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Flexible Entry", desc: "Eligibility starting from 10th pass with no age restrictions" },
                  { title: "Quality Education", desc: "Recognized programs with modern infrastructure and labs" },
                  { title: "Placement Support", desc: "100% placement assistance with hospital tie-ups" },
                  { title: "Hands-on Training", desc: "Practical training and clinical exposure" }
                ].map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-secondary">{item.title}</h3>
                      <p className="text-sm font-inter text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4 text-center">
              Our Facilities
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-12 text-center max-w-3xl mx-auto">
              World-class infrastructure and resources to support your academic and professional growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Building2, title: "Modern Classrooms", desc: "Spacious, well-ventilated classrooms with smart boards and audio-visual aids" },
                { icon: Microscope, title: "Well-Equipped Labs", desc: "State-of-the-art laboratories for practical training in MLT, Radiology, Nursing" },
                { icon: BookOpen, title: "Library", desc: "Extensive collection of books, journals, and digital resources" },
                { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed internet connectivity across campus" },
                { icon: Users, title: "Training & Placement", desc: "Dedicated team for skill development and placement assistance" },
                { icon: Bus, title: "Transportation", desc: "College bus service available for students" },
                { icon: Hospital, title: "Clinical Training", desc: "Tie-ups with reputed hospitals for internships and clinical experience" },
                { icon: GraduationCap, title: "Personality Development", desc: "Regular workshops on communication skills and leadership" }
              ].map((facility) => {
                const Icon = facility.icon;
                return (
                  <Card key={facility.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-secondary">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground font-inter">{facility.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4 text-center">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-12 text-center max-w-3xl mx-auto">
              Simple, transparent, and student-friendly admission process. We guide you at every step.
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: PhoneIcon, number: "01", title: "Initial Enquiry", desc: "Contact us via phone, WhatsApp, or visit our campus for course information and counselling." },
                { icon: UserCheck, number: "02", title: "Counselling & Course Selection", desc: "Meet with our counsellors to discuss your interests, eligibility, and choose the right program." },
                { icon: FileText, number: "03", title: "Document Submission", desc: "Submit required documents including academic certificates, ID proof, and photographs." },
                { icon: CheckCircle, number: "04", title: "Admission Confirmation", desc: "Complete the fee payment and receive your admission confirmation letter." },
                { icon: GraduationCap, number: "05", title: "Start Your Journey", desc: "Attend orientation and begin your academic journey with confidence." }
              ].map((step) => {
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
                            <h3 className="text-xl font-poppins font-semibold mb-2 text-secondary">{step.title}</h3>
                            <p className="text-muted-foreground font-inter">{step.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-secondary">Required Documents</h3>
                  <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                    {["10th Mark Sheet", "12th Mark Sheet (if applicable)", "Transfer Certificate", "Conduct Certificate", "Aadhaar Card Copy", "Passport Size Photographs (6 copies)"].map((doc) => (
                      <li key={doc} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-secondary">Important Information</h3>
                  <div className="space-y-3 text-sm font-inter text-muted-foreground">
                    <div>
                      <strong>Admission Timings:</strong> Open throughout the year for most courses
                    </div>
                    <div>
                      <strong>Office Hours:</strong> Mon - Sat, 9:00 AM - 5:00 PM
                    </div>
                    <div>
                      <strong>Age Limit:</strong> Most paramedical courses have no upper age limit
                    </div>
                    <div>
                      <strong>Scholarship:</strong> Available for eligible students
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg font-inter mb-8 opacity-95">
              Contact us today for personalized guidance
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

export default Courses;
