import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ContactBlock = () => {
  // Google Maps URL for Nedumkandam Campus
  // You can replace this with the actual coordinates or place ID
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Confidence+Group+of+Institutions+Nedumkandam+Idukki+District+Kerala";

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-zonapro font-hairline text-secondary mb-4">
            Visit Our Campuses
          </h2>
          <p className="text-lg text-muted-foreground font-zonapro">
            We're here to help you choose the right path
          </p>
        </div>

        {/* Google Maps Section */}
        <div className="w-full">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                {/* Map Container */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 overflow-hidden">
                  {/* Embedded Google Map */}
                  {/* Note: For production, replace this with the actual embed code from Google Maps */}
                  {/* To get embed code: Go to Google Maps > Search location > Share > Embed a map > Copy HTML */}
                  <iframe
                    src={`https://www.google.com/maps?q=Confidence+Group+of+Institutions+Nedumkandam+Idukki+District+Kerala&output=embed&hl=en`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Confidence Group of Institutions Location"
                  />
                  
                  {/* Overlay with campus info and click indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-zonapro font-hairline text-secondary mb-1">
                            Nedumkandam Campus
                          </h3>
                          <p className="text-sm font-zonapro text-muted-foreground">
                            Click map to open in Google Maps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
