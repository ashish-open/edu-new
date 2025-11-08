import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 max-w-[1220px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              CONFIDENCE GROUP OF INSTITUTIONS
            </h3>
            <p className="text-sm text-secondary-foreground/80 font-inter">
              Expert counselling, recognized programs, and placement assistance.
            </p>
          </div>

          {/* Campus 1 - Nedumkandam */}
          <div>
            <h4 className="text-base font-poppins font-semibold mb-3">Nedumkandam Campus</h4>
            <div className="space-y-2 text-sm font-inter">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80">
                  Confidence Group of Institutions, Nedumkandam, Idukki District, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Campus 2 - Rajakkad */}
          <div>
            <h4 className="text-base font-poppins font-semibold mb-3">Rajakkad Campus</h4>
            <div className="space-y-2 text-sm font-inter">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80">
                  Confidence Paramedical College, Rajakkad, Idukki District, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-poppins font-semibold mb-3">Contact Us</h4>
            <div className="space-y-3 text-sm font-inter">
              <a href="tel:+919605894644" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 9605894644</span>
              </a>
              <a href="mailto:info@confidenceinstitutions.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@confidenceinstitutions.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-wrap gap-4 justify-center text-sm font-inter mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link to="/consultancy" className="hover:text-primary transition-colors">Consultancy</Link>
            <Link to="/why-confidence" className="hover:text-primary transition-colors">Why Confidence</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-center text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} Confidence Group of Institutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
