import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactBlock = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-secondary mb-4">
            Visit Our Campuses
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            We're here to help you choose the right path
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Nedumkandam Campus */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-poppins font-semibold text-secondary">
                Nedumkandam Campus
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-inter text-muted-foreground">
                    Confidence Group of Institutions<br />
                    Nedumkandam, Idukki District<br />
                    Kerala, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+919605894644" className="text-sm font-inter text-primary hover:underline">
                    +91 9605894644
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rajakkad Campus */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-poppins font-semibold text-secondary">
                Rajakkad Campus (Paramedical)
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-inter text-muted-foreground">
                    Confidence Paramedical College<br />
                    Rajakkad, Idukki District<br />
                    Kerala, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+919605894644" className="text-sm font-inter text-primary hover:underline">
                    +91 9605894644
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919605894644">
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="h-5 w-5" />
              Call for Enquiry
            </Button>
          </a>
          <a href="https://wa.me/919605894644" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
              <Mail className="h-5 w-5" />
              WhatsApp Enquiry
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
