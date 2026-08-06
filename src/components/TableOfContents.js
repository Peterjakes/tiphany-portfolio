// Page sections listed in order, each numbered for the TOC layout
const items = [
  ["01", "Introduction"],
  ["02", "About Me"],
  ["03", "Social Media Channels"],
  ["04", "Clients"],
  ["05", "Content Portfolio"],
  ["06", "Case Study"],
  ["07", "Services & Pricelist"],
  ["08", "Testimonials"],
  ["09", "FAQ for Brands"],
  ["10", "Contact & Media Kit"],
];

export function TableOfContents() {
  return (
    <section id="toc" className="snap-section relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Top half — light background, holds the section title */}
      <div className="relative flex flex-1 items-center justify-center bg-paper px-6 py-12 md:px-16">
        <h2 className="font-display text-[clamp(3rem,11vw,9rem)] font-black uppercase leading-none text-brand">
          TABLE OF
          <br />
          CONTENTS
        </h2>
      </div>

      {/* Bottom half — brand-colored background, holds the numbered list */}
      <div className="relative flex flex-1 flex-col justify-center bg-brand px-6 py-16 md:px-16">
        {/* Decorative dot straddling the seam between the two halves */}
        <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />

        <ol className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-x-12 sm:grid-cols-2 md:grid-cols-3">
          {items.map(([num, label]) => (
            <li key={num} className="flex items-baseline gap-4 border-b border-brand-foreground/30 py-4 text-brand-foreground">
              <span className="font-display text-2xl font-black">{num}</span>
              <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}