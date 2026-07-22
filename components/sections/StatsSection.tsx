"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/constants/portfolioData";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { GradientText } from "@/components/reactbits/GradientText";

/**
 * REACT BITS USED IN STATS SECTION:
 * - GradientText (for animated numbers)
 * - SpotlightCard (for stat metric containers)
 */

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <SpotlightCard key={stat.label} className="text-center p-8 flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                {inView ? (
                  <GradientText colors={["#ffffff", "#c084fc", "#06b6d4"]}>
                    <CountUp end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </GradientText>
                ) : (
                  <span className="text-white">0{stat.suffix}</span>
                )}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{stat.label}</h3>
              <p className="text-xs text-zinc-400">{stat.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
