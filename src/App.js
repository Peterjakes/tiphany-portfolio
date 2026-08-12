 import { Hero } from "./components/Hero";
import { TableOfContents } from "./components/TableOfContents";
import { About } from "./components/About";
import { Social } from "./components/Social";
import { Numbers } from "./components/Numbers";
import { Clients } from "./components/Clients";
import { Portfolio } from "./components/Portfolio";
import { CaseStudy } from "./components/CaseStudy";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ThankYou } from "./components/ThankYou";

function App() {
  return (
    // snap-y + snap-mandatory turns the whole page into a scroll-snap
    // container — each section's snap-section class (set in primitives.js's
    // Section component, or manually where Section isn't used) locks
    // scrolling to one full section at a time
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-paper text-ink scroll-smooth">
      <Hero />
      <TableOfContents />
      <About />
      <Social />
      <Numbers />
      <Clients />
      <Portfolio />
      <CaseStudy />
      <Services />
      <Testimonials />
      <FAQ />
      <ThankYou />
    </main>
  );
}

export default App;