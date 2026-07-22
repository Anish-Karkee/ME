"use client";

import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATES } from "@/constants/portfolioData";
import { Award, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN CERTIFICATES SECTION:
 * - SpotlightCard (for credential cards with verification links & badge glows)
 */

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="cyan" className="mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Qualifications
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications & <span className="text-gradient-purple-cyan">Achievements</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Industry recognized cloud and full stack certifications validating expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between p-8 border border-white/10 hover:border-purple-500/40">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.badgeColor} p-0.5 shadow-lg shadow-purple-500/20`}>
                        <div className="w-full h-full rounded-[14px] bg-[#0d0d14] flex items-center justify-center">
                          <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-cyan-400">{cert.issuer}</span>
                        <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-zinc-400 mb-6">
                    Credential ID: <span className="text-zinc-200">{cert.credentialId}</span>
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Official Certificate Verified
                  </span>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
