import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon, GlobeIcon, ShieldIcon, ClockIcon } from "@/components/Icons";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jhflogistics is a freight forwarder built by operators — twenty years of ocean, air and land experience behind every booking.",
};

const values = [
  {
    icon: ShieldIcon,
    title: "Accountability",
    body: "One named coordinator owns your shipment from quote to proof of delivery. No transfers, no version of events that changes by department.",
  },
  {
    icon: ClockIcon,
    title: "Honest transit times",
    body: "We publish the realistic window, not the best case. Planning against a number that holds is worth more than a number that flatters us.",
  },
  {
    icon: GlobeIcon,
    title: "Local presence",
    body: "Owned desks in five regions and vetted agents elsewhere, so someone accountable is awake in the shipment's time zone.",
  },
];

const milestones = [
  { year: "2006", text: "Founded as a two-truck domestic haulier out of Lagos." },
  { year: "2011", text: "First bonded warehouse opened; customs brokerage brought in house." },
  { year: "2016", text: "Ocean consolidation service launched on the Asia–West Africa trade." },
  { year: "2021", text: "Milestone tracking rolled out as standard on every booking." },
  { year: "2026", text: "Twenty-five countries served across ocean, air, road and rail." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Jhflogistics"
        title="A freight partner built by operators, not brokers"
        description="We started with two trucks and a customs file. Twenty years on we move ocean, air and land freight for importers who need a schedule they can plan a business around."
        image="/images/port-sunset.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Twenty years of moving cargo people depend on"
              description="Most forwarders sell you a rate and hand you to a queue. We kept the operations desk small on purpose: the person who prices your lane is the person who calls when a vessel rolls."
            />
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              That structure costs us a little margin and saves our customers a
              great deal of time. It is also why we say no to lanes we cannot
              service properly rather than subcontract them quietly.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Licensed customs brokerage",
                "Cargo insurance on every load",
                "Bonded and general warehousing",
                "Milestone tracking as standard",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Talk To Our Team
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
            <Image
              src="/images/world-map-truck.jpg"
              alt="Truck on a global route map"
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-deep py-14">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-xs leading-snug text-teal-soft/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title="Three things we will not trade away"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Milestones" title="How we got here" />
          <ol className="mt-12 space-y-5 border-l-2 border-brand/20 pl-7">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[38px] top-1 grid h-5 w-5 place-items-center rounded-full bg-brand ring-4 ring-brand-soft" />
                <p className="text-sm font-extrabold text-brand-ink">{m.year}</p>
                <p className="mt-1 text-[15px] text-ink/80">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
