"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * REACT BITS COMPONENT: BlurCard
 * Location: components/reactbits/BlurCard.tsx
 * Description: Premium frosted glass backdrop card with micro-hover scaling and glowing borders.
 */

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function BlurCard({ children, className = "", glowColor = "hover:border-cyan-500/40" }: BlurCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative rounded-2xl border border-white/10 bg-[#12121a]/60 p-6 backdrop-blur-xl transition-all duration-300 ${glowColor} shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
