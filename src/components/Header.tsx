import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo_in red.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-[1220px]">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Confidence Group of Institutions" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sm font-inter hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/consultancy" className="text-sm font-inter hover:text-primary transition-colors">
            Consultancy
          </Link>
          <Link to="/why-confidence" className="text-sm font-inter hover:text-primary transition-colors">
            Why Confidence
          </Link>
          <Link to="/contact" className="text-sm font-inter hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a href="tel:9694002002">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Phone className="h-4 w-4 mr-2" />
              9694002002
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="text-sm font-inter py-2 hover:text-primary">
              Home
            </Link>
            <Link to="/consultancy" className="text-sm font-inter py-2 hover:text-primary">
              Consultancy
            </Link>
            <Link to="/why-confidence" className="text-sm font-inter py-2 hover:text-primary">
              Why Confidence
            </Link>
            <Link to="/contact" className="text-sm font-inter py-2 hover:text-primary">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <a href="tel:9694002002">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  9694002002
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
