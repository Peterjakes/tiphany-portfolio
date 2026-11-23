import { motion } from "framer-motion";
import { ArrowRight, Hash } from "lucide-react";
import { Section, BlueOval, OrangePill, fadeUp } from "./primitives";
import { IMG } from "./images";

// Campaign facts we can stand behind. Contract details (fee, payment
// terms) are deliberately not shown. Add real Reel views/reach here once
// Tiphany pulls them from her Instagram insights.
const results = [
  { value: "Reel + Stories", label: "Content Delivered" },
  { value: "16 Days", label: "Posting Window" },
  { value: "Top 3", label: "Post for New Followers" },
];

// Before → Concept → After narrative steps
const steps = [
  {
    tag: "Before",
    title: "The Brief",
    copy: "Creative Blueprint, the agency behind the Kaa Fresh na Doctor Zeng campaign, brought Tiphany on to introduce Doctor Zeng's armpit deodorant cream to her audience.",
  },
  {
    tag: "Concept",
    title: "The Content",
    copy: "She shot a campaign Reel and supporting Stories herself, using the campaign hashtag and tagging Doctor Zeng. Each post was clearly marked as a paid partnership and approved by the brand before it went live.",
  },
  {
    tag: "After",
    title: "The Result",
    copy: "The Reel ranked among her best-performing posts for bringing in new followers that month, a sign the campaign connected with her audience.",
  },
];

export function CaseStudy() {
  return (
    // Shared Section primitive gives this page the same scroll-triggered stagger as the rest
    <Section id="case-study">
      <motion.div variants={fadeUp} className="flex items-center gap-4">
        <OrangePill>Case Study</OrangePill>
        <span className="h-1.5 w-24 rounded-full bg-brand" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-[clamp(2.2rem,8vw,6rem)] font-black uppercase leading-none text-brand"
      >
        BEFORE &amp; AFTER
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-3 font-display text-base font-bold uppercase tracking-wide text-ink">
        <BlueOval>Kaa Fresh na Doctor Zeng Campaign</BlueOval>
      </motion.p>

      <div className="mt-8 grid flex-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.tag} variants={fadeUp} className="flex items-start gap-4 rounded-3xl bg-ink/[0.04] p-5">
              <span className="mt-1 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-foreground">
                {s.tag}
              </span>
              <div>
                <p className="font-display text-lg font-black uppercase tracking-wide text-ink">
                  {s.title}
                </p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink/70">{s.copy}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="ml-auto hidden h-5 w-5 shrink-0 text-brand md:block" />
              )}
            </motion.div>
          ))}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {results.map((r) => (
              <motion.div key={r.label} variants={fadeUp} className="rounded-3xl bg-brand px-4 py-5 text-brand-foreground">
                <p className="font-display text-[clamp(1.3rem,3vw,1.9rem)] font-black uppercase leading-none">
                  {r.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-90">
                  {r.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          {/* Product shot shown in full (object-contain) on a white card so
              the packaging is never cropped */}
          <div className="flex h-full min-h-[260px] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/10">
            <img
              src={IMG.doctorZeng}
              alt="Doctor Zeng armpit deodorant cream packaging"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="absolute -left-3 top-6 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-paper shadow-lg">
            <Hash className="h-3 w-3" /> KaaFreshNaDoctorZeng
          </span>
        </motion.div>
      </div>
    </Section>
  );
}