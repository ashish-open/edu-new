import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Microscope, BookOpen, Wifi, Users, Bus, GraduationCap, Hospital } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Modern Classrooms",
    description: "Spacious, well-ventilated classrooms with smart boards and audio-visual aids for effective learning."
  },
  {
    icon: Microscope,
    title: "Well-Equipped Labs",
    description: "State-of-the-art laboratories for practical training in MLT, Radiology, Nursing, and other paramedical programs."
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive collection of books, journals, and digital resources covering all medical and paramedical subjects."
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "High-speed internet connectivity across campus for research, online learning, and academic activities."
  },
  {
    icon: Users,
    title: "Training & Placement Cell",
    description: "Dedicated team for skill development, interview preparation, and placement assistance."
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "College bus service available for students from various locations."
  },
  {
    icon: Hospital,
    title: "Clinical Training",
    description: "Tie-ups with reputed hospitals and healthcare facilities for internships and hands-on clinical experience."
  },
  {
    icon: GraduationCap,
    title: "Personality Development",
    description: "Regular workshops and seminars on communication skills, leadership, and professional etiquette."
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
              Our Facilities
            </h1>
            <p className="text-lg md:text-xl opacity-95 font-inter max-w-3xl">
              World-class infrastructure and resources to support your academic and professional growth.
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility) => {
                const Icon = facility.icon;
                return (
                  <Card key={facility.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-secondary">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lab Facilities Detail */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-12 text-center">
              Laboratory Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-secondary">
                    Medical Lab Technology
                  </h3>
                  <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                    <li>• Clinical Pathology Lab</li>
                    <li>• Biochemistry Lab</li>
                    <li>• Microbiology Lab</li>
                    <li>• Hematology Lab</li>
                    <li>• Immunology & Serology Lab</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-secondary">
                    Nursing & Allied
                  </h3>
                  <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                    <li>• Anatomy & Physiology Lab</li>
                    <li>• Nursing Foundation Lab</li>
                    <li>• Community Health Lab</li>
                    <li>• Nutrition Lab</li>
                    <li>• Simulation Lab</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-secondary">
                    Radiology & Imaging
                  </h3>
                  <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                    <li>• X-Ray Lab</li>
                    <li>• Ultrasound Training</li>
                    <li>• CT & MRI Theory</li>
                    <li>• Radiation Physics Lab</li>
                    <li>• Film Processing Lab</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Amenities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Campus Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Student Support</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Counselling services, academic guidance, and mentorship programs for overall development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Cafeteria</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Hygienic cafeteria serving nutritious meals, snacks, and beverages.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Sports & Recreation</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Indoor and outdoor sports facilities for physical fitness and recreation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2">Safety & Security</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    24/7 security, CCTV surveillance, and a safe learning environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Facilities;
