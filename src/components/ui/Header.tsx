'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Mail, Wrench, Quote, Award, Globe } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };


  return (
    <header className={`bg-[#FF3130] backdrop-blur-sm border-b border-slate-200/60 shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/images/logo.png" alt="PixaLaab" width={500} height={500} className="w-[7rem] h-full object-top object-cover" />
              
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100"
            >
              <Home className="w-4 h-4" />
              {t('header.home')}
            </Link>
            <Link 
              href="#services" 
              className="flex items-center gap-2 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100"
            >
              <Wrench className="w-4 h-4" />
              {t('header.services')}
            </Link>
           
            <Link 
              href="#why-choose-us" 
              className="flex items-center gap-2 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100"
            >
              <Award className="w-4 h-4" />
              {t('header.why-choose-us')}
            </Link>

            <Link 
              href="#testimonials"  
              className="flex items-center gap-2 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100"
            >
              <Quote className="w-4 h-4" />
              {t('header.testimonials')}
            </Link>

           
            <Link 
              href="#contact" 
              className="flex items-center gap-2 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100"
            >
              <Mail className="w-4 h-4" />
              {t('header.contact')}
            </Link>


            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <select 
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer"
                defaultValue={pathname.split('/')[1] || 'fr'}
              >
                <option value="fr" className="bg-gray-800 text-white">FR</option>
                <option value="en" className="bg-gray-800 text-white">EN</option>
              </select>
            </div>

          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-yellow-500 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="flex items-center gap-3 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                {t('header.home')}
              </Link>

              <Link 
                href="#services" 
                className="flex items-center gap-3 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Wrench className="w-5 h-5" />
                {t('header.services')}
              </Link>
             

              <Link 
                href="#why-choose-us" 
                className="flex items-center gap-3 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Award className="w-5 h-5" />
                {t('header.why-choose-us')}
              </Link>

              <Link 
                href="#testimonials" 
                className="flex items-center gap-3 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Quote className="w-5 h-5" />
                {t('header.testimonials')}
              </Link>

              <Link 
                href="#contact" 
                className="flex items-center gap-3 text-white hover:text-slate-900 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                {t('header.contact')}
              </Link>


              <div className="flex items-center gap-3 text-white px-3 py-2">
                <Globe className="w-5 h-5" />
                <select 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-white border-none outline-none cursor-pointer"
                  defaultValue={pathname.split('/')[1] || 'fr'}
                >
                  <option value="fr" className="bg-gray-800 text-white">FR</option>
                  <option value="en" className="bg-gray-800 text-white">EN</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 