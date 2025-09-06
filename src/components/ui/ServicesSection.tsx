"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "./SimpleCard";
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle,
  Cpu,
  Brain,
  Database,
  Blocks,
  Lock,
  Laptop,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites vitrine, e-commerce et applications web sur mesure avec les technologies les plus modernes.",
    features: ["React/Next.js", "E-commerce", "API REST", "Responsive Design"],
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Applications iOS et Android natives ou cross-platform pour maximiser votre présence mobile.",
    features: ["React Native", "Flutter", "iOS/Android", "PWA"],
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Laptop,
    title: "Applications Desktop",
    description: "Développement d'applications sur mesure pour Windows, Mac et Linux afin d’optimiser vos environnements de travail.",
    features: ["Electron.js", "C++/C#", "Java", "Multi-OS"],
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Cpu,
    title: "Internet des Objets (IoT)",
    description: "Développement de systèmes connectés pour améliorer vos services, produits et infrastructures.",
    features: ["Domotique", "Capteurs intelligents", "Objets connectés", "Intégration cloud"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  },

  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Interfaces utilisateur intuitives et expériences digitales mémorables pour vos utilisateurs.",
    features: ["Design System", "Prototypage", "Tests utilisateurs", "Accessibilité"],
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Zap,
    title: "Transformation Digitale",
    description: "Accompagnement complet dans la digitalisation de vos processus métier et de votre organisation.",
    features: ["Audit digital", "Stratégie", "Formation", "Accompagnement"],
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Lightbulb,
    title: "Conseil Stratégique",
    description: "Expertise en stratégie numérique pour optimiser votre présence digitale et votre ROI.",
    features: ["Audit", "Roadmap", "Analytics", "Optimisation"],
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions basées sur l’IA pour automatiser, analyser et créer de la valeur ajoutée à vos données et processus.",
    features: ["Machine Learning", "Chatbots", "Vision par ordinateur", "NLP"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description: "Exploitation de vos données massives pour générer des insights stratégiques et booster vos performances.",
    features: ["Data Mining", "ETL", "Tableau/Power BI", "Prévisions"],
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Blocks,
    title: "Blockchain",
    description: "Développement de solutions basées sur la blockchain pour plus de transparence, de traçabilité et de sécurité.",
    features: ["Smart Contracts", "Crypto Wallets", "NFT", "DApps"],
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Lock,
    title: "Cybersécurité",
    description: "Protection avancée de vos systèmes, données et utilisateurs contre les menaces numériques.",
    features: ["Audit de sécurité", "Pentesting", "Sécurité réseau", "Conformité RGPD"],
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Services de maintenance continue et support technique pour garantir la performance de vos solutions.",
    features: ["Monitoring", "Sécurité", "Mises à jour", "Support 24/7"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  }
];


export function ServicesSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images pour le carousel
  const images = [
    "/images/team-software.jpg",
    "/images/it-professional.jpg",
    "/images/high-angle.jpg",
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
  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
            <Code className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales complètes pour transformer votre entreprise et accélérer votre croissance
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Sticky Image - Hidden on mobile */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="relative h-[90vh] rounded-3xl overflow-hidden shadow-2xl">
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
                        alt={`Service ${index + 1}`}
                        fill
                        className="object-cover object-right-bottom"
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
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Services actifs</span>
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
                      <div className="text-2xl font-bold text-red-600">6+</div>
                      <div className="text-xs text-gray-600">Services</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
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

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <div className="p-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 group text-sm"
                    >
                      En savoir plus
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm"
              >
                <Lightbulb className="w-10 h-10 text-yellow-500" />
              </motion.div>

              <h3 className="text-base sm:text-xl lg:text-3xl font-bold mb-4 text-red-500">
                Besoin d&apos;une solution sur mesure ?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-lg lg:text-xl">
                Nos experts sont là pour vous accompagner dans la réalisation de votre projet digital.
                Contactez-nous pour un devis personnalisé.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => router.push("/#contact")} className="bg-white text-red-600 px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                  <Zap className="w-5 h-5" />
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
