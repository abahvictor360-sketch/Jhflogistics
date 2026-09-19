import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Jhflogistics operations desk by phone, email or the contact form — replies within one business day.",
};

const channels = [
  {
    icon: PhoneIcon,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    note: "Operations desk, Mon–Fri",
  },
  {
    icon: MailIcon,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Replies within one business day",
  },
  {
    icon: PinIcon,
    label: "Visit us",
    value: site.address,
    note: "Head office and bonded warehouse",
  },
  {
    icon: ClockIcon,
    label: "Opening hours",
    value: site.hours,
    note: "Urgent shipments handled out of hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to the people who move your freight"
        description="No call centre and no ticket queue. Your message reaches a coordinator who can actually price, book and track a shipment."
        image="/images/world-map-truck.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{c.label}</p>
                    <p className="mt-1 text-sm font-bold text-ink">{c.value}</p>
                    <p className="mt-1 text-xs text-muted">{c.note}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 rounded-2xl bg-cream p-5 transition hover:bg-teal-soft"
                >
                  {content}
                </a>
              ) : (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl bg-cream p-5">
                  {content}
                </div>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Before You Write"
            title="Answers to the questions we hear most"
            description="If one of these covers it, you have your answer now rather than tomorrow morning."
          />
          <FAQ />
        </div>
      </section>
    </>
  );
}
