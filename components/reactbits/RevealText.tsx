"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

/**
 * REACT BITS COMPONENT: RevealText
 * Location: components/reactbits/RevealText.tsx
 * Description: Framer Motion staggered letter reveal text for headings & subheadings on scroll.
 * 
 * Customization Options:
 * - `text`: String to animate
 * - `delay`: Delay before animation starts in seconds
 * - `stagger`: Stagger delay between characters
 */

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function RevealText({ text, className = "", delay = 0, stagger = 0.03 }: RevealTextProps) {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
