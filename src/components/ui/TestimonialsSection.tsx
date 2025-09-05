"use client";

import { motion } from "framer-motion";
import { Card } from "./SimpleCard";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marie Dubois",
    position: "Directrice Marketing",
    company: "TechStartup",
    content: "Pixalaab a transformé notre présence digitale. Leur équipe a créé une plateforme e-commerce moderne qui a augmenté nos ventes de 40% en 6 mois. Un partenaire de confiance !",
    rating: 5,
    avatar: "/images/avatar1.svg",
    fallback: "👩‍💼"
  },
  {
    name: "Thomas Martin",
    position: "CEO",
    company: "InnovCorp",
    content: "Excellente collaboration avec Pixalaab. Ils ont développé notre application mobile en respectant parfaitement les délais et le budget. Le résultat dépasse nos attentes.",
    rating: 5,
    avatar: "/images/avatar2.svg",
    fallback: "👨‍💼"
  },
  {
    name: "Sophie Laurent",
    position: "Directrice Digitale",
    company: "RetailPlus",
    content: "La transformation digitale de notre entreprise avec Pixalaab a été un succès total. Leur expertise et leur accompagnement personnalisé ont fait toute la différence.",
    rating: 5,
    avatar: "/images/avatar3.svg",
    fallback: "👩‍💻"
  },
  {
    name: "Jean-Pierre Leroy",
    position: "Responsable IT",
    company: "HealthCare Solutions",
    content: "Grâce à Pixalaab, nous avons modernisé notre système de gestion hospitalière. L’équipe a su combiner sécurité, performance et simplicité d’utilisation. Un vrai atout pour nos patients et notre personnel.",
    rating: 5,
    avatar: "/images/avatar1.svg",
    fallback: "🧑‍⚕️"
  },
  {
    name: "Clara Fernandez",
    position: "Fondatrice",
    company: "EcoShop",
    content: "Leur expertise e-commerce nous a permis de lancer une boutique en ligne performante et éco-responsable. Pixalaab a été un partenaire stratégique dans notre croissance.",
    rating: 5,
    avatar: "/images/avatar2.svg",
    fallback: "👩‍🛍️"
  },
  {
    name: "David Morel",
    position: "Directeur Financier",
    company: "Financia Group",
    content: "La solution digitale développée par Pixalaab nous a permis d’optimiser nos processus internes et de réduire nos coûts de 25%. Une approche rigoureuse et orientée résultats.",
    rating: 5,
    avatar: "/images/avatar3.svg",
    fallback: "👨‍💼"
  },
  {
    name: "Amina Traoré",
    position: "Entrepreneure",
    company: "FoodExpress",
    content: "Pixalaab a conçu une application mobile intuitive qui a révolutionné la façon dont nos clients commandent et reçoivent leurs repas. Rapidité et excellence sont au rendez-vous.",
    rating: 5,
    avatar: "/images/avatar1.svg",
    fallback: "👩‍🍳"
  },
  {
    name: "Lucas Bernard",
    position: "CTO",
    company: "EduTech Global",
    content: "Notre plateforme e-learning a gagné en fluidité et en scalabilité grâce au travail de Pixalaab. Ils maîtrisent parfaitement les technologies modernes et l’UX.",
    rating: 5,
    avatar: "/images/avatar2.svg",
    fallback: "👨‍💻"
  },
  {
    name: "Thomas Martin",
    position: "CEO",
    company: "InnovCorp",
    content: "Excellente collaboration avec Pixalaab. Ils ont développé notre application mobile en respectant parfaitement les délais et le budget. Le résultat dépasse nos attentes.",
    rating: 5,
    avatar: "/images/avatar3.svg",
    fallback: "👨‍💼"
  },
];


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className="text-yellow-400"
        >
          {index < rating ? "★" : "☆"}
        </motion.span>
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Group testimonials by 3
  const testimonialsPerSlide = 1;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ce que disent nos <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">clients</span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé leur business avec Pixalaab
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mb-20">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials
                      .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                      .map((testimonial, index) => (
                        <motion.div
                          key={slideIndex * testimonialsPerSlide + index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="group"
                        >
                          <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="p-6">
                              {/* Quote Icon */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                              >
                                <Quote className="w-6 h-6 text-white" />
                              </motion.div>

                              {/* Testimonial Content */}
                              <blockquote className="text-gray-700 leading-relaxed mb-4 italic text-sm">
                                &ldquo;{testimonial.content}&rdquo;
                              </blockquote>

                              {/* Rating */}
                              <div className="mb-4">
                                <StarRating rating={testimonial.rating} />
                              </div>

                              {/* Author Info */}
                              <div className="flex items-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="relative mr-3"
                                >
                                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-red-200">
                                    <Image
                                      width={100}
                                      height={100}
                                      src={testimonial.avatar}
                                      alt={testimonial.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                      }}
                                    />
                                    <div
                                      className="w-full h-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-lg"
                                      style={{ display: 'none' }}
                                    >
                                      {testimonial.fallback}
                                    </div>
                                  </div>
                                </motion.div>

                                <div>
                                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                  <p className="text-xs text-gray-600">{testimonial.position}</p>
                                  <p className="text-xs text-red-600 font-semibold">{testimonial.company}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
