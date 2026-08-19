import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Section, BlueOval, OrangePill, fadeUp } from "./primitivies";

// Common brand questions and answers
const faqs = [
  { q: "What niches do you create in?", a: "Beauty, lifestyle, fashion and food — with a Nairobi-first, real-life aesthetic." },
  { q: "What's your turnaround time?", a: "Drafts within 5–7 days of receiving product, final edits within 48 hours of feedback." },
  { q: "How many revision rounds?", a: "Two rounds are included in every package. Extra rounds are billed at 10% of the package rate." },
  { q: "Do you offer exclusivity?", a: "Yes — category exclusivity for 30, 60 or 90 days can be added for 20–40% on top of the base rate." },
  { q: "What about usage rights?", a: "Organic posting on my channels is included. Whitelisting and paid ad usage is quoted per campaign." },
  { q: "Do you accept gifted collabs?", a: "Occasionally, for products that genuinely fit my niches. Reach out and I'll tell you honestly." },
];

// Availability status shown in the booking calendar strip
const calendar = [
  { month: "This Month", status: "2 slots left" },
  { month: "Next Month", status: "Booking open" },
  { month: "Campaigns", status: "6 weeks lead time" },
];

export function FAQ() {
  return (
    // Switched to the shared Section primitive so this page picks up
    // the same scroll-triggered stagger as every other section
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

      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-col gap-5 rounded-[2rem] bg-brand p-6 text-brand-foreground md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-3">
          <CalendarDays className="h-8 w-8 shrink-0" />
          <div>
            <p className="font-display text-xl font-black uppercase leading-none">
              Booking Calendar
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest opacity-90">
              How to book a campaign
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {calendar.map((c) => (
            <span key={c.month} className="rounded-2xl bg-paper/15 px-4 py-2 text-xs font-bold uppercase tracking-wide">
              {c.month} · {c.status}
            </span>
          ))}
        </div>
        
        < a href="#thanks"
          className="rounded-full bg-paper px-6 py-3 text-center text-xs font-black uppercase tracking-widest text-brand transition-transform hover:scale-105"
        >
          Book a slot
        </a>
      </motion.div>
    </Section>
  );
}