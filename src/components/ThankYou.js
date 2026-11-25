import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Section, PhotoPlaceholder, BlueOval, ThumbsUpSticker, fadeUp } from "./primitives";
import { IMG } from "./images";

const EMAIL = "tiphy.waweru2002@gmail.com";

// What a brand is looking for — mirrors the services on her rate card
const lookingFor = [
  "Content package",
  "Instagram Reel",
  "TikTok video",
  "UGC videos for our own channels",
  "Product review or tutorial",
  "Custom campaign / not sure yet",
];

export function ThankYou() {
  // status: "idle" | "sending" | "sent" | "fallback"
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // Validates, then sends the brief to Tiphany's inbox through Web3Forms.
  // If there's no access key or the request fails, it falls back to a
  // pre-filled email draft so the brief is never lost.
  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget; // keep a reference: currentTarget is gone after await
    const form = new FormData(formEl);
    const brand = String(form.get("brand") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const type = String(form.get("type") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const botcheck = form.get("botcheck"); // honeypot: real people never tick this

    if (!brand || brand.length > 100)
      return setError("Please enter a brand name (max 100 characters).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return setError("Please enter a valid email address.");
    if (!type) return setError("Please choose what you're looking for.");
    if (message.length > 1000) return setError("Message must be under 1000 characters.");
    if (botcheck) return; // silently drop bot submissions

    setError("");
    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;

    // Fallback path: open an email draft instead
    const openMailDraft = () => {
      const subject = encodeURIComponent(`Collaboration Inquiry — ${brand} (${type})`);
      const body = encodeURIComponent(
        `Brand: ${brand}\nEmail: ${email}\nLooking for: ${type}\n\n${message}`,
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("fallback");
    };

    if (!accessKey) return openMailDraft();

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Collaboration Inquiry — ${brand} (${type})`,
          from_name: "Tiphany's Portfolio",
          brand,
          email, // Web3Forms uses this as the reply-to address
          looking_for: type,
          message: message || "(no message)",
        }),
      });
      const data = await res.json();
      if (data.success) {
        formEl.reset();
        setStatus("sent");
      } else {
        openMailDraft();
      }
    } catch {
      openMailDraft();
    }
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

          {/* Direct PDF download of the rate card, the only download on the site */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/downloads/Tiphany-Rate-Card.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-black uppercase tracking-widest text-paper transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download Rate Card (PDF)
            </a>
            <PhotoPlaceholder className="hidden h-16 w-24 md:block" rounded="rounded-2xl" src={IMG.cafeYellow} />
          </motion.div>
        </div>

        {/* Brief form. The Services "Inquire" buttons pre-fill the message box. */}
        <motion.form variants={fadeUp} onSubmit={handleSubmit} className="rounded-[2rem] bg-ink/[0.04] p-6">
          <p className="font-display text-lg font-black uppercase tracking-wide text-ink">
            Send me your brief
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink/50">
            Brands & agencies
          </p>

          <div className="mt-5 space-y-3">
            <input name="brand" maxLength={100} placeholder="Brand / company name" className={field} required />
            <input name="email" type="email" maxLength={255} placeholder="Work email" className={field} required />
            <select name="type" className={field} defaultValue="" required>
              <option value="" disabled>
                What are you looking for?
              </option>
              {lookingFor.map((t) => (
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
            {/* Honeypot: hidden from people, bots tend to fill it in */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
          </div>

          {error && <p className="mt-3 text-xs font-semibold text-brand">{error}</p>}
          {status === "sent" && !error && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand">
              Thank you, your brief is in my inbox. I'll get back to you soon.
            </p>
          )}
          {status === "fallback" && !error && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand">
              Your email app should open with a draft. Hit send and I'll get back to you.
              If nothing opens, write to {EMAIL}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 w-full rounded-full bg-brand px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "Sending..." : "Send brief"}
          </button>
        </motion.form>
      </div>

      {/* Contact bar — email, handle, and Instagram link */}
      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl bg-ink px-6 py-4 text-paper md:flex-row"
      >
        <a href={`mailto:${EMAIL}`} className="text-xs font-semibold uppercase tracking-wider hover:text-brand">
          {EMAIL}
        </a>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        <span className="text-xs font-semibold uppercase tracking-wider">@wawer.u._</span>
        <span className="hidden h-4 w-px bg-paper/30 md:block" />
        <a
          href="https://instagram.com/wawer.u._"
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