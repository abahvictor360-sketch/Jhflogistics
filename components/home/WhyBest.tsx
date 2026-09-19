import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { ArrowIcon, GlobeIcon, PhoneIcon, RouteIcon, WarehouseIcon } from "../Icons";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: GlobeIcon,
    title: "Global Logistics Operation",
    body: "Owned desks in five regions and vetted agents everywhere else, so someone accountable is always in the shipment's time zone.",
  },
  {
    icon: WarehouseIcon,
    title: "Modern Warehousing Techniques",
    body: "Bonded and general storage with scanned putaway, cycle counting and inventory you can query in real time.",
  },
  {
    icon: RouteIcon,
    title: "International Transportation",
    body: "Multimodal routing that compares cost, transit and risk on every lane before we recommend a booking.",
  },
];

export default function WhyBest() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
              <Image
                src="/images/port-sunset.jpg"
                alt="Freight truck, cargo ship and aircraft at a busy port"
                width={1000}
                height={700}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 overflow-hidden rounded-[2rem]">
              <Image
                src="/images/global-network-truck.jpg"
                alt="Truck against a world map of trade routes"
                width={1000}
                height={600}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why we are considered the best in business"
            description="Because the person who quotes your lane is the person who answers when the vessel rolls. No handover to a call centre, no version of events that changes with the department."
          />

          <div className="mt-9 space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{reason.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            More About Us
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-x mt-16">
        <div className="grid overflow-hidden rounded-[2rem] bg-brand md:grid-cols-[1.2fr_1fr]">
          <div className="p-9 sm:p-11">
            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              We ensure safe transportation &amp; delivery
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
              Every load is insured, sealed and tracked from collection to
              signature. If something moves off plan you hear it from us first.
            </p>
            <a
              href={site.phoneHref}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:bg-white/90"
            >
              <PhoneIcon className="h-5 w-5 text-brand" />
              {site.phone}
            </a>
          </div>
          <div className="relative min-h-56">
            <Image
              src="/images/highway-truck.jpg"
              alt="Articulated truck on the highway"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
