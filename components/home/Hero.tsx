import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, PhoneIcon } from "../Icons";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal-deep">
      <Image
        src="/images/port-terminal.jpg"
        alt="Container terminal at sunset with ship, cranes and trucks"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-deep via-teal-deep/92 to-teal-deep/55"
        aria-hidden
      />
      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Jhflogistics Transportation
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Welcome To Jhflogistics
            <span className="block text-brand">Cargo Transport Services</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-teal-soft/85">
            Take your business to the next level with a freight partner who owns
            the whole chain — booking, customs, warehousing and final-mile
            delivery on a single tracked reference.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-ink/30 transition hover:bg-brand-dark"
            >
              Contact Jhflogistics
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-brand-light"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25">
                <PhoneIcon className="h-5 w-5 text-brand-light" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-teal-soft/70">
                  Call us anytime
                </span>
                {site.phone}
              </span>
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { v: "25+", l: "Countries served" },
              { v: "20 yrs", l: "Freight experience" },
              { v: "99.2%", l: "On-time delivery" },
            ].map((item) => (
              <div key={item.l}>
                <dt className="text-2xl font-extrabold text-white">{item.v}</dt>
                <dd className="mt-1 text-xs leading-snug text-teal-soft/70">{item.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up">
          <div className="overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/40">
            <Image
              src="/images/container-ship-ocean.jpg"
              alt="Container vessel under way at sunrise"
              width={900}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl sm:-bottom-6 sm:-left-8 sm:right-auto sm:w-60">
            <p className="text-3xl font-extrabold text-ink">50k+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
              Shipments delivered worldwide
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream">
              <span className="block h-full w-[86%] rounded-full bg-brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
