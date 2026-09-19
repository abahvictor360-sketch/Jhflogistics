import Link from "next/link";
import Logo from "./Logo";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { services, site } from "@/lib/site";

const industries = [
  "Frozen Foods",
  "Automobile",
  "Machinery",
  "Retail & Apparel",
  "Oil & Gas",
  "Agriculture",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-teal-soft/75">
      <div className="container-x -mt-16 pb-16">
        <div className="grid gap-6 rounded-3xl bg-white p-7 shadow-xl shadow-black/10 md:grid-cols-[1.1fr_1fr] md:items-center md:p-9">
          <div>
            <h3 className="text-2xl font-extrabold text-ink">Track Your Freight</h3>
            <p className="mt-2 text-sm text-muted">
              Enter your booking or container reference and we will send milestone
              updates straight to your inbox.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" action="/contact">
            <input
              type="text"
              name="reference"
              required
              placeholder="Booking / container number"
              className="w-full rounded-full border border-black/10 bg-cream px-5 py-3 text-sm text-ink outline-none transition focus:border-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Track Now
            </button>
          </form>
        </div>
      </div>

      <div className="container-x grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-2xl bg-white/5 p-5">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed">
              Jhflogistics moves ocean, air and land freight for importers and
              manufacturers who need a schedule they can plan around.
            </p>
            <Link
              href="/quote"
              className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-white">Industries Served</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-white">Company Info</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1 transition hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-white">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="inline-block py-1 transition hover:text-brand">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jhflogistics. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-2 py-1 transition hover:text-brand">
              <PhoneIcon className="h-4 w-4 text-brand" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 py-1 transition hover:text-brand">
              <MailIcon className="h-4 w-4 text-brand" />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-brand" />
              Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
