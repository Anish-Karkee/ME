"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants/portfolioData";
import { Briefcase, MapPin } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN EXPERIENCE SECTION:
 * - SpotlightCard (for animated timeline node cards)
 */

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="purple" className="mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-gradient-purple-cyan">Experience</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            My engineering trajectory, full stack projects led, and organizational impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-purple-500/30 ml-4 sm:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-4.25 top-1.5 w-8 h-8 rounded-full bg-[#09090b] border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Date pill on left for desktop */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {exp.period}
                </span>
              </div>

              <SpotlightCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-purple-400 flex items-center gap-2 mt-1">
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 text-xs font-normal flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  {exp.isCurrent && (
                    <Badge variant="glow" className="text-[10px]">
                      Present Role
                    </Badge>
                  )}

                  {/* Mobile date pill */}
                  <div className="sm:hidden w-full mt-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Descriptions Bullet Points */}
                <ul className="space-y-2 mb-6 text-sm text-zinc-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
