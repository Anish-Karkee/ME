"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * REACT BITS COMPONENT: AuroraBackground
 * Location: components/reactbits/AuroraBackground.tsx
 * Description: Ambient animated glowing gradient aura background inspired by Apple/Vercel hero sections.
 * 
 * Customization Options:
 * - Change gradient colors in radial-gradient definitions (purple #a855f7, cyan #06b6d4, blue #3b82f6)
 * - Adjust blur intensity via `blur-[80px]` or `blur-[120px]`
 * - Pass `children` to wrap Hero or top content
 */

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen bg-[#09090b] text-zinc-50 transition-colors ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#a855f7_10%,#3b82f6_15%,#06b6d4_20%,#c084fc_25%,#60a5fa_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%_200%]
            [background-position:50%_50%]
            filter blur-[90px] opacity-40
            absolute -inset-[10px]
            will-change-transform
          "
        >
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
