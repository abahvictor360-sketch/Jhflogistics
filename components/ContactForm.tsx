"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const field =
    "w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition focus:border-brand";

  if (sent) {
    return (
      <div className="rounded-3xl bg-cream p-8 text-center">
        <h3 className="text-xl font-extrabold text-ink">Message sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks for getting in touch. A coordinator will reply within one
          business day — sooner if your shipment is already moving.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-8"
    >
      <h2 className="text-2xl font-extrabold text-ink">Send us a message</h2>
      <p className="mt-2 text-sm text-muted">
        Shipment question, quote follow-up or a new lane — it reaches the
        operations desk directly.
      </p>
      <div className="mt-6 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input required name="name" placeholder="Full name" className={field} />
          <input required type="email" name="email" placeholder="Email address" className={field} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input name="phone" placeholder="Phone number" className={field} />
          <input name="subject" placeholder="Subject" className={field} />
        </div>
        <textarea required name="message" rows={5} placeholder="How can we help?" className={field} />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Send Message
      </button>
    </form>
  );
}
