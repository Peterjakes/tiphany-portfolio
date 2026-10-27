import { motion } from "framer-motion";
import { Heart, MessageCircle, MapPin, Users, Sparkles } from "lucide-react";
import { Section, BlueOval, ThumbsUpSticker, fadeUp } from "./primitives";

/**
 * Real comments from Tiphany's Instagram posts.
 */
const comments = [
  {
    handle: "@maggie_showz",
    initial: "M",
    tone: "bg-brand text-brand-foreground",
    text: "I'm getting this product 😍😍😍thank you for plugging us",
    likes: "2",
  },
  {
    handle: "@michelle.kirigi",
    initial: "M",
    tone: "bg-ink text-paper",
    text: "Adds to cart😍",
    likes: "1",
  },
  {
    handle: "@ellathelawfluencer",
    initial: "E",
    tone: "bg-scribble text-brand-foreground",
    text: "Getting my shade right away😍",
    likes: "",
  },
  {
    handle: "@jenny_mercedes",
    initial: "J",
    tone: "bg-brand text-brand-foreground",
    text: "Will definitely try the surface cleaner🫰🏽",
    likes: "",
  },
];

// Proof strip — backed by her real Instagram insights, so each claim
// can be defended if a brand asks
const proof = [
  { icon: MapPin, label: "74% Kenya", note: "Instagram audience based in Kenya" },
  { icon: Users, label: "51% aged 25–34", note: "Her largest age group on Instagram" },
  { icon: Sparkles, label: "50.8% new eyes", note: "Instagram reach from non-followers" },
];

export function AudienceVoice() {
  return (
    // !py-5 / md:!py-6 tighten the Section's default padding (Tailwind v3
    // important-modifier syntax)
    <Section id="audience" className="!py-5 md:!py-6">
      {/* Decorative vertical line marker on the right, hidden on mobile */}
      <div className="absolute right-5 top-1/4 hidden flex-col items-center gap-2 md:flex">
        <span className="h-5 w-5 rounded-full bg-ink" />
        <span className="h-44 w-1.5 rounded-full bg-brand" />
      </div>

      <motion.h2
        variants={fadeUp}
        className="font-display text-[clamp(2rem,6.5vw,5rem)] font-black uppercase leading-none text-brand"
      >
        AUDIENCE
        <br />
        VOICE
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className="mt-1 font-display text-lg font-black uppercase leading-[2.2] md:text-xl"
      >
        <BlueOval>
          <span className="px-4">WHAT THEY ACTUALLY SAY</span>
        </BlueOval>
      </motion.div>

      {/* Comment cards — 1 column on mobile, 2 on larger screens */}
      <div className="relative mt-4 grid flex-1 grid-cols-1 content-start items-start gap-3 sm:grid-cols-2 md:gap-4">
        <ThumbsUpSticker className="-top-5 right-[48%] z-10" rotate={-12} />
        {comments.map((c) => (
          <motion.div
            key={c.handle}
            variants={fadeUp}
            className="relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-card p-3.5 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2.5">
                {/* Initial avatar, since we don't have profile photos */}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-black ${c.tone}`}
                >
                  {c.initial}
                </span>
                <p className="truncate text-sm font-bold lowercase">{c.handle}</p>
              </div>
              <p className="mt-2 text-[13px] leading-snug text-ink/90">“{c.text}”</p>
            </div>
            <div className="mt-2.5 flex items-center gap-3 border-t border-ink/10 pt-2 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
              {/* Like count only renders when the comment actually has one */}
              {c.likes && (
                <span className="flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-brand" /> {c.likes}
                </span>
              )}
              {/* Decorative "Reply" label, mirrors the Instagram comment UI */}
              <span className="flex cursor-default items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5" /> Reply
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proof strip — real audience stats */}
      <motion.div variants={fadeUp} className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {proof.map((p) => (
          <div key={p.label} className="rounded-2xl bg-brand px-3.5 py-2.5 text-brand-foreground">
            <div className="flex items-center gap-2">
              <p.icon className="h-4 w-4" />
              <p className="font-display text-[13px] font-black uppercase tracking-wide">{p.label}</p>
            </div>
            <p className="mt-0.5 text-[11px] leading-snug opacity-90">{p.note}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}