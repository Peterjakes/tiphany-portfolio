import { motion } from "framer-motion";
import { IMG } from "../images";

// Shared fade-up animation variant, consistent with Hero.jsx, About.jsx, Social.jsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Client/brand partnership data — first entry gets the larger featured card,
// the remaining two stack beside it in a 2-row grid
const clients = [
  { name: "Huddah Cosmetics", type: "Beauty Collab", img: IMG.nails },
  { name: "Java House", type: "Food Feature", img: IMG.cafeYellow },
  { name: "Vivo Activewear", type: "Lifestyle Campaign", img: IMG.fashionWhite },
];

// Small overlay label shown at the bottom of each client photo card
function ClientLabel({ name, type }) {
  return (
    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-brand px-5 py-3 text-brand-foreground shadow-lg">
      <p className="text-sm font-black uppercase tracking-wide">{name}</p>
      <p className="text-[11px] font-medium uppercase tracking-widest opacity-90">{type}</p>
    </div>
  );
}

export function Clients() {
  return (
    <motion.section
      id="clients"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="flex min-h-screen flex-col px-6 py-10 md:px-12"
    >
      {/* Decorative top bar — fades up first as part of the staggered group */}
      <motion.div variants={fadeUp} className="h-3 w-full rounded-full bg-brand" />
      <div className="relative mt-6 flex justify-center">
        <div className="h-10 w-10 rounded-full bg-ink" />
      </div>

      {/* Heading + sub-label */}
      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none text-brand"
        >
          CLIENT
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 font-display text-base font-bold uppercase">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
            BRANDS I'VE PARTNERED WITH
          </span>
        </motion.div>
      </div>

      {/* Featured client (large, left) + two stacked clients (right) —
          each card fades up individually via the parent's staggerChildren */}
      <div className="mt-10 grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div variants={fadeUp} className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[2rem]">
          <img src={clients[0].img} alt={clients[0].name} className="h-full w-full object-cover" />
          <ClientLabel name={clients[0].name} type={clients[0].type} />
        </motion.div>
        <div className="grid grid-rows-2 gap-5">
          {[1, 2].map((i) => (
            <motion.div key={i} variants={fadeUp} className="relative h-full min-h-[150px] w-full overflow-hidden rounded-[2rem]">
              <img src={clients[i].img} alt={clients[i].name} className="h-full w-full object-cover" />
              <ClientLabel name={clients[i].name} type={clients[i].type} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}