"use client";

import { useState } from "react";
import { QuoteIcon, StarIcon } from "../Icons";

const items = [
  {
    quote:
      "We moved eleven containers a month with three different forwarders and spent most of our week chasing status. One partner later, the chasing stopped and our landed cost dropped about nine percent.",
    name: "Rachel Ballinger",
    role: "Supply Chain Manager, Northway Retail",
  },
  {
    quote:
      "Our vessel rolled two days before a promotion window. Jhflogistics had part of the order on an air uplift the same afternoon and told us before our client noticed anything.",
    name: "Daniel Mensah",
    role: "Operations Director, Kestrel Foods",
  },
  {
    quote:
      "The documentation desk catches things our own team used to miss. In two years we have not had a single container held for paperwork.",
    name: "Priya Raman",
    role: "Import Lead, Halden Manufacturing",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const item = items[i];

  return (
    <div className="rounded-3xl bg-teal-deep p-7 text-white sm:p-9">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-light">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
        Testimonials
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight">
        What our clients say about our service
      </h2>

      <div className="mt-7 rounded-2xl bg-white/5 p-6">
        <QuoteIcon className="h-8 w-8 text-brand-light/80" />
        <p className="mt-4 text-[15px] leading-relaxed text-teal-soft/90">{item.quote}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white">{item.name}</p>
            <p className="mt-0.5 text-xs text-teal-soft/70">{item.role}</p>
          </div>
          <div className="flex gap-0.5 text-brand-light">
            {Array.from({ length: 5 }).map((_, s) => (
              <StarIcon key={s} className="h-4 w-4" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Show testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className="group grid h-11 place-items-center px-1"
          >
            <span
              className={`block h-2.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-brand-light" : "w-2.5 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
