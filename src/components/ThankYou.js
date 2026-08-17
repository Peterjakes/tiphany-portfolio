import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Section, PhotoPlaceholder, BlueOval, ThumbsUpSticker, fadeUp } from "./primitives";
import { IMG } from "../images";

// Campaign types offered in the media kit request form's dropdown
const campaignTypes = ["Product Review", "Brand Campaign", "Event Coverage", "Long-term Partnership"];

export function ThankYou() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Validates the form fields, then opens a pre-filled mailto draft
  // instead of submitting to a backend (no server needed for this site)
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const brand = String(form.get("brand") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const type = String(form.get("type") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!brand || brand.length > 100)
      return setError("Please enter a brand name (max 100 characters).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return setError("Please enter a valid email address.");
    if (message.length > 1000) return setError("Message must be under 1000 characters.");

    setError("");
    const subject = encodeURIComponent(`Media Kit Request — ${brand}`);
    const body = encodeURIComponent(
      `Brand: ${brand}\nEmail: ${email}\nCampaign type: ${type}\n\n${message}`,
    );
    window.location.href = `mailto:tiphy.waweru2002@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  // Shared input/select/textarea styling for the form fields
  const field =
    "w-full rounded-2xl border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand";

  return (
    <Section id="thanks" className="justify-center">
      <ThumbsUpSticker className="right-8 top-16" rotate={12} />

      <div className="grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(3rem,12vw,9rem)] font-black uppercase leading-[0.85] text-brand"
          >
            THANK
            <br />
            YOU
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 font-display text-base font-black uppercase md:text-xl">
            <BlueOval>LET'S CREATE GREAT CONTENT TOGETHER!</BlueOval>
          </motion.div>

          {/* Direct PDF download link — same pattern as the Services rate
              card, no JS helper needed since it's just a static asset */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
            
             <a href="/downloads/Tiphany-Media-Kit.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-black uppercase tracking-widest text-paper transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Press Kit &amp; Rate Card
            </a>
            <PhotoPlaceholder className="hidden h-16 w-24 md:block" rounded="rounded-2xl" src={IMG.cafeYellow} />
          </motion.div>
        </div>

        {/* Media kit request form — validates then hands off to a
            pre-filled mailto draft rather than a real backend submission */}
        <motion.form variants={fadeUp} onSubmit={handleSubmit} className="rounded-[2rem] bg-ink/[0.04] p-6">
          <p className="font-display text-lg font-black uppercase tracking-wide text-ink">
            Request my media kit
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink/50">
            Brands & agencies
          </p>

          <div className="mt-5 space-y-3">
            <input name="brand" maxLength={100} placeholder="Brand / company name" className={field} required />
            <input name="email" type="email" maxLength={255} placeholder="Work email" className={field} required />
            <select name="type" className={field} defaultValue={campaignTypes[0]}>
              {campaignTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              maxLength={1000}
              rows={3}
              placeholder="Tell me about the campaign (optional)"
              className={field}
            />
          </div>

          {error && <p className="mt-3 text-xs font-semibold text-brand">{error}</p>}
          {sent && !error && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand">
              Your email draft is open — hit send and I'll reply within 24 hours.
            </p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-brand px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-foreground transition-transform hover:scale-[1.02]"
          >
            Send request
          </button>
        </motion.form>
      </div>

      {/* Contact bar — email, handle, and Instagram link */}
      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl bg-ink px-6 py-4 text-paper md:flex-row"
      >
        <a href="mailto:tiphy.waweru2002@gmail.com" className="text-xs font-semibold uppercase tracking-wider hover:text-brand">
          tiphy.waweru2002@gmail.com
        </a>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        <span className="text-xs font-semibold uppercase tracking-wider">@wawer.u._</span>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        
         <a href="https://instagram.com/wawer.u._"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-wider hover:text-brand"
        >
          Instagram →
        </a>
      </motion.div>
    </Section>
  );
}