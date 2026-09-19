"use client";

import { useState } from "react";
import { services } from "@/lib/site";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-black/5">
        <h3 className="text-xl font-extrabold text-ink">Request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you. A freight coordinator will come back with a costed option
          within one business day. For an urgent shipment, call us directly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/75 outline-none transition focus:border-white focus:bg-white/15";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-3xl bg-brand-ink p-7 shadow-xl shadow-brand-ink/20 ${compact ? "" : "sm:p-8"}`}
    >
      <h3 className="text-2xl font-extrabold text-white">Request Quote Form</h3>
      <p className="mt-2 text-sm text-white/90">
        Tell us the lane and the cargo. You get a costed comparison, not a
        brochure.
      </p>

      <div className="mt-6 space-y-3">
        <input required name="name" placeholder="Full name" className={field} />
        <div className="grid gap-3 sm:grid-cols-2">
          <input required type="email" name="email" placeholder="Email address" className={field} />
          <input required name="phone" placeholder="Phone number" className={field} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input required name="origin" placeholder="Origin city / port" className={field} />
          <input required name="destination" placeholder="Destination city / port" className={field} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <select name="service" defaultValue="" required className={`${field} text-white`}>
            <option value="" disabled className="text-ink">
              Freight type
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="text-ink">
                {s.title}
              </option>
            ))}
          </select>
          <input name="weight" placeholder="Weight / volume" className={field} />
        </div>
        <textarea
          name="message"
          rows={3}
          placeholder="Cargo description, timing and anything else we should know"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-teal-deep px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink"
      >
        Get A Quote
      </button>
      <p className="mt-4 text-center text-sm text-white/90">
        Or give us a call: <span className="font-bold text-white">(998) 765 4321</span>
      </p>
    </form>
  );
}
