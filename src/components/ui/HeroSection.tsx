"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { 
  ArrowRight, 
  Users,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations();
  
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                </h1>
          </motion.div>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg"
          >
              {t('hero.description')}
          </motion.p>


          <motion.div
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">
                <Button 
                  size="lg" 
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  {t('hero.cta-primary')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#services">
                <Button 
                  variant="outline" 
                  size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  {t('hero.cta-secondary')}
                </Button>
              </a>
              </motion.div>
            </motion.div>

           
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 mt-8 lg:mt-0"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl transform rotate-3"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
              >
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-50 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-50 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold">{t('hero.active-members')}</span>
              </motion.div>


              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/admin-data.jpg"
                  alt="Développeur mobile travaillant sur son projet"
                  fill
                  className="object-cover object-top"
                  style={{
                    filter: 'sepia(20%) saturate(1.2) hue-rotate(350deg) contrast(1.1)',
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent"></div>
              </div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">{t('hero.projects-in-progress')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-600">{t('hero.dedicated-team')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
