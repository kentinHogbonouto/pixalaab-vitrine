"use client";

import { Button } from "./Button";
import { Label } from "./Label";
import { SimpleInput } from "./SimpleInput";
import { SimpleTextarea } from "./SimpleTextarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Prêt à <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">transformer</span> votre business ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demander un devis gratuit
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleInput
                  label="Prénom *"
                  type="text"
                  placeholder="Votre prénom"
                  required
                />
                <SimpleInput
                  label="Nom *"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <SimpleInput
                label="Email *"
                type="email"
                placeholder="votre@email.com"
                required
              />

              <SimpleInput
                label="Entreprise"
                type="text"
                placeholder="Nom de votre entreprise"
              />

              <div>
                <Label htmlFor="service" className="text-gray-700 font-semibold">
                  Service souhaité *
                </Label>
                <select 
                  id="service" 
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="web">Développement Web</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="digital">Transformation Digitale</option>
                  <option value="design">UX/UI Design</option>
                  <option value="consulting">Conseil Stratégique</option>
                  <option value="maintenance">Maintenance & Support</option>
                </select>
              </div>

              <div>
                <Label htmlFor="budget" className="text-gray-700 font-semibold">
                  Budget estimé
                </Label>
                <select 
                  id="budget" 
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="5k-10k">5 000€ - 10 000€</option>
                  <option value="10k-25k">10 000€ - 25 000€</option>
                  <option value="25k-50k">25 000€ - 50 000€</option>
                  <option value="50k+">50 000€+</option>
                </select>
              </div>

              <SimpleTextarea
                label="Description du projet *"
                rows={4}
                placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                required
              />

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Recevoir une réponse sous 24h
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-8">
              Contactez-nous
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-gray-300">contact@pixalaab.com</p>
                  <p className="text-sm text-gray-400">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Téléphone</h4>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                  <p className="text-sm text-gray-400">Lun-Ven 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                  <p className="text-gray-300">123 Rue de l&apos;Innovation</p>
                  <p className="text-gray-300">75001 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Réseaux sociaux</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl">
              <h4 className="font-semibold text-lg mb-4">Pourquoi nous faire confiance ?</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Devis gratuit et sans engagement
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Réponse garantie sous 24h
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Confidentialité assurée
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Plus de 150 projets réalisés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
