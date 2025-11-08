"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Home, ArrowRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";

export default function NotFoundClient() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animation du nombre 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Icône animée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {t('notFound.title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('notFound.description')}
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => router.push('/')}
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                {t('notFound.backHome')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => router.back()}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl transition-all duration-300"
              >
                {t('notFound.goBack')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">{t('notFound.suggestions')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#services"
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-red-500 transition-all duration-300"
              >
                {t('header.services')}
              </Link>
              <Link
                href="/#realisation"
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-red-500 transition-all duration-300"
              >
                {t('header.realizations')}
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-red-500 transition-all duration-300"
              >
                {t('header.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

