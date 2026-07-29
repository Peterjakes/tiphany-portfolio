import { motion } from "framer-motion";
import { IMG } from "../images";

// Shared fade-up animation variant, consistent with Hero.jsx and About.jsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Social channel data — each entry drives one card in the grid below
const channels = [
  { handle: "@wawer.u._", platform: "Instagram", count: "8K+", img: IMG.blazer },
  { handle: "@wawer.u._", platform: "TikTok", count: "12K+", img: IMG.nails },
  { handle: "@wawer.u._", platform: "YouTube", count: "2K+", img: IMG.event },
  { handle: "@wawer.u._", platform: "Twitter / X", count: "1K+", img: IMG.beach },
];

export function Social() {
  return (
    <motion.section
      id="social"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="relative flex min-h-screen flex-col px-6 py-10 md:px-12"
    >
      {/* Decorative vertical line marker on the left, purely visual */}
      <div className="absolute left-6 top-1/4 flex flex-col items-center gap-2 md:left-12">
        <span className="h-6 w-6 rounded-full bg-ink" />
        <span className="h-64 w-1.5 rounded-full bg-brand" />
      </div>

      {/* Section heading, fades up on scroll into view */}
      <motion.h2
        variants={fadeUp}
        className="ml-16 font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand md:ml-24"
      >
        SOCIAL MEDIA
        <br />
        CHANNELS
      </motion.h2>

      {/* Follow / Message call-to-action buttons */}
      <motion.div variants={fadeUp} className="ml-16 mt-6 flex gap-3 md:ml-24">
        <button className="rounded-full bg-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-brand-foreground">
          Follow
        </button>
        <button className="rounded-full bg-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-brand-foreground">
          Message
        </button>
      </motion.div>

      {/* Channel cards — each card fades up individually, staggered via
          the parent section's staggerChildren */}
      <div className="mt-auto grid grid-cols-2 gap-8 pt-10 md:grid-cols-4">
        {channels.map((c) => (
          <motion.div
            key={c.platform}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <div className="aspect-square w-full max-w-[180px] overflow-hidden rounded-full ring-4 ring-brand ring-offset-4 ring-offset-paper">
              <img src={c.img} alt={c.platform} className="h-full w-full object-cover" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/70">
              {c.platform}
            </p>
            <p className="text-sm font-bold text-ink">{c.handle}</p>
            <p className="font-display text-3xl font-black text-brand">{c.count}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}