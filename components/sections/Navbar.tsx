"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO, NAV_LINKS } from "@/constants/portfolioData";
import { Mail, Menu, X, Sun, Moon, FileDown, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MagneticButton } from "@/components/reactbits/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-2xl shadow-purple-950/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="group flex items-center gap-2 text-xl font-bold tracking-tight">
          
          <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {PERSONAL_INFO.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 rounded-full shadow-sm shadow-purple-500/30"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Social Icons & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a href="#hero">
            <button className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl hover:opacity-90 shadow-md shadow-purple-500/20 transition-all">
              Resume
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-zinc-300 hover:text-white rounded-xl border border-white/10 bg-white/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-white/10 overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2">
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white p-2">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-400 hover:text-white p-2">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
