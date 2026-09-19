import { motion } from "framer-motion";
import { Section, PhotoPlaceholder, BlueOval, fadeUp } from "./primitives";
import { IMG } from "./images";

// Full client/brand roster, grouped by category — every brand now has a
// real logo.
const categories = [
  {
    label: "Beauty & Personal Care",
    brands: [
      { name: "Lumi Hair and Beauty", img: IMG.lumiHair },
      { name: "Canvas Cosmetics", img: IMG.canvasCosmetics },
      { name: "Wara Fragrance", img: IMG.waraFragrance },
      { name: "Eshe Skin", img: IMG.esheSkin },
      { name: "Ythera Scents", img: IMG.ytheraScents },
      { name: "Bella Zuri", img: IMG.bellaZuri },
      { name: "Braiding Nairobi", img: IMG.braidingNairobi },
      { name: "Glamour Queen", img: IMG.glamourQueen },
      { name: "Posh Palace Beauty Salon", img: IMG.poshPalace },
      { name: "Nouba", img: IMG.nouba },
      { name: "QueensCorner KE", img: IMG.queensCorner },
    ],
  },
  {
    label: "Food & Beverage",
    brands: [
      { name: "Barista and Co", img: IMG.baristaAndCo },
      { name: "Pistachio by Masala Twist", img: IMG.pistachio },
    ],
  },
  {
    label: "Fashion & Accessories",
    brands: [{ name: "Enkata", img: IMG.enkataWatches }],
  },
  {
    label: "Home & Lifestyle",
    brands: [
      { name: "Fairdeal Furniture", img: IMG.fairdealFurniture },
      { name: "Ace Household", img: IMG.aceHousehold },
    ],
  },
  {
    label: "Hospitality",
    brands: [{ name: "Windsor Hotel", img: IMG.windsorHotel }],
  },
  {
    label: "Tech",
    brands: [{ name: "Samsung", img: IMG.samsungMasterclass }],
  },
];

// One brand pill — shows a small logo circle inline when available,
// otherwise just the name
function BrandPill({ name, img }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-ink shadow-sm"
    >
      {img && <PhotoPlaceholder className="h-5 w-5 shrink-0" rounded="rounded-full" src={img} />}
      {name}
    </motion.span>
  );
}

export function Clients() {
  return (
    <Section id="clients">
      <motion.div variants={fadeUp} className="h-3 w-full rounded-full bg-brand" />
      <div className="relative mt-6 flex justify-center">
        <div className="h-10 w-10 rounded-full bg-ink" />
      </div>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none text-brand"
        >
          BRANDS
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 font-display text-base font-bold uppercase">
          <BlueOval>BRANDS I'VE PARTNERED WITH</BlueOval>
        </motion.div>
      </div>

      <div className="mt-8 grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-5">
          <motion.div variants={fadeUp} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:min-h-[220px]">
            <PhotoPlaceholder className="h-full w-full" rounded="rounded-none" src={IMG.sunlitSmile} />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand px-4 py-2 text-xs font-black uppercase tracking-wide text-brand-foreground shadow-lg">
              Beauty & Personal Care
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:min-h-[220px]">
            <PhotoPlaceholder className="h-full w-full" rounded="rounded-none" src={IMG.beach} />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand px-4 py-2 text-xs font-black uppercase tracking-wide text-brand-foreground shadow-lg">
              Food & Lifestyle
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className="rounded-[1.75rem] bg-ink/[0.03] p-5 ring-1 ring-ink/10"
            >
              <p className="text-[11px] font-black uppercase tracking-widest text-brand">
                {cat.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.brands.map((b) => (
                  <BrandPill key={b.name} name={b.name} img={b.img} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}