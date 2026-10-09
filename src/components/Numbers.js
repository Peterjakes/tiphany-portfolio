import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Section, BlueOval, OrangePill, ThumbsUpSticker, PhotoPlaceholder, fadeUp } from "./primitives";
import { IMG } from "../images";

const partners = ["Lumi Hair and Beauty", "Enkata", "Samsung", "Windsor Hotel"];

// Real Instagram insights (30-day window)
const instagram = {
  platform: "Instagram",
  period: "Last 30 days",
  stats: [
    { value: "10.7K", label: "Followers" },
    { value: "93.7K", label: "Views" },
    { value: "50.8%", label: "Reach from Non-Followers" },
    { value: "+70", label: "Net Followers" },
  ],
};

// Real TikTok analytics (28-day window, Sep 10 – Oct 7). Only the
// strongest metrics are shown here; declining ones (post views, likes)
// are intentionally left out of the public page.
const tiktok = {
  platform: "TikTok",
  period: "Last 28 days",
  stats: [
    { value: "3K", label: "Followers" },
    { value: "580", label: "New Viewers" },
    { value: "48.3%", label: "Discovered via For You" },
    { value: "58%", label: "Female Viewers" },
  ],
};

// Instagram audience breakdown — real insights
const audience = [
  { label: "Men", pct: 73.5 },
  { label: "Age 25–34", pct: 51.2 },
  { label: "Based in Kenya", pct: 74.1 },
];

// One platform's label row + stat cards, so both platforms render
// with identical styling
function StatRow({ platform, period, stats }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="flex items-center gap-3">
        <OrangePill>{platform}</OrangePill>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-ink/50">
          {period}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-brand px-4 py-5 text-brand-foreground">
            <p className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-black leading-none">
              {s.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-90">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Numbers() {
  return (
    <Section id="numbers">
      <motion.div variants={fadeUp} className="flex items-center gap-4">
        <OrangePill>Media Kit</OrangePill>
        <span className="h-1.5 w-24 rounded-full bg-brand" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand"
      >
        MY NUMBERS
      </motion.h2>

      <motion.div variants={fadeUp} className="mt-3 flex flex-wrap items-center gap-4">
        <p className="font-display text-lg font-bold uppercase tracking-wide text-ink">
          <BlueOval>The Reach</BlueOval>
        </p>
        <a
          href="/downloads/Tiphany-Media-Kit.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-paper transition-transform hover:scale-105"
        >
          <Download className="h-3.5 w-3.5" /> Download Media Kit
        </a>
      </motion.div>

      {/* Per-platform stat rows */}
      <div className="mt-8 flex flex-col gap-6">
        <StatRow {...instagram} />
        <StatRow {...tiktok} />
      </div>

      <div className="mt-6 grid flex-1 gap-6 md:grid-cols-3">
        <motion.div variants={fadeUp} className="rounded-3xl bg-ink/[0.04] p-6 md:col-span-2">
          <p className="font-display text-sm font-black uppercase tracking-widest text-ink/60">
            Instagram Audience Snapshot
          </p>
          <div className="mt-5 space-y-5">
            {audience.map((a) => (
              <div key={a.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide text-ink">{a.label}</span>
                  <span className="font-display text-xl font-black text-brand">{a.pct}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${a.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="block h-full rounded-full bg-brand"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="font-display text-sm font-black uppercase tracking-widest text-ink/60">
              Content Niches
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Beauty", "Lifestyle", "Fashion", "Food"].map((niche) => (
                <span key={niche} className="rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-foreground">
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <PhotoPlaceholder className="h-full min-h-[220px] w-full" src={IMG.blazer} objectPosition="center 25%" />
          <ThumbsUpSticker className="-left-4 top-6" rotate={-12} />
          <OrangePill className="absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-lg">
            Nairobi, Kenya
          </OrangePill>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="mt-6 border-y border-ink/10 py-4">
        <p className="font-display text-[11px] font-black uppercase tracking-[0.3em] text-ink/50">
          As seen in / worked with
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
          {partners.map((p) => (
            <span key={p} className="font-display text-sm font-black uppercase tracking-wide text-ink/60 md:text-base">
              {p}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}