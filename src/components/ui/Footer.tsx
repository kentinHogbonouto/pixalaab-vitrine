"use client";

import { motion } from "framer-motion";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl translate-x-40 translate-y-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
             <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ rotate: -4 }}
                transition={{ duration: 0.8 }}
                className="w-2/3 md:w-1/3 h-full bg-white/10  rounded-lg flex items-center justify-center mr-4 "
              >
                <Image src="/images/logo_removebg.png" alt="Pixalaab" width={1000} height={1000} className="w-full h-full object-top object-cover rounded-2xl" />
              </motion.div>
              <div>
               
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Votre partenaire digital de confiance pour transformer votre vision en réalité. 
              Développement web, applications mobiles et transformation digitale.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-red-300">Nos Services</h3>
            <ul className="space-y-3">
              {[
                "Développement Web",
                "Applications Mobiles",
                "Transformation Digitale",
                "UX/UI Design",
                "Conseil Stratégique"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-red-300 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-red-300">Contact</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "pixalaab@gmail.com" },
                { icon: Phone, text: "+229 01 40 53 19 91" },
                { icon: MapPin, text: "Cotonou, Benin" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-400 text-sm"
                >
                  <contact.icon className="w-4 h-4 mr-3 text-yellow-400 flex-shrink-0" />
                  {contact.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Pixalaab Technologie. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {[
                "Mentions légales",
                "Politique de confidentialité",
                "Conditions d'utilisation"
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-red-300 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
