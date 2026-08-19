import { motion } from "framer-motion";
import { Section, PhotoPlaceholder, BlueOval, fadeUp } from "./primitivies";
import { IMG } from "./images";

// Real client/brand partnerships, mapped to a 3-column layout:
// col 1 = single tall card, col 2 = two stacked cards, col 3 = single tall card
// NOTE: lumiHair, enkataWatches, samsungMasterclass, and windsorHotel keys

const clients = [
  { name: "Lumi Hair and Beauty", type: "Beauty Collab", img: IMG.lumiHair },
  { name: "Enkata Watches", type: "Lifestyle Campaign", img: IMG.enkataWatches },
  { name: "Samsung", type: "Galaxy Master Your Shot Masterclass", img: IMG.samsungMasterclass },
  { name: "Windsor Hotel", type: "Hospitality Feature", img: IMG.windsorHotel },
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
    <Section id="clients">
      {/* Decorative top bar + dot, purely visual divider */}
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
          <BlueOval>BRANDS I'VE PARTNERED WITH</BlueOval>
        </motion.div>
      </div>

      {/* 3-column layout — outer columns get one card each (fixed aspect
          ratio, kept compact rather than stretching full height), middle
          column stacks two smaller cards */}
      <div className="mt-10 grid flex-1 grid-cols-1 gap-5 md:grid-cols-3">
        <motion.div variants={fadeUp} className="relative aspect-[3/4] w-full">
          <PhotoPlaceholder
            className="h-full w-full"
            rounded="rounded-[2rem]"
            src={clients[0].img}
          />
          <ClientLabel name={clients[0].name} type={clients[0].type} />
        </motion.div>

        <div className="grid grid-rows-2 gap-5">
          {[1, 2].map((i) => (
            <motion.div key={i} variants={fadeUp} className="relative aspect-[4/3] w-full">
              <PhotoPlaceholder
                className="h-full w-full"
                rounded="rounded-[2rem]"
                src={clients[i].img}
              />
              <ClientLabel name={clients[i].name} type={clients[i].type} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="relative aspect-[3/4] w-full">
          <PhotoPlaceholder
            className="h-full w-full"
            rounded="rounded-[2rem]"
            src={clients[3].img}
          />
          <ClientLabel name={clients[3].name} type={clients[3].type} />
        </motion.div>
      </div>
    </Section>
  );
}