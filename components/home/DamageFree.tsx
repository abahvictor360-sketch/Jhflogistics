import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { CheckIcon, PhoneIcon } from "../Icons";
import { site } from "@/lib/site";

const promises = [
  "Insured Shipping",
  "Expanded Freight",
  "Phase Product Booking",
  "Intermodal Shipping",
  "Refined Shipping",
  "Documentation Handled",
];

export default function DamageFree() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Jhflogistics"
            title="We'll keep your items damage free"
            description="Cargo is packed, braced and documented to the standard of the strictest lane it will travel. Where a shipment changes mode, our operations desk owns the handover so nothing sits unattended on a quay."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-teal-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-mid"
            >
              Contact Us
            </Link>
            <a href={site.phoneHref} className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span className="text-sm">
                <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                  Have questions?
                </span>
                <span className="font-bold text-ink">{site.phone}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
            <Image
              src="/images/container-truck-port.jpg"
              alt="Container truck leaving a port terminal"
              width={900}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-brand-ink p-6 text-white shadow-lg sm:right-auto sm:w-64">
            <p className="text-4xl font-extrabold leading-none">20</p>
            <p className="mt-2 text-sm font-medium leading-snug text-white/90">
              Years of hands-on freight and terminal experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
