import { IMG } from "../images";

// Role labels shown as pill badges at the top of the hero
const labels = ["CONTENT CREATOR", "STORYTELLER", "DIGITAL MARKETER"];

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col justify-between px-6 py-10 md:px-12">
      {/* Role badges — quickly communicate scope of work at a glance */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/70">
        {labels.map((l) => (
          <span key={l} className="rounded-full border border-ink/20 px-3 py-1">
            {l}
          </span>
        ))}
      </div>

      {/* Main headline + photo grid — stacks on mobile, side-by-side on desktop */}
      <div className="relative grid flex-1 grid-cols-1 items-center gap-8 py-8 md:grid-cols-[1.4fr_1fr]">
        <div className="relative z-10 flex flex-col gap-6">
          <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
              CREATIVE PORTFOLIO
            </span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] font-black uppercase leading-[0.85] tracking-tight text-brand">
            CONTENT
            <br />
            CREATOR
          </h1>
        </div>

        {/* Profile photo — pulled directly from the images folder */}
        <div className="relative z-0 aspect-[3/4] w-full max-w-md overflow-hidden rounded-[3rem] md:-ml-24">
          <img
            src={IMG.sunlitTank}
            alt="Tiphany W."
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </div>

      {/* Closing tagline + credit line, anchored to bottom of section */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <p className="max-w-sm text-sm font-bold uppercase leading-snug text-ink">
          Creating content that connects,
          <br />
          informs, and inspires.
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
          Presentation by Tiphany W.
        </p>
      </div>
    </section>
  );
}