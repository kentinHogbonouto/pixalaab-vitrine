"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";
import { SimpleInput } from "./SimpleInput";
import { SimpleTextarea } from "./SimpleTextarea";
import {
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useSendMail, ContactFormData } from "@/hooks/useSendMail";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const sendMailMutation = useSendMail();

  // Images pour le carousel
  const images = [
    "/images/woman-debugging.jpg"
  ];

  // Animation automatique des images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll progress pour synchroniser avec le défilement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
      return;
    }

    sendMailMutation.mutate(formData, {
      onSuccess: () => {
        // Reset du formulaire après succès
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      }
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-red-50 via-red-100 to-red-50">
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
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Prêt à <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">transformer</span> votre business ?
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sticky Image - Hidden on mobile */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="relative h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
                {/* Carousel d'images avec animation */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ scale: imageScale }}
                >
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.1
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Contact ${index + 1}`}
                        fill
                        className="object-cover object-top"
                        style={{
                          filter: 'sepia(20%) saturate(1.2) hue-rotate(350deg) contrast(1.1)',
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Overlay pour harmoniser avec les couleurs du site */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Contact actif</span>
                  </div>
                </motion.div>

                {/* Stats overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">24h</div>
                      <div className="text-xs text-gray-600">Réponse</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">100%</div>
                      <div className="text-xs text-gray-600">Gratuit</div>
                    </div>
                  </div>
                </motion.div>

                {/* Indicateurs de carousel */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {images.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      animate={{
                        scale: currentImageIndex === index ? 1.2 : 1,
                        opacity: currentImageIndex === index ? 1 : 0.5
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-yellow-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Demander un devis gratuit
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <SimpleInput
                    label="Prénom *"
                    type="text"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <SimpleInput
                    label="Nom *"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <SimpleInput
                  label="Email *"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SimpleInput
                  label="Entreprise (optionnel)"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Service souhaité *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="info">Demande d’information générale</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Applications Mobiles</option>
                    <option value="desktop">Applications Desktop (Windows, Mac, Linux)</option>
                    <option value="iot">Internet des Objets (IoT)</option>
                    <option value="design">UX/UI Design</option>
                    <option value="digital">Transformation Digitale</option>
                    <option value="consulting">Conseil Stratégique</option>
                    <option value="ai">Intelligence Artificielle (IA)</option>
                    <option value="bigdata">Big Data & Analytics</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="cybersecurity">Cybersécurité</option>
                    <option value="maintenance">Maintenance & Support</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <SimpleTextarea
                  label="Message *"
                  rows={4}
                  placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={sendMailMutation.isPending}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {sendMailMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Recevoir une réponse sous 24h
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
