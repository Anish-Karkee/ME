# React Bits Setup & Customization Guide

This document provides a complete overview of all **React Bits** animated components integrated into Anish Pokharel's Personal Portfolio website.

---

## 1. Components Used & File Locations

| React Bits Component | File Location | Used In File | Purpose |
|---|---|---|---|
| **AuroraBackground** | `components/reactbits/AuroraBackground.tsx` | `app/page.tsx` | Animated glowing gradient background mesh |
| **ParticlesBackground** | `components/reactbits/ParticlesBackground.tsx` | `app/page.tsx` | Interactive HTML5 canvas floating particle node field |
| **SpotlightCard** | `components/reactbits/SpotlightCard.tsx` | `AboutSection`, `TechStackSection`, `ServicesSection`, `ProjectsSection`, `ExperienceSection`, `CertificatesSection`, `StatsSection`, `TestimonialsSection`, `ContactSection` | Mouse-tracking spotlight container with radial glowing borders |
| **MagneticButton** | `components/reactbits/MagneticButton.tsx` | `HeroSection`, `ContactSection`, `Navbar` | Magnetic cursor pull effect for high-priority CTA buttons |
| **GradientText** | `components/reactbits/GradientText.tsx` | `HeroSection`, `AboutSection`, `TechStackSection`, `StatsSection` | Shimmering multi-color animated title text |
| **RevealText** | `components/reactbits/RevealText.tsx` | `AboutSection` | Framer Motion staggered letter reveal text on scroll |
| **AnimatedGrid** | `components/reactbits/AnimatedGrid.tsx` | `app/page.tsx` | Futuristic cyber grid background with scanning laser lines |
| **BlurCard** | `components/reactbits/BlurCard.tsx` | `AboutSection` | Glassmorphic backdrop blur container card |
| **NoiseOverlay** | `components/reactbits/NoiseOverlay.tsx` | `app/layout.tsx` | Tactile dark noise texture overlay |
| **LightRays** | `components/reactbits/LightRays.tsx` | `HeroSection` | Top ambient light beam effect |

---

## 2. Dependencies & Installation Command

All React Bits components rely on standard client-side Web APIs and motion primitives. If building in a fresh environment, run:

```bash
npm install framer-motion lucide-react react-icons clsx tailwind-merge react-intersection-observer react-countup embla-carousel-react canvas-confetti --legacy-peer-deps
```

---

## 3. How to Customize Colors & Behavior

### Customizing AuroraBackground
Open `components/reactbits/AuroraBackground.tsx`:
- Modify the hex colors inside `--aurora`:
  ```tsx
  [--aurora:repeating-linear-gradient(100deg,#a855f7_10%,#3b82f6_15%,#06b6d4_20%,#c084fc_25%,#60a5fa_30%)]
  ```
- Change speed by altering `duration: 18` in the `animate` motion block.

### Customizing SpotlightCard
Open `components/reactbits/SpotlightCard.tsx`:
- Pass custom `spotlightColor` prop when invoking:
  ```tsx
  <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.25)">
    {/* Card Content */}
  </SpotlightCard>
  ```

### Customizing ParticlesBackground
Open `app/page.tsx` where `ParticlesBackground` is mounted:
- Adjust particle density (`quantity`) or color:
  ```tsx
  <ParticlesBackground quantity={90} color="#06b6d4" />
  ```

### Customizing GradientText
Modify color stops via `colors` prop:
```tsx
<GradientText colors={["#ffffff", "#a855f7", "#06b6d4", "#ffffff"]}>
  ANISH POKHAREL
</GradientText>
```

### Customizing MagneticButton
Adjust pull friction strength using `magneticStrength`:
```tsx
<MagneticButton magneticStrength={0.4}>
  Click Me
</MagneticButton>
```

---

## 4. How to Replace a Component

If you want to swap a React Bits component (e.g. replace `AuroraBackground` with a simple dark background):

1. Go to `app/page.tsx`
2. Remove the import:
   ```tsx
   // Remove this line
   import { AuroraBackground } from "@/components/reactbits/AuroraBackground";
   ```
3. Replace the JSX tag `<AuroraBackground />` with a standard div or custom element.

---

## 5. How to Completely Remove React Bits

If you wish to remove all React Bits effects entirely:
1. Delete the `components/reactbits/` directory:
   ```bash
   rm -rf components/reactbits
   ```
2. Remove all component imports inside `app/page.tsx` and section components (`HeroSection`, `AboutSection`, etc.).
3. Replace `<SpotlightCard>` with standard `<div className="glass-panel p-6 rounded-2xl">`.
