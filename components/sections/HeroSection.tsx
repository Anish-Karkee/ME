"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/constants/portfolioData";
import { FileDown, Send, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { MagneticButton } from "@/components/reactbits/MagneticButton";
import TrueFocus from "@/components/reactbits/TrueFocus";
import { LightRays } from "@/components/reactbits/LightRays";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN HERO SECTION:
 * - GradientText (for high impact animated glowing headline)
 * - LightRays (for top ambient lighting effect)
 * - MagneticButton (for interactive primary CTAs)
 */

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <LightRays />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability & Location Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="glow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for New Projects
              </Badge>

              <Badge
                variant="outline"
                className="text-zinc-300 border-white/10"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </Badge>
            </div>

            {/* Subtitle Role */}
            <p className="text-sm sm:text-base font-semibold tracking-widest text-cyan-400 uppercase mb-2">
              {PERSONAL_INFO.role}
            </p>

            {/* Large Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]  ">
              <TrueFocus
                text={PERSONAL_INFO.name}
                colors={["#ffffff", "#c084fc", "#06b6d4", "#ffffff"]}
              />
            </h1>

            {/* Short Introduction */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              "{PERSONAL_INFO.bioShort}"
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Download Resume Button */}
              <a href={PERSONAL_INFO.resumeUrl} download>
                <MagneticButton magneticStrength={0.25} className="group">
                  <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                </MagneticButton>
              </a>

              {/* Contact Me Button */}
              <Link href="#contact">
                <button className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md text-sm font-semibold text-white flex items-center gap-2 shadow-lg hover:border-purple-500/40 transition-all duration-300">
                  <Send className="w-4 h-4 text-zinc-300" />
                  <span>Contact Me</span>
                </button>
              </Link>

              {/* GitHub Button */}
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
                <button className="p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md text-zinc-300 hover:text-white transition-all">
                  <SiGithub className="w-5 h-5" />
                </button>
              </a>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="pt-6 border-t border-white/10 w-full flex items-center gap-6 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">
                Core Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300">
                  Next.js 15
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-blue-300">
                  Node.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Editable Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-white/5 opacity-60 blur-2xl group-hover:opacity-90 transition-opacity duration-500" />

              {/* Glassmorphic Frame Container */}
              <div className="relative w-full h-full rounded-3xl p-3 border border-white/15 bg-[#12121a]/80 backdrop-blur-2xl shadow-2xl shadow-purple-950/50 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                  {/* EDITABLE IMAGE LOCATION: /public/images/profile.png */}
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Micro Badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium">Full Stack Architect</span>
                    </div>
                    <span className="text-zinc-400 text-[10px]">Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <Link href="#about" aria-label="Scroll Down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
