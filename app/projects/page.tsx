import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/Icons";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from the Jhflogistics operations desk — relief cargo, bulk grain, ocean consolidation and heavy-lift project moves.",
};

const details = [
  {
    scope: "1,200 tonnes of relief supplies",
    result: "Delivered 6 days inside the agreed window across four borders.",
  },
  {
    scope: "300 metric tonnes of bulk grain",
    result: "Rail-to-road transfer cut landed cost by 14% against the previous route.",
  },
  {
    scope: "42 FCL containers, Shenzhen to Long Beach",
    result: "Zero customs holds across the full programme.",
  },
  {
    scope: "200 metric tonnes, regional road corridor",
    result: "Dedicated fleet held a 99% on-time record over eight months.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Moves we planned, permitted and delivered"
        description="Every project below was priced, routed and supervised by our own operations desk. The numbers are the ones we reported to the client."
        image="/images/container-truck-port.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {cases.map((item, i) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-brand-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-lg font-bold leading-snug text-ink">{item.title}</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-ink/70">Scope</dt>
                    <dd className="mt-0.5 text-muted">{details[i].scope}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink/70">Result</dt>
                    <dd className="mt-0.5 text-muted">{details[i].result}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow="Your Move Next"
            title="Tell us what you need shifted"
            description="Out-of-gauge, time-critical or simply high volume — send the brief and we will come back with a route, a permit plan and a costed schedule."
          />
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Start A Project
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
