import { motion } from "framer-motion";
import { Section, fadeUp } from "./primitives";

// Content packages — synced with Tiphany's updated rate card
const services = [
  { name: "Starter Glow", price: "42,000", desc: "1 Instagram Reel + Stories", bestFor: "Small businesses, product launches" },
  { name: "Beauty Boost", price: "55,000", desc: "1 Reel + 1 Static Post + Stories", bestFor: "Beauty and skincare campaigns" },
  { name: "TikTok Buzz", price: "25,000", desc: "1 TikTok Video + cross-posted Story", bestFor: "Brand awareness and trends" },
  { name: "Social Media Combo", price: "58,000", desc: "1 Reel + 1 TikTok Video + Stories", bestFor: "Visibility across platforms" },
  {
    name: "Premium Campaign",
    price: "105,000",
    desc: "2 Reels + 1 TikTok + 1 Static Post + Stories",
    bestFor: "Larger campaigns and launches",
    highlight: true,
  },
  {
    name: "UGC Package",
    price: "30,000",
    desc: "2 authentic product-ad or review videos, delivered to the brand (not posted on her channels)",
    bestFor: "Content for your own social pages",
  },
];

// Individual services, for brands who want a single deliverable
const extras = [
  { name: "Instagram Reel (single video)", price: "KES 35,000" },
  { name: "Instagram Static Post", price: "KES 15,000" },
  { name: "Instagram Stories (multiple frames)", price: "KES 8,000" },
  { name: "TikTok Video", price: "KES 20,000" },
  { name: "Instagram Reel + Static Post", price: "KES 45,000" },
  { name: "Tutorial Content", price: "From KES 15,000" },
  { name: "Product Review Video", price: "From KES 18,000" },
  { name: "Additional Revision", price: "Quoted by scope" },
];

// Scrolls to the ThankYou request form and pre-fills its message box
// with the selected package
function inquireAbout(name, price, desc) {
  const msg = document.querySelector('#thanks textarea[name="message"]');
  if (msg && !msg.value.trim()) {
    msg.value = `Hi Tiphany, I'm interested in the ${name} package (KES ${price}) — ${desc}.`;
  }
  document.getElementById("thanks")?.scrollIntoView({ behavior: "smooth" });
}

export function Services() {
  return (
    <Section id="services" className="items-center text-center">
      <motion.h2
        variants={fadeUp}
        className="font-display text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-none text-brand"
      >
        SERVICES &<br />
        PRICELIST
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-ink">
        Let's work together
      </motion.p>

      <motion.a
        variants={fadeUp}
        href="/downloads/Tiphany-Rate-Card.pdf"
        download
        className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-brand transition-transform hover:scale-105"
      >
        Download Full Rate Card (PDF)
      </motion.a>

      {/* Compact package cards — no photo block, so they stay short on
          phones. 1 column on mobile, 2 on tablet, 3 on desktop. */}
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.div
            key={s.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className={`flex flex-col rounded-3xl p-4 text-left shadow-md ring-1 ${
              s.highlight ? "bg-brand text-brand-foreground ring-brand" : "bg-paper text-ink ring-ink/10"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-wide">{s.name}</p>
            <p className={`mt-1 font-display text-2xl font-black ${s.highlight ? "text-brand-foreground" : "text-brand"}`}>
              KES {s.price}
            </p>
            <p className={`mt-2 text-xs leading-snug ${s.highlight ? "opacity-95" : "text-ink/80"}`}>{s.desc}</p>
            <p className={`mt-1.5 text-[11px] italic ${s.highlight ? "opacity-80" : "text-ink/50"}`}>
              Best for: {s.bestFor}
            </p>

            <button
              type="button"
              onClick={() => inquireAbout(s.name, s.price, s.desc)}
              className={`mt-3 w-full rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-transform hover:scale-105 ${
                s.highlight ? "bg-paper text-brand" : "bg-brand text-brand-foreground"
              }`}
            >
              Inquire
            </button>
          </motion.div>
        ))}
      </div>

      {/* Individual services list */}
      <motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl">
        <h3 className="font-display text-lg font-black uppercase tracking-wide text-brand">
          Individual Services
        </h3>
        <div className="mt-3 divide-y divide-ink/10 rounded-2xl bg-paper text-left shadow ring-1 ring-ink/10">
          {extras.map((e) => (
            <div key={e.name} className="flex items-center justify-between gap-4 px-4 py-2.5">
              <span className="text-xs font-semibold text-ink sm:text-sm">{e.name}</span>
              <span className="shrink-0 font-display text-xs font-black text-brand sm:text-sm">{e.price}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-6 max-w-xl text-xs italic text-ink/60">
        Rates may be adjusted for campaign duration, deliverables, exclusivity, rush timelines, travel,
        production needs and usage rights. Paid advertising, whitelisting and extended usage are quoted separately.
      </motion.p>
    </Section>
  );
}