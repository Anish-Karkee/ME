"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_SKILLS } from "@/constants/portfolioData";
import { Cpu } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

// Import Brand Icons from react-icons/si
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiReacthookform,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiNodemon,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiGooglecloud,
  SiCloudflare,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiCanvas,
  SiWordpress,
  SiChartdotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

/**
 * REACT BITS USED IN TECH STACK SECTION:
 * - SpotlightCard (with individual brand glow color & percentage indicator)
 */

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "Tools"];

  const renderIcon = (iconName: string, color: string) => {
    const iconProps = { className: "w-7 h-7 transition-transform group-hover:scale-110", style: { color } };
    switch (iconName) {
      case "SiHtml5": return <SiHtml5 {...iconProps} />;
      case "SiCss3":
      case "SiCss": return <SiCss {...iconProps} />;
      case "SiJavascript": return <SiJavascript {...iconProps} />;
      case "SiTypescript": return <SiTypescript {...iconProps} />;
      case "SiReact": return <SiReact {...iconProps} />;
      case "SiNextdotjs": return <SiNextdotjs {...iconProps} />;
      case "SiRedux": return <SiRedux {...iconProps} />;
      case "SiReactquery": return <SiReactquery {...iconProps} />;
      case "SiReacthookform": return <SiReacthookform {...iconProps} />;
      case "SiReactrouter": return <SiReactrouter {...iconProps} />;
      case "SiTailwindcss": return <SiTailwindcss {...iconProps} />;
      case "SiBootstrap": return <SiBootstrap {...iconProps} />;
      case "SiSass": return <SiSass {...iconProps} />;
      case "SiVite": return <SiVite {...iconProps} />;
      case "SiNodedotjs": return <SiNodedotjs {...iconProps} />;
      case "SiExpress": return <SiExpress {...iconProps} />;
      case "SiNodemon": return <SiNodemon {...iconProps} />;
      case "SiMongodb": return <SiMongodb {...iconProps} />;
      case "SiPostgresql": return <SiPostgresql {...iconProps} />;
      case "SiFirebase": return <SiFirebase {...iconProps} />;
      case "SiPrisma": return <SiPrisma {...iconProps} />;
      case "SiAmazonwebservices":
      case "FaAws": return <FaAws {...iconProps} />;
      case "SiGooglecloud": return <SiGooglecloud {...iconProps} />;
      case "SiCloudflare": return <SiCloudflare {...iconProps} />;
      case "SiVercel": return <SiVercel {...iconProps} />;
      case "SiRender": return <SiRender {...iconProps} />;
      case "SiGit": return <SiGit {...iconProps} />;
      case "SiGithub": return <SiGithub {...iconProps} />;
      case "SiPostman": return <SiPostman {...iconProps} />;
      case "SiFigma": return <SiFigma {...iconProps} />;
      case "SiCanva":
      case "SiCanvas": return <SiCanvas {...iconProps} />;
      case "SiWordpress": return <SiWordpress {...iconProps} />;
      case "SiChartdotjs": return <SiChartdotjs {...iconProps} />;
      default: return <Cpu {...iconProps} />;
    }
  };

  const filteredSkills = activeCategory === "All"
    ? TECH_SKILLS
    : TECH_SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="cyan" className="mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Tech Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-purple-cyan">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of tools, frameworks, and technologies I work with daily.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-zinc-900 shadow-md"
                  : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  spotlightColor={`${skill.color}25`}
                  className="group relative flex flex-col items-start justify-between h-44 p-5 hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <div className="w-full flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20">
                      {renderIcon(skill.iconName, skill.color)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
