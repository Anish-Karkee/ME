"use client";

import React from "react";
import Galaxy from "@/components/reactbits/Galaxy";
import { ParticlesBackground } from "@/components/reactbits/ParticlesBackground";
import { AnimatedGrid } from "@/components/reactbits/AnimatedGrid";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      
      {/* Background Animated Layer (React Bits Galaxy & Particle canvas) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Galaxy />
        <ParticlesBackground quantity={70} color="#a855f7" />
        <AnimatedGrid />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <StatsSection />
        <TestimonialsSection />
        
        <ContactSection />
        <Footer />
      </div>

    </main>
  );
}
