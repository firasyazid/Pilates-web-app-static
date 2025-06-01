import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bienvenue chez <span className="text-primary">Pilates & Co</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Chez Pilates & Co, nous croyons au pouvoir transformateur du mouvement conscient. Notre studio n’est pas seulement un lieu d’exercice – c’est un sanctuaire où le mouvement, l’équilibre et le bien-être se rencontrent pour créer un changement durable.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fondé sur les principes de précision, de contrôle et de fluidité, nous proposons une approche complète du Pilates, respectueuse à la fois de la tradition et de l’innovation. Nos instructeurs expérimentés vous accompagnent à chaque mouvement avec soin et expertise, pour que chaque séance vous rapproche de vos objectifs bien-être.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <div className="text-gray-600">Cours dispensés</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="/lovable-uploads/1.jpg" 
                alt="Cours de Pilates en cours" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
