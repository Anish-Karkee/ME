"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/portfolioData";
import { FolderGit2, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN PROJECTS SECTION:
 * - SpotlightCard (for interactive project showcase cards with hover blur & image zoom)
 */

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="cyan" className="mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient-purple-cyan">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            A showcase of production web applications, open-source software, and enterprise solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-white text-zinc-900 shadow-md"
                  : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard className="group h-full flex flex-col justify-between p-0 overflow-hidden border border-white/10 bg-[#101018]/80 hover:border-purple-500/40 shadow-xl">
                  
                  {/* Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#101018] via-transparent to-transparent opacity-80" />

                    {/* Overlay Action Buttons */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-cyan-500 text-white hover:scale-110 transition-transform shadow-lg shadow-cyan-500/40"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-white/20 text-white hover:scale-110 transition-transform backdrop-blur-md"
                        aria-label="GitHub Repository"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-6 flex flex-col justify-between grow">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Tags & Links */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                        >
                          <SiGithub className="w-4 h-4" />
                          <span>Code</span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
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
