"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/constants/portfolioData";
import { Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { MagneticButton } from "@/components/reactbits/MagneticButton";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN CONTACT SECTION:
 * - MagneticButton (for submit button with magnetic pull)
 * - SpotlightCard (for form container & direct contact info cards)
 */

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#06b6d4", "#3b82f6", "#ffffff"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="cyan" className="mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&ap0s;s Build Something <span className="text-gradient-purple-cyan">Amazing</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Have a project in mind, a freelance inquiry, or just want to connect? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Direct Email</h3>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Location</h3>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-4">
                  Connect on Socials
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
                    aria-label="GitHub Profile"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
                    aria-label="Twitter Profile"
                  >
                    <SiX className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Response Time Card */}
            <SpotlightCard className="p-6 bg-linear-to-r from-purple-950/40 to-cyan-950/40 border-purple-500/30">
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-sm font-bold text-white">Fast Response Guaranteed</h4>
                  <p className="text-xs text-zinc-400">Usually responding within 12-24 business hours.</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 border border-white/15">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mb-8">
                    Thank you for reaching out. I&apos;ll review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Frontend Development"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, timeline, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <MagneticButton type="submit" disabled={loading} className="w-full sm:w-auto">
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
