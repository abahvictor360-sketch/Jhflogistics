import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { services } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.excerpt };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-teal-deep">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/90 to-teal-deep/55" />
        <div className="container-x relative py-20 sm:py-24">
          <Link href="/services" className="text-sm font-semibold text-brand hover:text-white">
            ← All services
          </Link>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-teal-soft/85">
            {service.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              What this service covers
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Every {service.title.toLowerCase()} booking is planned by a named
              coordinator who owns it end to end. We quote against live rates,
              confirm capacity before you commit, and publish milestone events so
              your planning team is never guessing where the cargo sits.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              If a leg goes off plan, you hear it from us with an option
              attached — a re-route, a partial uplift or a revised arrival you
              can take to your own customer.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm font-medium text-ink/80"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={560}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-64 w-full object-cover"
              />
            </div>

            <h3 className="mt-10 text-xl font-extrabold text-ink">Other services</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-black/8 px-5 py-4 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
                >
                  {other.title}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <QuoteForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
