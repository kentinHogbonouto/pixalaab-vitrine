"use client";

import { Button } from "./Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pixalaab
            </span>
            <br />
            <span className="text-white">Technologie</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transformez votre vision digitale en réalité. 
            <span className="text-cyan-400 font-semibold"> Développement web</span>, 
            <span className="text-cyan-400 font-semibold"> applications mobiles</span> et 
            <span className="text-cyan-400 font-semibold"> transformation digitale </span> 
            pour propulser votre entreprise vers l&apos;avenir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Demander un devis gratuit
            </Button>
            </a>
            <a href="#services">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Découvrir nos services
            </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24h</div>
              <div className="text-gray-400">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Illustration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#techGradient)" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" fill="url(#techGradient)" opacity="0.2"/>
          <circle cx="100" cy="100" r="40" fill="url(#techGradient)" opacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}
