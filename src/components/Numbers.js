import { motion } from "framer-motion";
import { Section, BlueOval, OrangePill, ThumbsUpSticker, PhotoPlaceholder, fadeUp } from "./primitives";
import { IMG } from "./images";

// Real Instagram insights. Dates are shown instead of "last 30 days" so
// the label stays true after the numbers age; update when refreshed.
const instagram = {
  platform: "Instagram",
  period: "18 Aug – 16 Sep 2026",
  stats: [
    { value: "10.7K", label: "Followers" },
    { value: "93.8K", label: "Views" },
    { value: "50.8%", label: "Views from Non-Followers" },
    { value: "+70", label: "Net Followers" },
  ],
};

// Real TikTok analytics. Only the strongest metrics are shown here;
// declining ones (post views, likes) are intentionally left out of the
// public page.
const tiktok = {
  platform: "TikTok",
  period: "10 Sep – 7 Oct 2026",
  stats: [
    { value: "3K", label: "Followers" },
    { value: "580", label: "New Viewers" },
    { value: "48.3%", label: "Discovered via For You" },
    { value: "58%", label: "Female Viewers" },
  ],
};

// Instagram audience breakdown — real insights. 18–34 is the sum of
// the 18–24 (30.5%) and 25–34 (51.2%) groups.
const audience = [
  { label: "Based in Kenya", pct: 74.1 },
  { label: "Age 18–34", pct: 81.7 },
  { label: "Age 25–34", pct: 51.2 },
];

// Instagram follower gender split — both sides shown together
const gender = { men: 73.5, women: 26.5 };

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
        <OrangePill>Insights</OrangePill>
        <span className="h-1.5 w-24 rounded-full bg-brand" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand"
      >
        MY NUMBERS
      </motion.h2>

      <motion.div variants={fadeUp} className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-ink">
        <BlueOval>The Reach</BlueOval>
      </motion.div>

      {/* Per-platform stat rows */}
      <div className="mt-8 flex flex-col gap-6">
        <StatRow {...instagram} />
        <StatRow {...tiktok} />

        {/* Brands-worked-with summary: 19 brands across 6 industries,
            matching the roster in Clients.jsx. If a brand is added or
            removed there, update the number here too. */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-1 rounded-3xl bg-ink px-6 py-5 text-paper sm:flex-row sm:items-center sm:gap-6"
        >
          <p className="font-display text-[clamp(2.5rem,6vw,4rem)] font-black leading-none text-brand">
            19
          </p>
          <div>
            <p className="font-display text-base font-black uppercase tracking-wide">
              Brands Worked With
            </p>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest opacity-70">
              Across beauty, food, fashion, home, hospitality and tech
            </p>
          </div>
        </motion.div>
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

            {/* Gender split — one bar showing both sides */}
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold uppercase tracking-wide text-ink">Gender</span>
                <span className="text-xs font-bold uppercase tracking-wide text-ink/70">
                  Men {gender.men}% · Women {gender.women}%
                </span>
              </div>
              <div className="mt-2 flex h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${gender.men}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="block h-full bg-brand"
                />
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${gender.women}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="block h-full bg-ink/40"
                />
              </div>
            </div>
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
    </Section>
  );
}