import { Heart, ThumbsUp, MessageCircle } from "lucide-react";
import { IMG } from "../images";

// Client testimonials — each has its own accent icon reflecting how they
// engaged (Heart, ThumbsUp, etc.)
const reviews = [
  {
    name: "Sarah Mwangi",
    title: "Founder, Glow Beauty KE",
    quote: "Tiphany's content drove a 3x spike in our launch week sales. Genuinely the best collab we've done.",
    img: IMG.beauty1,
    icon: Heart,
  },
  {
    name: "James Otieno",
    title: "Marketing Lead, Java House",
    quote: "Her storytelling makes our menu feel like an experience. Audiences responded immediately.",
    img: IMG.cafeYellow,
    icon: ThumbsUp,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center md:px-12">
      <h2 className="font-display text-[clamp(3rem,11vw,9rem)] font-black uppercase leading-none text-brand">
        TESTIMONIALS
      </h2>
      <div className="mt-4 font-display text-xl font-black uppercase md:text-2xl">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-brand">
          CLIENT FEEDBACK
        </span>
      </div>

      <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {reviews.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.name} className="relative mx-auto w-full max-w-sm">
              {/* Chat bubble accent, overlapping top-left of the photo */}
              <span className="absolute -top-3 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground shadow">
                <MessageCircle className="h-4 w-4" />
              </span>
              {/* Per-review accent icon, overlapping right edge of the photo */}
              <span className="absolute right-3 top-[38%] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground shadow">
                <Icon className="h-4 w-4" />
              </span>

              <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[2rem]">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
              </div>
              <div className="rounded-b-[2rem] bg-brand p-4 text-left text-brand-foreground shadow-lg">
                <p className="text-sm font-black uppercase">{r.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-90">
                  {r.title}
                </p>
                <div className="my-2 h-px w-full bg-brand-foreground/30" />
                <p className="text-xs leading-snug">&ldquo;{r.quote}&rdquo;</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}