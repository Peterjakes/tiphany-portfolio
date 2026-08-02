import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { IMG } from "../images";

// Shared fade-up animation variant, consistent across all sections
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Small decorative sticker used to scatter playful thumbs-up icons
// around the section — position/rotation passed per instance
function ThumbsUpSticker({ className = "", rotate = 0 }) {
  return (
    <span
      className={`pointer-events-none absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <ThumbsUp className="h-5 w-5" />
    </span>
  );
}

export function ThankYou() {
  return (
    <motion.section
      id="thanks"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="relative flex min-h-screen flex-col justify-center px-6 py-10 md:px-12"
    >
      <ThumbsUpSticker className="left-10 top-16" rotate={-15} />
      <ThumbsUpSticker className="right-10 top-24" rotate={12} />
      <ThumbsUpSticker className="bottom-32 left-1/3" rotate={6} />

      {/* Big closing headline fades up; photo scales/slides in
          independently once it enters the viewport */}
      <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1.6fr_1fr]">
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(4rem,16vw,14rem)] font-black uppercase leading-[0.85] text-brand"
        >
          THANK
          <br />
          YOU
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:-ml-24"
        >
          <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[3rem]">
            <img src={IMG.sunlitSmile} alt="" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Closing call-to-action pill */}
      <motion.div
        variants={fadeUp}
        className="mt-8 text-center font-display text-lg font-black uppercase md:text-2xl"
      >
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
          LET'S CREATE GREAT CONTENT TOGETHER!
        </span>
      </motion.div>

      {/* Contact bar — email, handle, and Instagram link */}
      <motion.div
        variants={fadeUp}
        className="mt-auto flex flex-col items-center justify-between gap-3 rounded-2xl bg-ink px-6 py-4 text-paper md:flex-row"
      >
        
        <a
          href="mailto:tiphy.waweru2002@gmail.com"
          className="text-xs font-semibold uppercase tracking-wider hover:text-brand"
        >
          tiphy.waweru2002@gmail.com
        </a>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        <span className="text-xs font-semibold uppercase tracking-wider">@wawer.u._</span>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        <a
          href="https://instagram.com/wawer.u._"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-wider hover:text-brand"
        >
          Instagram →
        </a>
      </motion.div>
    </motion.section>
  );
}