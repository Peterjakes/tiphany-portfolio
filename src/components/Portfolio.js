import { motion } from "framer-motion";
import { Eye, Heart, MessageCircle } from "lucide-react";
import { Section, PhotoPlaceholder, fadeUp } from "./primitivies";
import { IMG } from "./images";

// Featured content pieces with engagement stats for each
const cards = [
  { label: "DAY IN MY LIFE", views: "42K", likes: "5.1K", comments: "320", img: IMG.beach },
  { label: "PRODUCT REVIEW", views: "28K", likes: "3.8K", comments: "210", img: IMG.beauty1 },
  { label: "MINI VLOG", views: "61K", likes: "7.4K", comments: "540", img: IMG.event },
];

// Small pill showing one engagement stat (views/likes/comments) with an icon
function Stat({ icon, value }) {
  return (
    <span className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-brand px-2 py-1 text-[10px] font-bold text-brand-foreground">
      {icon}
      {value}
    </span>
  );
}

export function Portfolio() {
  return (
    <Section id="portfolio">
      {/* Heading + "Performance Highlights" tag */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand"
        >
          CONTENT
          <br />
          PORTFOLIO
        </motion.h2>
        <motion.span
          variants={fadeUp}
          className="rounded-full bg-[oklch(0.85_0.07_245)] px-5 py-2 text-xs font-bold uppercase tracking-widest text-ink"
        >
          Performance Highlights
        </motion.span>
      </div>

      {/* Content cards row — decorative filler blocks on either end at
          desktop width give the row a "carousel" feel without needing
          actual scroll/carousel logic. Each card fades up on scroll with
          a staggered delay per index, plus a subtle lift-on-hover */}
      <div className="relative mt-10 flex flex-1 items-center justify-center gap-5 overflow-hidden">
        <div className="hidden h-[60%] w-24 shrink-0 rounded-[2rem] bg-[oklch(0.86_0.005_60)] opacity-50 md:block" />
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            variants={fadeUp}
            whileHover={{
              y: -8,
            }}
            transition={{
              delay: i * 0.1,
            }}
            className="flex w-full max-w-[260px] flex-1 flex-col gap-3 rounded-[2rem] bg-paper p-4 shadow-xl ring-1 ring-ink/10"
          >
            <span className="text-center text-[11px] font-black uppercase tracking-widest text-ink">
              {c.label}
            </span>
            <PhotoPlaceholder className="aspect-[9/14] w-full" rounded="rounded-2xl" src={c.img} />
            <div className="flex justify-between gap-1">
              <Stat icon={<Eye className="h-3 w-3" />} value={c.views} />
              <Stat icon={<Heart className="h-3 w-3" />} value={c.likes} />
              <Stat icon={<MessageCircle className="h-3 w-3" />} value={c.comments} />
            </div>
          </motion.div>
        ))}
        <div className="hidden h-[60%] w-24 shrink-0 rounded-[2rem] bg-[oklch(0.86_0.005_60)] opacity-50 md:block" />
      </div>
    </Section>
  );
}