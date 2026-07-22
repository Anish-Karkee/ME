"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * REACT BITS COMPONENT: AnimatedGrid
 * Location: components/reactbits/AnimatedGrid.tsx
 * Description: Cyberpunk perspective grid overlay with animated glowing scanning beam lines.
 * 
 * Customization Options:
 * - `gridColor`: Border stroke color of grid cells
 * - `beamColor`: Scanning line laser color
 */

interface AnimatedGridProps {
  className?: string;
  gridColor?: string;
  beamColor?: string;
}

export function AnimatedGrid({
  className = "",
  gridColor = "rgba(255, 255, 255, 0.05)",
  beamColor = "rgba(168, 85, 247, 0.4)",
}: AnimatedGridProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 bg-cyber-grid opacity-70"
        style={{
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />

      {/* Horizontal Scanning Beam */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent blur-md pointer-events-none"
      />
    </div>
  );
}
