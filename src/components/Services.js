import { motion } from "framer-motion";

// Shared fade-up animation variant, consistent across all sections
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Content packages -synced with the official rate card
const services = [
  { name: "Starter Glow", price: "15,000", desc: "1 Instagram Reel + Stories" },
  { name: "Beauty Boost", price: "18,000", desc: "Reel + Static Post + Stories" },
  { name: "TikTok Buzz", price: "9,500", desc: "1 TikTok Video + Cross-posted Story" },
  { name: "Social Media Combo", price: "23,500", desc: "Reel + TikTok + Stories" },
  { name: "Premium Campaign", price: "38,000", desc: "2 Reels + TikTok + Static + Stories", highlight: true },
  { name: "UGC Package", price: "10,000", desc: "2 Authentic Product Review Videos (No Posting) - PR" },
];

export function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="flex min-h-screen flex-col items-center px-6 py-10 text-center md:px-12"
    >
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

      {/* Package cards — each fades up on scroll and lifts slightly on
          hover; highlighted package gets inverted brand colors to stand
          out as the recommended tier */}
      <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.div
            key={s.name}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className={`flex flex-col items-center rounded-[2rem] p-5 text-left shadow-lg ring-1 ${
              s.highlight ? "bg-brand text-brand-foreground ring-brand" : "bg-paper text-ink ring-ink/10"
            }`}
          >
            <div className="aspect-square w-full rounded-2xl bg-ink/10" />

            <p className={`mt-4 font-display text-3xl font-black ${s.highlight ? "text-brand-foreground" : "text-brand"}`}>
              KES {s.price}
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide">{s.name}</p>
            <p className={`mt-2 text-xs ${s.highlight ? "opacity-90" : "text-ink/70"}`}>{s.desc}</p>

            <a
              href={`mailto:tiphy.waweru2002@gmail.com?subject=${encodeURIComponent(
                `Inquiry: ${s.name} Package`
              )}&body=${encodeURIComponent(
                `Hi Tiphany,\n\nI'd like to inquire about the ${s.name} package (KES ${s.price}).\n\n`
              )}`}
              className={`mt-4 block w-full rounded-full px-4 py-2 text-center text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 ${
                s.highlight ? "bg-paper text-brand" : "bg-brand text-brand-foreground"
              }`}
            >
              Inquire
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p variants={fadeUp} className="mt-8 max-w-xl text-xs italic text-ink/60">
        Rates are adjustable depending on campaign scope, usage rights, and exclusivity.
      </motion.p>
    </motion.section>
  );
}