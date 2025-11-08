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
import { useTranslations } from "next-intl";

interface IService {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

interface ITranslationHook {
  (key: string): string;
  raw: (key: string) => string[];
}

const getServices = (t: ITranslationHook): IService[] => [
  {
    icon: Code,
    title: t('services.web-development.title'),
    description: t('services.web-development.description'),
    features: t.raw('services.web-development.features'),
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Smartphone,
    title: t('services.mobile-apps.title'),
    description: t('services.mobile-apps.description'),
    features: t.raw('services.mobile-apps.features'),
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Laptop,
    title: t('services.desktop-apps.title'),
    description: t('services.desktop-apps.description'),
    features: t.raw('services.desktop-apps.features'),
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Cpu,
    title: t('services.iot.title'),
    description: t('services.iot.description'),
    features: t.raw('services.iot.features'),
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Palette,
    title: t('services.ux-ui-design.title'),
    description: t('services.ux-ui-design.description'),
    features: t.raw('services.ux-ui-design.features'),
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Zap,
    title: t('services.digital-transformation.title'),
    description: t('services.digital-transformation.description'),
    features: t.raw('services.digital-transformation.features'),
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Lightbulb,
    title: t('services.strategic-consulting.title'),
    description: t('services.strategic-consulting.description'),
    features: t.raw('services.strategic-consulting.features'),
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Brain,
    title: t('services.artificial-intelligence.title'),
    description: t('services.artificial-intelligence.description'),
    features: t.raw('services.artificial-intelligence.features'),
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Database,
    title: t('services.big-data-analytics.title'),
    description: t('services.big-data-analytics.description'),
    features: t.raw('services.big-data-analytics.features'),
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Blocks,
    title: t('services.blockchain.title'),
    description: t('services.blockchain.description'),
    features: t.raw('services.blockchain.features'),
    color: "from-yellow-400 to-yellow-500",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Lock,
    title: t('services.cybersecurity.title'),
    description: t('services.cybersecurity.description'),
    features: t.raw('services.cybersecurity.features'),
    color: "from-red-600 to-red-700",
    bgColor: "from-red-50 to-red-100"
  },
  {
    icon: Shield,
    title: t('services.maintenance-support.title'),
    description: t('services.maintenance-support.description'),
    features: t.raw('services.maintenance-support.features'),
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  }
];


export function ServicesSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations();
  const services = getServices(t);

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

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="relative h-[90vh] rounded-3xl overflow-hidden shadow-2xl">

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

                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>


                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">{t('services.active-services')}</span>
                  </div>
                </motion.div>


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
                      <div className="text-xs text-gray-600">{t('services.services-count')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">24/7</div>
                      <div className="text-xs text-gray-600">{t('services.support')}</div>
                    </div>
                  </div>
                </motion.div>


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
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature: string, featureIndex: number) => (
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
                    
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 text-white relative overflow-hidden">

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
                {t('services.custom-solution-title')}
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-lg lg:text-xl">
                {t('services.custom-solution-description')}
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => router.push("/#contact")} className="bg-white text-red-600 px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                  <Zap className="w-5 h-5" />
                  {t('services.discuss-project')}
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
