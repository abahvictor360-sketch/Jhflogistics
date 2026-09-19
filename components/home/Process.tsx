import SectionHeading from "../SectionHeading";
import { BoxIcon, RouteIcon, TruckIcon } from "../Icons";

const steps = [
  {
    icon: BoxIcon,
    step: "Step 1",
    title: "Receive Packages",
    body: "We collect from your supplier, verify counts against the packing list and seal the unit before it leaves the dock.",
  },
  {
    icon: RouteIcon,
    step: "Step 2",
    title: "Transport Packages",
    body: "Cargo moves on the routing we costed with you — ocean, air or road — with milestone events at every handover.",
  },
  {
    icon: TruckIcon,
    step: "Step 3",
    title: "Deliver Packages",
    body: "Customs cleared ahead of arrival and final-mile delivery booked to your window, with proof of delivery the same day.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="How We Work"
          title="We always follow the best ways of logistics"
          description="Three stages, one owner. The same coordinator signs off each handover, so accountability never falls between teams."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-ink">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
