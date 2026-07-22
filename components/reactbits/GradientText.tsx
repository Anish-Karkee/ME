"use client";

import React from "react";

/**
 * REACT BITS COMPONENT: GradientText
 * Location: components/reactbits/GradientText.tsx
 * Description: Animated multi-color gradient text element with smooth shimmer keyframes.
 * 
 * Customization Options:
 * - `colors`: Array of hex/HSL color strings
 * - `animationSpeed`: Duration of gradient cycle in seconds
 */

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export function GradientText({
  children,
  className = "",
  colors = ["#ffffff", "#a855f7", "#06b6d4", "#3b82f6", "#ffffff"],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `gradientShift ${animationSpeed}s ease infinite`,
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <span style={gradientStyle} className={`inline-block font-extrabold tracking-tight ${className}`}>
        {children}
      </span>
    </>
  );
}
