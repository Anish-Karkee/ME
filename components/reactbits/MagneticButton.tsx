"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * REACT BITS COMPONENT: MagneticButton
 * Location: components/reactbits/MagneticButton.tsx
 * Description: Interactive magnetic cursor pull effect for high-priority CTA buttons.
 * 
 * Customization Options:
 * - `magneticStrength`: Sensitivity coefficient (default: 0.35)
 * - `className`: Styling classes for gradients, paddings, borders
 */

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
  asChild?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  magneticStrength = 0.35,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * magneticStrength, y: middleY * magneticStrength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-md transition-all duration-300 hover:bg-zinc-100 active:scale-95 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}
