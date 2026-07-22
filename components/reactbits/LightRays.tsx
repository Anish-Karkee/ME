"use client";

import React from "react";

/**
 * REACT BITS COMPONENT: LightRays
 * Location: components/reactbits/LightRays.tsx
 * Description: Subtle ambient top light beam effect for hero & feature headings.
 */

export function LightRays({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 -top-40 z-0 flex justify-center overflow-hidden ${className}`}>
      <div className="h-[300px] w-[600px] bg-gradient-to-b from-purple-500/20 via-cyan-500/10 to-transparent blur-[100px] transform -rotate-12 rounded-full" />
    </div>
  );
}
