const Benefits = () => {
  const benefits = [
    {
      title: "Flexibilité améliorée",
      description: "Améliorez votre amplitude de mouvement et réduisez les tensions musculaires grâce à des mouvements fluides et contrôlés.",
      icon: "🤸‍♀️"
    },
    {
      title: "Renforcement du centre du corps",
      description: "Renforcez votre sangle abdominale pour mieux soutenir l'ensemble du corps et améliorer votre posture.",
      icon: "💪"
    },
    {
      title: "Réduction du stress",
      description: "Retrouvez la clarté mentale et réduisez le stress grâce au mouvement conscient et à la respiration.",
      icon: "🧘‍♀️"
    },
    {
      title: "Meilleure posture",
      description: "Corrigez les déséquilibres et développez la conscience d’un alignement corporel adéquat.",
      icon: "🏃‍♀️"
    },
    {
      title: "Prévention des blessures",
      description: "Renforcez les muscles stabilisateurs et améliorez vos schémas de mouvement pour prévenir les blessures.",
      icon: "🛡️"
    },
    {
      title: "Connexion corps-esprit",
      description: "Développez une meilleure conscience corporelle et une concentration mentale grâce à des mouvements précis.",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Les bénéfices du <span className="text-primary">Pilates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment le Pilates peut transformer votre corps, votre esprit et votre bien-être général grâce à une pratique régulière et au mouvement conscient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
