import { ArrowRight, TrendingUp } from "lucide-react";
import { PhotoPlaceholder, BlueOval, OrangePill } from "./primitives";
import { IMG } from "../images";

// Headline result metrics from the featured campaign
const results = [
  { value: "312K", label: "Total Reach" },
  { value: "11.2%", label: "Engagement Rate" },
  { value: "1.8K", label: "Code Redemptions" },
  { value: "3x", label: "Content Reused by Brand" },
];

// Before → Concept → After narrative steps
const steps = [
  {
    tag: "Before",
    title: "The Brief",
    copy: "A local beauty brand launching a new lip range with low awareness outside their existing customers.",
  },
  {
    tag: "Concept",
    title: "The Content",
    copy: "A 3-part story arc: an honest first-impression reel, a get-ready-with-me routine, and a TikTok wear test in Nairobi daylight.",
  },
  {
    tag: "After",
    title: "The Result",
    copy: "The launch reel outperformed the brand's own page 6x, and the discount code sold through the first stock drop in 9 days.",
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="flex min-h-screen w-full flex-col overflow-hidden bg-paper px-6 py-12 md:px-16 md:py-16">
      <div className="flex items-center gap-4">
        <OrangePill>Case Study</OrangePill>
        <span className="h-1.5 w-24 rounded-full bg-brand" />
      </div>

      <h2 className="mt-4 font-display text-[clamp(2.2rem,8vw,6rem)] font-black uppercase leading-none text-brand">
        BEFORE &amp; AFTER
      </h2>

      <p className="mt-3 font-display text-base font-bold uppercase tracking-wide text-ink">
        <BlueOval>Huddah Cosmetics Launch</BlueOval>
      </p>

      <div className="mt-8 grid flex-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          {/* Narrative steps — arrow connector shown between cards on desktop
              only, to visually imply progression without cluttering mobile */}
          {steps.map((s, i) => (
            <div key={s.tag} className="flex items-start gap-4 rounded-3xl bg-ink/[0.04] p-5">
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
            </div>
          ))}

          {/* Result metrics grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-3xl bg-brand px-4 py-5 text-brand-foreground">
                <p className="font-display text-[clamp(1.6rem,4vw,2.5rem)] font-black leading-none">
                  {r.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-90">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign photo with a floating "6x brand avg." credibility badge */}
        <div className="relative">
          <PhotoPlaceholder className="h-full min-h-[260px] w-full" rounded="rounded-[2rem]" src={IMG.beauty1} />
          <span className="absolute -left-3 top-6 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-paper shadow-lg">
            <TrendingUp className="h-3 w-3" /> 6x brand avg.
          </span>
        </div>
      </div>
    </section>
  );
}