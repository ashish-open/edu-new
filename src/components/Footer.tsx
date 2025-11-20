import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Assets-03.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,15%,20%)] text-white">
      <div className="container mx-auto px-4 py-12 max-w-[1220px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Confidence Group of Institutions" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-white/80 font-zonapro">
              Expert counselling, recognized programs, and placement assistance.
            </p>
          </div>

          {/* Campus 1 - Nedumkandam */}
          <div>
            <h4 className="text-base font-zonapro font-semibold mb-3 text-white">Nedumkandam Campus</h4>
            <div className="space-y-2 text-sm font-zonapro">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-white/70" />
                <p className="text-white/80">
                  Confidence Group of Institutions, Nedumkandam, Idukki District, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Campus 2 - Rajakkad */}
          <div>
            <h4 className="text-base font-zonapro font-semibold mb-3 text-white">Rajakkad Campus</h4>
            <div className="space-y-2 text-sm font-zonapro">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-white/70" />
                <p className="text-white/80">
                  Confidence Paramedical College, Rajakkad, Idukki District, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-zonapro font-semibold mb-3 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm font-zonapro">
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
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap gap-4 justify-center text-sm font-zonapro mb-6">
            <Link to="/" className="text-white/80 hover:text-primary transition-colors">Home</Link>
            <Link to="/consultancy" className="text-white/80 hover:text-primary transition-colors">Consultancy</Link>
            <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-center text-xs text-white/60 mb-2 font-zonapro">
            © {new Date().getFullYear()} Confidence Group of Institutions. All rights reserved.
          </p>
          <p className="text-center text-xs text-white/60 font-zonapro">
            Design by{" "}
            <a 
              href="https://octopusmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Octopus Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
