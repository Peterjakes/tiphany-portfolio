import { motion } from "framer-motion";
import { IMG } from "../images";

// Shared fade-up animation variant for staggered text entrance
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Role labels shown as pill badges at the top of the hero
const labels = ["CONTENT CREATOR", "STORYTELLER", "DIGITAL MARKETER"];

export function Hero() {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="flex min-h-screen flex-col justify-between px-6 py-10 md:px-12"
    >
      {/* Role badges — fadeUp gives them a subtle staggered entrance */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/70"
      >
        {labels.map((l) => (
          <span key={l} className="rounded-full border border-ink/20 px-3 py-1">
            {l}
          </span>
        ))}
      </motion.div>

      {/* Main headline + photo grid — stacks on mobile, side-by-side on desktop */}
      <div className="relative grid flex-1 grid-cols-1 items-center gap-8 py-8 md:grid-cols-[1.4fr_1fr]">
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div
            variants={fadeUp}
            className="font-display text-sm font-bold uppercase tracking-wider text-ink"
          >
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
              CREATIVE PORTFOLIO
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.5rem,13vw,11rem)] font-black uppercase leading-[0.85] tracking-tight text-brand"
          >
            CONTENT
            <br />
            CREATOR
          </motion.h1>
        </div>

        {/* Profile photo — scales/slides in independently on mount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 aspect-[3/4] w-full max-w-md overflow-hidden rounded-[3rem] md:-ml-24"
        >
          <img
            src={IMG.sunlitTank}
            alt="Tiphany W."
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </motion.div>
      </div>

      {/* Closing tagline + credit line, also fades up with the rest of the text */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <p className="max-w-sm text-sm font-bold uppercase leading-snug text-ink">
          Creating content that connects,
          <br />
          informs, and inspires.
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
          Presentation by Tiphany W.
        </p>
      </motion.div>
    </motion.section>
  );
}