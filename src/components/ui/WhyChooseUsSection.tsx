"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  Rocket, 
  Shield, 
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface IAdvantage {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface IStat {
  number: string;
  label: string;
}

interface IProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ITranslationHook {
  (key: string): string;
}

const getAdvantages = (t: ITranslationHook): IAdvantage[] => [
  {
    icon: Target,
    title: t('why-choose-us.expertise.title'),
    description: t('why-choose-us.expertise.description'),
    color: "from-red-500 to-red-600"
  },
  {
    icon: Zap,
    title: t('why-choose-us.modern-technologies.title'),
    description: t('why-choose-us.modern-technologies.description'),
    color: "from-yellow-400 to-yellow-500"
  },
  {
    icon: Rocket,
    title: t('why-choose-us.fast-delivery.title'),
    description: t('why-choose-us.fast-delivery.description'),
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Shield,
    title: t('why-choose-us.guaranteed-quality.title'),
    description: t('why-choose-us.guaranteed-quality.description'),
    color: "from-red-500 to-red-600"
  }
];

const getStats = (t: ITranslationHook): IStat[] => [
  { number: "25+", label: t('why-choose-us.stats.projects-completed') },
  { number: "98%", label: t('why-choose-us.stats.satisfied-clients') },
  { number: "24h", label: t('why-choose-us.stats.response-time') },
  { number: "2+", label: t('why-choose-us.stats.years-experience') }
];

const getProcessSteps = (t: ITranslationHook): IProcessStep[] => [
  {
    step: 1,
    title: t('why-choose-us.process.discovery.title'),
    description: t('why-choose-us.process.discovery.description'),
    icon: Target
  },
  {
    step: 2,
    title: t('why-choose-us.process.conception.title'),
    description: t('why-choose-us.process.conception.description'),
    icon: Zap
  },
  {
    step: 3,
    title: t('why-choose-us.process.development.title'),
    description: t('why-choose-us.process.development.description'),
    icon: Rocket
  },
  {
    step: 4,
    title: t('why-choose-us.process.delivery.title'),
    description: t('why-choose-us.process.delivery.description'),
    icon: CheckCircle
  }
];

export function WhyChooseUsSection() {
  const t = useTranslations();
  const advantages = getAdvantages(t);
  const stats = getStats(t);
  const processSteps = getProcessSteps(t);
  
  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-br from-white to-red-50">
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
            <Target className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('why-choose-us.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('why-choose-us.subtitle')}
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
              <div className="relative h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/senior-citizens.jpg" 
                  alt="Développement mobile" 
                  fill
                  className="object-cover"
                  style={{
                    filter: 'sepia(20%) saturate(1.2) hue-rotate(350deg) contrast(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">{t('why-choose-us.in-development')}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-100 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <advantage.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 text-white mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/60 rounded-3xl mb-6 backdrop-blur-sm"
              >
                <TrendingUp className="w-10 h-10 text-yellow-500" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4 text-red-500">
                {t('why-choose-us.key-figures')}
              </h3>
              <p className="text-gray-600 text-lg">
                {t('why-choose-us.key-figures-subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-red-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            {t('why-choose-us.methodology')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
