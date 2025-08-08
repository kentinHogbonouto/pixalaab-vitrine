"use client";

import { Card } from "./SimpleCard";

const testimonials = [
  {
    name: "Marie Dubois",
    position: "Directrice Marketing",
    company: "TechStartup",
    content: "Pixalaab a transformé notre présence digitale. Leur équipe a créé une plateforme e-commerce moderne qui a augmenté nos ventes de 40% en 6 mois. Un partenaire de confiance !",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Thomas Martin",
    position: "CEO",
    company: "InnovCorp",
    content: "Excellente collaboration avec Pixalaab. Ils ont développé notre application mobile en respectant parfaitement les délais et le budget. Le résultat dépasse nos attentes.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Sophie Laurent",
    position: "Directrice Digitale",
    company: "RetailPlus",
    content: "La transformation digitale de notre entreprise avec Pixalaab a été un succès total. Leur expertise et leur accompagnement personnalisé ont fait toute la différence.",
    rating: 5,
    avatar: "👩‍💻"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé leur business avec Pixalaab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-cyan-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <blockquote className="mt-6 text-gray-700 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ils nous font confiance
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-2">TechStartup</div>
                <div className="text-sm text-gray-500">E-commerce</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-2">InnovCorp</div>
                <div className="text-sm text-gray-500">Application Mobile</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-2">RetailPlus</div>
                <div className="text-sm text-gray-500">Transformation Digitale</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-2">DigitalFlow</div>
                <div className="text-sm text-gray-500">UX/UI Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
