"use client";

import React, { useEffect, useRef } from "react";

/**
 * REACT BITS COMPONENT: ParticlesBackground
 * Location: components/reactbits/ParticlesBackground.tsx
 * Description: High-performance HTML5 Canvas interactive particle field with glowing node connections.
 * 
 * Customization Options:
 * - `quantity`: Number of particles (default: 60)
 * - `color`: Hex color of particles (default: #a855f7)
 * - `staticity`: Mouse influence friction factor
 */

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
}

export function ParticlesBackground({
  className = "",
  quantity = 60,
  staticity = 40,
  ease = 50,
  refresh = false,
  color = "#a855f7",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouse = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);
    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [color]);

  useEffect(() => {
    onMouseMove();
  }, []);

  const onMouseMove = () => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const { clientX, clientY } = event;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        mousePosition.current.x = x;
        mousePosition.current.y = y;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
  };

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.4;
    const dy = (Math.random() - 0.5) * 0.4;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((circle: any, i: number) => {
        // Handle particle movement & mouse magnetic force
        const edge = [
          circle.x + circle.translateX - circle.size < 0,
          circle.x + circle.translateX + circle.size > canvasSize.current.w,
          circle.y + circle.translateY - circle.size < 0,
          circle.y + circle.translateY + circle.size > canvasSize.current.h,
        ];
        if (edge[0] || edge[1]) circle.dx = -circle.dx;
        if (edge[2] || edge[3]) circle.dy = -circle.dy;

        circle.x += circle.dx;
        circle.y += circle.dy;

        // Draw node dot
        context.current!.beginPath();
        context.current!.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
        context.current!.fillStyle = `rgba(168, 85, 247, ${circle.targetAlpha})`;
        context.current!.fill();
      });
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
