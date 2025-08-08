"use client";

const advantages = [
  {
    icon: "🎯",
    title: "Expertise Pointue",
    description: "Une équipe d'experts passionnés avec plus de 10 ans d'expérience dans le développement digital."
  },
  {
    icon: "⚡",
    title: "Technologies Modernes",
    description: "Utilisation des dernières technologies et frameworks pour des solutions performantes et évolutives."
  },
  {
    icon: "🤝",
    title: "Accompagnement Personnalisé",
    description: "Un suivi personnalisé de votre projet de A à Z, avec une communication transparente et régulière."
  },
  {
    icon: "🚀",
    title: "Livraison Rapide",
    description: "Respect des délais et méthodologies agiles pour une livraison dans les temps impartis."
  },
  {
    icon: "🛡️",
    title: "Qualité Garantie",
    description: "Tests rigoureux et code de qualité pour des applications robustes et sécurisées."
  },
  {
    icon: "📈",
    title: "ROI Optimisé",
    description: "Solutions conçues pour maximiser votre retour sur investissement et votre croissance business."
  }
];

const stats = [
  { number: "150+", label: "Projets Réalisés" },
  { number: "98%", label: "Clients Satisfaits" },
  { number: "24h", label: "Temps de Réponse" },
  { number: "5+", label: "Années d'Expérience" }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Pixalaab</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre engagement : vous accompagner vers le succès digital avec expertise, innovation et résultats mesurables
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-6">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Nos Chiffres Clés
            </h3>
            <p className="text-cyan-100 text-lg">
              La preuve de notre expertise en chiffres
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-cyan-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Notre Méthodologie
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Découverte</h4>
              <p className="text-gray-600">Analyse de vos besoins et objectifs business</p> 
            </div>
            
            <div className="relative">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Conception</h4>
              <p className="text-gray-600">Architecture technique et design des interfaces</p>
            </div>
            
            <div className="relative">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Développement</h4>
              <p className="text-gray-600">Codage et intégration selon les meilleures pratiques</p>
            </div>
            
            <div className="relative">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Livraison</h4>
              <p className="text-gray-600">Tests, déploiement et formation utilisateurs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
