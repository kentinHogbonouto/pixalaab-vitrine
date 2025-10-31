"use client";

import { HeroSection } from "@/components/ui/HeroSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { WhyChooseUsSection } from "@/components/ui/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/ui/Footer";
import { RealizationsSection } from "@/components/ui/RealizationsSection";

export default function SimpleLandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <RealizationsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
