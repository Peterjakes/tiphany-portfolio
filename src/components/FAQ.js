import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Section, BlueOval, OrangePill, fadeUp } from "./primitives";

// Every answer below comes from Tiphany's rate card terms (or the About
// copy for niches). Anything the rate card doesn't state (turnaround
// times, number of included revisions, gifted collabs) is deliberately
// left out so the site never promises terms she hasn't agreed to.
const faqs = [
  {
    q: "What niches do you create in?",
    a: "Beauty, lifestyle, fashion and food. Authentic, aesthetic content that connects brands with real audiences.",
  },
  {
    q: "How does a campaign start?",
    a: "We agree a clear brief, deliverables, timeline, approval process and payment schedule in writing before any work begins.",
  },
  {
    q: "Can packages be customised?",
    a: "Yes. Packages can be tailored to your campaign goals, deliverables and usage needs. If you only want one piece of content, choose from the individual services in the pricelist.",
  },
  {
    q: "How do revisions work?",
    a: "The approval process is agreed in writing up front. Additional revisions beyond what's agreed are quoted based on scope.",
  },
  {
    q: "Do you offer exclusivity?",
    a: "Yes. Exclusivity, rush timelines, travel and extra production can adjust the rate, so they're agreed and costed before the campaign begins.",
  },
  {
    q: "What about usage rights and paid ads?",
    a: "Content is posted on my channels as per your package. Paid advertising, whitelisting, extended usage rights and content licensing aren't automatically included and are quoted separately.",
  },
];

// How booking works — taken from the rate card's "agree in writing
// before work commences" terms, replacing the old made-up availability
const steps = ["1 · Share your brief", "2 · Agree scope in writing", "3 · Create & approve"];

export function FAQ() {
  return (
    <Section id="faq">
      <motion.div variants={fadeUp} className="flex items-center gap-4">
        <OrangePill>For Brands</OrangePill>
        <span className="h-1.5 w-24 rounded-full bg-brand" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand"
      >
        FAQ
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-3 font-display text-base font-bold uppercase tracking-wide text-ink">
        <BlueOval>Everything before you brief me</BlueOval>
      </motion.p>

      <div className="mt-8 grid flex-1 gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <motion.div key={f.q} variants={fadeUp} className="rounded-3xl bg-ink/[0.04] p-5">
            <p className="font-display text-base font-black uppercase tracking-wide text-ink">
              {f.q}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</p>
          </motion.div>
        ))}
      </div>

      {/* How-to-book strip */}
      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-col gap-5 rounded-[2rem] bg-brand p-6 text-brand-foreground md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-3">
          <CalendarDays className="h-8 w-8 shrink-0" />
          <div>
            <p className="font-display text-xl font-black uppercase leading-none">How to Book</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest opacity-90">
              Simple, in three steps
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {steps.map((s) => (
            <span key={s} className="rounded-2xl bg-paper/15 px-4 py-2 text-xs font-bold uppercase tracking-wide">
              {s}
            </span>
          ))}
        </div>
        <a
          href="#thanks"
          className="rounded-full bg-paper px-6 py-3 text-center text-xs font-black uppercase tracking-widest text-brand transition-transform hover:scale-105"
        >
          Send a brief
        </a>
      </motion.div>
    </Section>
  );
}