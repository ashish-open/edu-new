import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl opacity-95 font-inter max-w-3xl">
              Get in touch with us for admissions, counselling, or any queries. We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Info & Quick Contact */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Campus 1 - Nedumkandam */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-semibold text-secondary mb-6">
                    Nedumkandam Campus
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-inter text-muted-foreground">
                          Confidence Group of Institutions<br />
                          Nedumkandam<br />
                          Idukki District<br />
                          Kerala, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="tel:+919605894644" className="font-inter text-primary hover:underline">
                        +91 9605894644
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="mailto:info@confidenceinstitutions.com" className="font-inter text-primary hover:underline">
                        info@confidenceinstitutions.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="font-inter text-muted-foreground">
                        <p className="font-semibold">Office Hours:</p>
                        <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campus 2 - Rajakkad */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-semibold text-secondary mb-6">
                    Rajakkad Campus (Paramedical College)
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-inter text-muted-foreground">
                          Confidence Paramedical College<br />
                          Rajakkad<br />
                          Idukki District<br />
                          Kerala, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="tel:+919605894644" className="font-inter text-primary hover:underline">
                        +91 9605894644
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="mailto:info@confidenceinstitutions.com" className="font-inter text-primary hover:underline">
                        info@confidenceinstitutions.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="font-inter text-muted-foreground">
                        <p className="font-semibold">Office Hours:</p>
                        <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-[1220px]">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-8 text-center">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground font-inter mb-4">
                    Speak directly with our team
                  </p>
                  <a href="tel:+919605894644">
                    <Button variant="outline" size="sm">
                      +91 9605894644
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground font-inter mb-4">
                    Quick enquiry via WhatsApp
                  </p>
                  <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      Message Us
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 mb-4">
                    <Mail className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-poppins font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground font-inter mb-4">
                    Send us your queries
                  </p>
                  <a href="mailto:info@confidenceinstitutions.com">
                    <Button variant="outline" size="sm">
                      Email Us
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-[1220px] text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
              Visit Our Campuses
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              We welcome you to visit our campuses, meet our faculty, and experience our world-class facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919605894644">
                <Button size="lg">Schedule a Visit</Button>
              </a>
              <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Book Campus Tour
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

export default Contact;

// Missing import
import { MessageCircle } from "lucide-react";
