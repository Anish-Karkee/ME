"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CODE_EDITOR_DATA, ABOUT_BULLETS } from "@/constants/portfolioData";
import { Copy, Check, Terminal, Code, Zap, Layers, Sparkles, UserCheck } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { RevealText } from "@/components/reactbits/RevealText";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN ABOUT SECTION:
 * - SpotlightCard (for interactive mouse-tracking spotlight around code editor & bullet cards)
 * - RevealText (for section heading entry animation)
 */

export function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const codeString = `const anish = ${JSON.stringify(CODE_EDITOR_DATA, null, 2)};`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap": return <Zap className="w-5 h-5 text-amber-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-cyan-400" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "Code": return <Code className="w-5 h-5 text-emerald-400" />;
      default: return <UserCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="purple" className="mb-3">
            <Terminal className="w-3.5 h-3.5" />
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Architecting <span className="text-gradient-purple-cyan">Digital Solutions</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            A look inside my developer persona, tech stack preferences, and engineering philosophy.
          </p>
        </div>

        {/* Code Editor Styled Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <SpotlightCard className="p-0 overflow-hidden border border-white/15 bg-[#0d0d14]/90 shadow-2xl shadow-purple-950/40">
            {/* VS Code Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161622] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-purple-400" />
                  anish.config.ts
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-400 hover:text-white rounded-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-200">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300">anish</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-zinc-400">&#123;</span>
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">name</span>:{" "}
                <span className="text-emerald-300">"{CODE_EDITOR_DATA.name}"</span>,
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">role</span>:{" "}
                <span className="text-emerald-300">"{CODE_EDITOR_DATA.role}"</span>,
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">location</span>:{" "}
                <span className="text-emerald-300">"{CODE_EDITOR_DATA.location}"</span>,
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">email</span>:{" "}
                <span className="text-emerald-300">"{CODE_EDITOR_DATA.email}"</span>,
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">languages</span>: [
                {CODE_EDITOR_DATA.languages.map((lang, idx) => (
                  <span key={lang}>
                    <span className="text-emerald-300">"{lang}"</span>
                    {idx < CODE_EDITOR_DATA.languages.length - 1 && ", "}
                  </span>
                ))}
                ],
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">frameworks</span>: [
                {CODE_EDITOR_DATA.frameworks.map((fw, idx) => (
                  <span key={fw}>
                    <span className="text-emerald-300">"{fw}"</span>
                    {idx < CODE_EDITOR_DATA.frameworks.length - 1 && ", "}
                  </span>
                ))}
                ],
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">database</span>: [
                {CODE_EDITOR_DATA.database.map((db, idx) => (
                  <span key={db}>
                    <span className="text-emerald-300">"{db}"</span>
                    {idx < CODE_EDITOR_DATA.database.length - 1 && ", "}
                  </span>
                ))}
                ],
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">cloud</span>: [
                {CODE_EDITOR_DATA.cloud.map((c, idx) => (
                  <span key={c}>
                    <span className="text-emerald-300">"{c}"</span>
                    {idx < CODE_EDITOR_DATA.cloud.length - 1 && ", "}
                  </span>
                ))}
                ],
              </div>

              <div className="pl-6 py-1">
                <span className="text-cyan-400">philosophy</span>:{" "}
                <span className="text-amber-300">"{CODE_EDITOR_DATA.philosophy}"</span>
              </div>

              <div>
                <span className="text-zinc-400">&#125;;</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Bullet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_BULLETS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
