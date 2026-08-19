import { motion } from "framer-motion";
import { Section, PhotoPlaceholder, BlueOval, fadeUp } from "./primitivies";
import { IMG } from "./images";

// Active social channels only — Instagram and TikTok, with real follower counts
const channels = [
  {
    handle: "@wawer.u._",
    platform: "Instagram",
    count: "10.6K",
    img: IMG.blazer,
  },
  {
    handle: "@wawer.u._",
    platform: "TikTok",
    count: "3K",
    img: IMG.nails,
  },
];

export function Social() {
  return (
    <Section id="social">
      {/* Decorative vertical line marker on the left, purely visual */}
      <div className="absolute left-6 top-1/4 flex flex-col items-center gap-2 md:left-12">
        <span className="h-6 w-6 rounded-full bg-ink" />
        <span className="h-64 w-1.5 rounded-full bg-brand" />
      </div>

      {/* Section heading, offset right to clear the decorative line */}
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

      {/* Channel cards — 2 columns, one per active platform. Grid was
          previously grid-cols-4 for 4 channels; narrowed to grid-cols-2
          since only Instagram and TikTok are active */}
      <div className="mt-auto grid grid-cols-2 gap-8 pt-10">
        {channels.map((c) => (
          <motion.div
            key={c.platform}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <PhotoPlaceholder
              rounded="rounded-full"
              className="aspect-square w-full max-w-[180px] ring-4 ring-brand ring-offset-4 ring-offset-paper"
              src={c.img}
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/70">
              {c.platform}
            </p>
            <p className="text-sm font-bold text-ink">{c.handle}</p>
            <p className="font-display text-3xl font-black text-brand">{c.count}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}