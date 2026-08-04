import { motion } from "framer-motion";
import { Camera } from "lucide-react";

// Shared fade-up entrance animation used across every section's text content
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Wraps fadeUp children with a staggered delay so they animate in sequence
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// Base full height section wrapper — handles the scrollsnap container,
// background, padding, and triggers the stagger animation once in view
export function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className={`snap-section relative flex min-h-screen w-full flex-col overflow-hidden bg-paper px-6 py-12 md:px-16 md:py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// Image slot with a camera-icon fallback when no src is provided yet
export function PhotoPlaceholder({ className = "", label, style, rounded = "rounded-3xl", src, alt, objectPosition }) {
  return (
    <div
      style={style}
      className={`relative flex items-center justify-center overflow-hidden bg-[oklch(0.86_0.005_60)] ${rounded} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label ?? "Tiphany W."}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: objectPosition ?? "center" }}
        />
      ) : (
        <Camera className="h-10 w-10 text-[oklch(0.55_0.005_60)]" strokeWidth={1.5} />
      )}
      {label && !src && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-[oklch(0.45_0.005_60)]">
          {label}
        </span>
      )}
    </div>
  );
}

/** Hand-drawn blue oval outline wrapping inline text */
export function BlueOval({ children, className = "" }) {
  return (
    <span className={`relative inline-block px-5 py-1 ${className}`}>
      <svg aria-hidden viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <ellipse
          cx="100"
          cy="30"
          rx="94"
          ry="24"
          fill="none"
          stroke="var(--scribble)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="0"
          style={{ filter: "url(#wobble)" }}
        />
        <defs>
          <filter id="wobble">
            <feTurbulence baseFrequency="0.04" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

export function OrangePill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground ${className}`}>
      {children}
    </span>
  );
}

// Decorative thumbs-up sticker that springs in and settles at a rotated angle
export function ThumbsUpSticker({ className = "", rotate = -8 }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 20 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
      className={`pointer-events-none absolute flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M2 21h4V9H2v12zm20-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 1 7.59 6.59C7.22 6.95 7 7.45 7 8v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1z" />
      </svg>
    </motion.div>
  );
}