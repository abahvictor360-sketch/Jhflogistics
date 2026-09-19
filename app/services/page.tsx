import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The full Jhflogistics service range: ocean, air and land freight, warehousing, supply chain consulting and project cargo.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Freight services built around your lane"
        description="Six services, one operations desk. Mix them as the shipment demands. The coordinator and the tracking reference stay the same."
        image="/images/container-ship-ocean.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold leading-snug text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-ink transition hover:gap-3"
                >
                  Service Details
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow="Not sure which service?"
            title="Send us the lane and we will cost all three modes"
            description="Give us origin, destination, weight and the date you need it landed. You get an ocean, air and road comparison with transit times and total landed cost within one business day."
          />
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Request A Quote
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
