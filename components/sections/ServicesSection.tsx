"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/portfolioData";
import { Globe, Layout, Server, Layers, Cpu, Smartphone, Cloud, CheckCircle2, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN SERVICES SECTION:
 * - SpotlightCard (for glowing service cards with feature list checks)
 */

export function ServicesSection() {
  const getServiceIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-cyan-400" };
    switch (iconName) {
      case "Globe": return <Globe {...iconProps} />;
      case "Layout": return <Layout {...iconProps} />;
      case "Server": return <Server {...iconProps} />;
      case "Layers": return <Layers {...iconProps} />;
      case "Cpu": return <Cpu {...iconProps} />;
      case "Smartphone": return <Smartphone {...iconProps} />;
      case "Cloud": return <Cloud {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="purple" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Offerings
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Services & <span className="text-gradient-purple-cyan">Solutions</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            High-end full stack software engineering tailored for startups, businesses, and modern web products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between p-8 hover:-translate-y-1 transition-all duration-300 border-white/10 hover:border-cyan-500/40">
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-md shadow-cyan-500/20">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Check List */}
                  <ul className="space-y-2.5 border-t border-white/10 pt-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
