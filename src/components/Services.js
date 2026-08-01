import { motion } from "framer-motion";

// Shared fade-up animation variant, consistent across all sections
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Content packages — synced with the official rate card
const services = [
  { name: "Starter Glow", price: "15,000", desc: "1 Instagram Reel + Stories" },
  { name: "Beauty Boost", price: "18,000", desc: "Reel + Static Post + Stories" },
  { name: "TikTok Buzz", price: "9,500", desc: "1 TikTok Video + Cross-posted Story" },
  { name: "Social Media Combo", price: "23,500", desc: "Reel + TikTok + Stories" },
  { name: "Premium Campaign", price: "38,000", desc: "2 Reels + TikTok + Static + Stories", highlight: true },
  { name: "UGC Package", price: "10,000", desc: "2 Authentic Product Review Videos (No Posting) - PR" },
];

// Standalone client services, for clients who don't need a full package
const extras = [
  { name: "Instagram Stories (multiple frames)", price: "4,000" },
  { name: "Instagram Reel + Post", price: "15,000" },
  { name: "TikTok Video", price: "6,500" },
  { name: "Tutorial Content", price: "4,000+" },
  { name: "Product Review", price: "5,000+" },
  { name: "Extra Revision", price: "Negotiable" },
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

      {/* Download link for the full official rate card — placed right
          under the intro so clients can grab the PDF before scrolling */}
      <motion.a
        variants={fadeUp}
        href="/downloads/Tiphany-Rate-Card.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-brand transition-transform hover:scale-105"
      >
        Download Full Rate Card (PDF)
      </motion.a>

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

      {/* Separate services table — for clients who want a
          single deliverable instead of a bundled package */}
      <motion.div variants={fadeUp} className="mt-14 w-full max-w-2xl">
        <h3 className="font-display text-xl font-black uppercase tracking-wide text-brand">
          Separate Services
        </h3>
        <div className="mt-4 divide-y divide-ink/10 rounded-2xl bg-paper text-left shadow ring-1 ring-ink/10">
          {extras.map((e) => (
            <div key={e.name} className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-semibold text-ink">{e.name}</span>
              <span className="font-display text-sm font-black text-brand">
                {/^\d/.test(e.price) ? `KES ${e.price}` : e.price}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-8 max-w-xl text-xs italic text-ink/60">
        Rates are adjustable depending on campaign scope, usage rights, and exclusivity.
      </motion.p>
    </motion.section>
  );
}