import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt(e) à commencer votre parcours bien-être ? Contactez-nous pour en savoir plus sur nos cours, planifier une visite ou poser vos questions.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="space-y-10 animate-slide-in-right max-w-2xl w-full">
           

            <div className="space-y-6">
              {/* Adresse */}
              <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">Immeuble Bouabdallah Centre, 1er étage, Cité Taieb Mhiri L'Aouina, Tunis</p>
                  </div>
                </div>
              </Card>

              {/* Téléphone */}
              <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-all duration-300">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+216 28 803 422</p>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">pilateandco94@gmail.com
</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Horaires */}
            <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl">
              <h4 className="font-display text-xl font-bold text-gray-900 mb-4">Horaires d'ouverture</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>7:00 - 20:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>8:00 - 12:00</span>
                </div>
                
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
