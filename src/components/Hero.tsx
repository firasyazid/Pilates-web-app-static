
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(186, 84, 90, 0.3), rgba(186, 84, 90, 0.2)), url('/lovable-uploads/83dfd0ff-3065-4fdc-b97a-e09be7a4e6e0.png')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="/lovable-uploads/d30b4e44-75c0-4371-b444-d3487e3c8ea4.png"
            alt="Pilates & Co Logo"
            className="h-32 mx-auto mb-6 animate-float"
          />
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">

          Transformez votre corps,

          <span className="block text-accent">élevez votre esprit</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light animate-slide-in-right opacity-90">
          Découvrez l'harmonie parfaite du mouvement, de l'équilibre et du bien-être dans notre studio de Pilates haut de gamme.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Réservez votre séance
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 glass-effect"
          >
            Découvrez nos cours          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
