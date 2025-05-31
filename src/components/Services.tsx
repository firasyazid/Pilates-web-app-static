import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Pack de 5 cours",
      description: "Profitez de 5 cours de Pilates avec 2 cours gratuits pour une pratique régulière et équilibrée.",
      features: [
        "Tout accès",
        "02 cours gratuits",
        "Validité : 45 jours",
        "Tarif : 150 DT"
      ]
    },
    {
      title: "Pack de 12 cours",
      description: "Un pack idéal pour approfondir votre pratique avec 3 cours gratuits inclus.",
      features: [
        "Tout accès",
        "03 cours gratuits",
        "Validité : 3 mois",
        "Tarif : 320 DT"
      ]
    },
    {
      title: "Pack de 20 cours",
      description: "Pour les passionnés : 20 cours + 4 cours gratuits pour un entraînement intensif.",
      features: [
        "Tout accès",
        "04 cours gratuits",
        "Validité : 6 mois",
        "Tarif : 500 DT"
      ]
    },
    {
      title: "Pack de 50 cours",
      description: "Le pack ultime pour un engagement sur la durée, avec 5 cours gratuits.",
      features: [
        "Tout accès",
        "05 cours gratuits",
        "Validité : 1 an",
        "Tarif : 1000 DT"
      ]
    },
    {
      title: "Cours à l’unité",
      description: "Séance unique pour découvrir ou compléter votre pratique.",
      features: [
        "Tout accès",
        "Validité : 7 jours",
        "Tarif : 35 DT"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-primary">Formules</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez parmi nos formules adaptées à vos besoins, conçues pour accompagner votre progression dans un cadre bienveillant et professionnel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-display text-2xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
