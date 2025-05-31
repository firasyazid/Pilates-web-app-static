import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/ade7c2cf-e749-4442-8914-bb38ce4b0075.png" 
              alt="Pilates & Co Icon" 
              className="h-16 mx-auto md:mx-0 mb-4 filter brightness-0 invert"
            />
            <h3 className="font-display text-2xl font-bold mb-4">Pilates & Co</h3>
            <p className="text-gray-400 leading-relaxed">
              Transformez votre corps et élevez votre esprit grâce au pouvoir du mouvement conscient dans notre studio de Pilates haut de gamme.
            </p>
          </div>
          
          {/* Liens rapides */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Nos services</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Tarifs</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Galerie</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Infos de contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Contactez-nous</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="h-4 w-4" />
                <span>+216 28 803 422</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-4 w-4" />
                <span>pilateandco94@gmail.com
</span>
              </div>
              <div className="flex justify-center md:justify-end mt-4">
                <a 
                  href="https://www.instagram.com/pilatesandcostudio/" 
                  className="bg-accent hover:bg-accent/80 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre inférieure */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Pilates & Co. Tous droits réservés. | Mouvement | Équilibre | Bien-être</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
