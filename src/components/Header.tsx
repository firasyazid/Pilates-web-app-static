
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/lovable-uploads/ade7c2cf-e749-4442-8914-bb38ce4b0075.png"
                alt="Pilates & Co Logo"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary tracking-tight">Pilates & Co</h1>
              <p className="text-xs text-accent font-medium uppercase tracking-wider">Motion | Balance | Wellness</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              À Propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Bienfaits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Tarifs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Galerie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open("https://wa.me/21628803422", "_blank")}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Réserver
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Bienfaits
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium"
                >
                  Réserver
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
