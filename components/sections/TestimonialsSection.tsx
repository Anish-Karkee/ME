"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/constants/portfolioData";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Badge } from "@/components/ui/Badge";

/**
 * REACT BITS USED IN TESTIMONIALS SECTION:
 * - SpotlightCard (for testimonial cards with star ratings & client quotes)
 */

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

 useEffect(() => {
  if (!emblaApi) return;

  emblaApi.on("select", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="purple" className="mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Client Feedback
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Testimonials & <span className="text-gradient-purple-cyan">Endorsements</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            What clients, team leads, and product founders say about collaborating with me.
          </p>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((test) => (
                <div key={test.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%]">
                  <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full border border-white/15 bg-[#10101a]/90 shadow-2xl">
                    <div>
                      {/* Quote Icon & Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <Quote className="w-8 h-8 text-cyan-400 opacity-60" />
                        <div className="flex items-center gap-1">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Quote Content */}
                      <p className="text-base sm:text-lg text-zinc-200 italic leading-relaxed mb-8">
                        {test.quote}
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/40">
                        <Image
                          src={test.avatar}
                          alt={test.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-white">{test.name}</h3>
                        <p className="text-xs text-zinc-400">
                          {test.role} at <span className="text-cyan-400">{test.company}</span>
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    selectedIndex === idx ? "w-8 bg-cyan-400" : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
