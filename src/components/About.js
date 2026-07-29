import { IMG } from "../images";

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center md:px-12">
      {/* Decorative badge — "4+ Years" tag, tilted for a handmade sticker feel */}
      <div className="pointer-events-none absolute right-8 top-12 rotate-[8deg] rounded-2xl bg-brand px-4 py-2 text-xs font-black uppercase tracking-wider text-brand-foreground shadow-lg">
        4+ Years
      </div>

      {/* Decorative badge — "Digital Content" outline pill */}
      <div className="pointer-events-none absolute bottom-12 left-8 -rotate-[10deg] rounded-full border-2 border-brand bg-paper px-4 py-2 text-xs font-black uppercase tracking-wider text-brand shadow">
        Digital Content
      </div>

      {/* Floating photo — top-left, hidden on mobile to avoid clutter */}
      <div className="absolute left-4 top-1/3 hidden -rotate-[8deg] md:block">
        <img src={IMG.sunlitSmile} alt="" className="h-44 w-36 rounded-2xl object-cover" />
      </div>

      {/* Floating photo — bottom-right, hidden on mobile */}
      <div className="absolute bottom-24 right-6 hidden rotate-[10deg] md:block">
        <img src={IMG.cafeJacket} alt="" className="h-44 w-36 rounded-2xl object-cover" />
      </div>

      {/* Section heading */}
      <h2 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-none text-brand">
        ABOUT ME
      </h2>

      {/* Sub-heading pill */}
      <div className="mt-6 font-display text-2xl font-black uppercase text-ink md:text-3xl">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
          WHO I AM?
        </span>
      </div>

      {/* Bio copy */}
      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink md:text-lg">
        I'm Tiphany W., a Beauty, Lifestyle, Fashion & Food content creator based in Nairobi, Kenya.
        I create authentic, aesthetic content that connects brands with real audiences.
      </p>

      {/* Instagram handle / CTA link */}
      
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