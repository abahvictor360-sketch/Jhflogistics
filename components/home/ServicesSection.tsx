import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { ArrowIcon } from "../Icons";
import { services } from "@/lib/site";

export default function ServicesSection() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Services"
          title="Wide variety of logistics services"
          description="One partner across ocean, air, road and storage — so a delay in one leg is solved by the team that controls the next one."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand transition hover:gap-3"
                >
                  Read More
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-teal-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-mid"
          >
            View All Services
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
