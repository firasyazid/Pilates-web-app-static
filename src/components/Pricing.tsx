import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const packages = [
    {
      title: "Pack de 05 Cours",
      subtitle: "Tout accès",
      price: "150 DT",
      description: "Idéal pour débuter ou essayer différents types de cours.",
      features: [
        "5 cours inclus",
        "+2 cours gratuits",
        "Validité : 45 jours",
        "Accès à tous les types de cours"
      ],
      popular: false
    },
    {
      title: "Pack de 12 Cours",
      subtitle: "Tout accès",
      price: "320 DT",
      description: "Excellent rapport qualité-prix pour les pratiquants réguliers.",
      features: [
        "12 cours inclus",
        "+3 cours gratuits",
        "Validité : 3 mois",
        "Accès à tous les types de cours"
      ],
      popular: true
    },
    {
      title: "Pack de 20 Cours",
      subtitle: "Tout accès",
      price: "500 DT",
      description: "Formule idéale pour une pratique régulière et intensive.",
      features: [
        "20 cours inclus",
        "+4 cours gratuits",
        "Validité : 6 mois",
        "Accès à tous les types de cours"
      ],
      popular: false
    },
    {
      title: "Pack de 50 Cours",
      subtitle: "Tout accès",
      price: "1000 DT",
      description: "Le choix parfait pour un engagement à long terme.",
      features: [
        "50 cours inclus",
        "+5 cours gratuits",
        "Validité : 1 an",
        "Accès à tous les types de cours"
      ],
      popular: false
    }
  ];

 

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choisissez votre <span className="text-primary">formule bien-être</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des options flexibles conçues pour accompagner votre pratique du Pilates, adaptées à votre rythme et à vos objectifs.
          </p>
        </div>

        {/* Formules d'abonnement */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none animate-fade-in ${
                pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-display text-2xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {pkg.title}
                </CardTitle>
                <div className="text-sm text-accent font-medium">{pkg.subtitle}</div>
                <div className="text-4xl font-bold text-primary mt-4">{pkg.price}</div>
                <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
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

export default Pricing;
