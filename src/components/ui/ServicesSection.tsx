"use client";

import { Card } from "./SimpleCard";

const services = [
  {
    icon: "🌐",
    title: "Développement Web",
    description: "Sites vitrine, e-commerce et applications web sur mesure avec les technologies les plus modernes.",
    features: ["React/Next.js", "E-commerce", "API REST", "Responsive Design"]
  },
  {
    icon: "📱",
    title: "Applications Mobiles",
    description: "Applications iOS et Android natives ou cross-platform pour maximiser votre présence mobile.",
    features: ["React Native", "Flutter", "iOS/Android", "PWA"]
  },
  {
    icon: "🔄",
    title: "Transformation Digitale",
    description: "Accompagnement complet dans la digitalisation de vos processus métier et de votre organisation.",
    features: ["Audit digital", "Stratégie", "Formation", "Accompagnement"]
  },
  {
    icon: "🎨",
    title: "UX/UI Design",
    description: "Interfaces utilisateur intuitives et expériences digitales mémorables pour vos utilisateurs.",
    features: ["Design System", "Prototypage", "Tests utilisateurs", "Accessibilité"]
  },
  {
    icon: "💡",
    title: "Conseil Stratégique",
    description: "Expertise en stratégie numérique pour optimiser votre présence digitale et votre ROI.",
    features: ["Audit", "Roadmap", "Analytics", "Optimisation"]
  },
  {
    icon: "⚡",
    title: "Maintenance & Support",
    description: "Services de maintenance continue et support technique pour garantir la performance de vos solutions.",
    features: ["Monitoring", "Sécurité", "Mises à jour", "Support 24/7"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions digitales complètes pour transformer votre entreprise et accélérer votre croissance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className="p-8">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300">
                    En savoir plus →
                  </button>
                </div> */}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d&apos;une solution sur mesure ?
            </h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner dans la réalisation de votre projet digital. 
              Contactez-nous pour un devis personnalisé.
            </p>

            <a href="#contact">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Discuter de votre projet
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
