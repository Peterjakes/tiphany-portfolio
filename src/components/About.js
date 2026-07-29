import { motion } from "framer-motion";
import { IMG } from "../images";

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center md:px-12">
      {/* "4+ Years" badge — springs in with a slight overshoot for a playful pop */}
      <motion.div
        initial={{ scale: 0, rotate: 20 }}
        whileInView={{ scale: 1, rotate: 8 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.5 }}
        className="pointer-events-none absolute right-8 top-12 rounded-2xl bg-brand px-4 py-2 text-xs font-black uppercase tracking-wider text-brand-foreground shadow-lg"
      >
        4+ Years
      </motion.div>

      {/* "Digital Content" badge — same spring treatment, delayed slightly
          after the first badge so they don't land simultaneously */}
      <motion.div
        initial={{ scale: 0, rotate: -25 }}
        whileInView={{ scale: 1, rotate: -10 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.6 }}
        className="pointer-events-none absolute bottom-12 left-8 rounded-full border-2 border-brand bg-paper px-4 py-2 text-xs font-black uppercase tracking-wider text-brand shadow"
      >
        Digital Content
      </motion.div>

      {/* Floating photo — slides in from the left as it enters view */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, x: -40 }}
        whileInView={{ opacity: 1, rotate: -8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-4 top-1/3 hidden md:block"
      >
        <img src={IMG.sunlitSmile} alt="" className="h-44 w-36 rounded-2xl object-cover" />
      </motion.div>

      {/* Floating photo — slides in from the right, mirroring the left one */}
      <motion.div
        initial={{ opacity: 0, rotate: 20, x: 40 }}
        whileInView={{ opacity: 1, rotate: 10, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-24 right-6 hidden md:block"
      >
        <img src={IMG.cafeJacket} alt="" className="h-44 w-36 rounded-2xl object-cover" />
      </motion.div>

      <h2 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-none text-brand">
        ABOUT ME
      </h2>
      <div className="mt-6 font-display text-2xl font-black uppercase text-ink md:text-3xl">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
          WHO I AM?
        </span>
      </div>
      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink md:text-lg">
        I'm Tiphany W., a Beauty, Lifestyle, Fashion & Food content creator based in Nairobi, Kenya.
        I create authentic, aesthetic content that connects brands with real audiences.
      </p>
      
       <a href="https://instagram.com/wawer.u._"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-paper transition-transform hover:scale-105"
      >
        wawer.u._
      </a>
    </section>
  );
}