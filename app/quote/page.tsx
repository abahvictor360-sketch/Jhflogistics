import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { CheckIcon, ClockIcon, PhoneIcon, ShieldIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request A Quote",
  description:
    "Send Jhflogistics your lane and cargo details and get a costed ocean, air and road comparison within one business day.",
};

const promises = [
  {
    icon: ClockIcon,
    title: "Answer in one business day",
    body: "Every request is picked up by a coordinator, not an auto-responder.",
  },
  {
    icon: ShieldIcon,
    title: "All-in pricing",
    body: "Freight, handling, documentation and accessorials shown line by line before you commit.",
  },
  {
    icon: PhoneIcon,
    title: "A named contact",
    body: "The person who quotes your lane stays with the shipment through to delivery.",
  },
];

const included = [
  "Ocean, air and road compared side by side",
  "Realistic transit windows, not best-case figures",
  "Customs and documentation scope stated up front",
  "Insurance options priced with the freight",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request A Quote"
        title="Send the lane. Get a costed answer."
        description="Origin, destination, weight and the date you need it landed is enough to start. We will tell you what else we need."
        image="/images/port-terminal.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              What you get back
            </h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm text-ink/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-6">
              {promises.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal-deep">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={site.phoneHref}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-teal-deep px-6 py-4 text-white"
            >
              <PhoneIcon className="h-5 w-5 text-brand-light" />
              <span className="text-sm">
                <span className="block text-xs text-teal-soft/70">Shipping today?</span>
                <span className="font-bold">{site.phone}</span>
              </span>
            </a>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
