"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition ${
              isOpen ? "border-brand-ink/40 bg-white shadow-sm" : "border-black/8 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-ink">{item.q}</span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold transition ${
                  isOpen ? "bg-brand-ink text-white" : "bg-brand-soft text-brand-ink"
                }`}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
