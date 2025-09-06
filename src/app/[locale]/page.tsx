"use client";

import { HeroSection } from "@/components/ui/HeroSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { WhyChooseUsSection } from "@/components/ui/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { ContactSection } from "@/components/ui/ContactSection";


export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
