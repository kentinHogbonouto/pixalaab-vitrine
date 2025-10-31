"use client";

import { HeroSection } from "@/components/ui/HeroSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { WhyChooseUsSection } from "@/components/ui/WhyChooseUsSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { RealizationsSection } from "@/components/ui/RealizationsSection";


export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <RealizationsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
