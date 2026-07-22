"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO, NAV_LINKS } from "@/constants/portfolioData";
import { Mail, ArrowUp, Sparkles } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#07070a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4">
              <span className="text-white font-extrabold">{PERSONAL_INFO.name}</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Full Stack Developer specializing in high-performance web applications, modern UI/UX design, and cloud architecture.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location & Status */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Base Location
            </h4>
            <p className="text-sm font-semibold text-white mb-2">{PERSONAL_INFO.location}</p>
            <p className="text-xs text-zinc-400 mb-6">Open for remote opportunities worldwide.</p>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all cursor-pointer group"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-purple-400 font-semibold">Next.js 15 & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
