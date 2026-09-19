import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Jhflogistics operations desk — the coordinators, brokers and planners who own your shipment end to end.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people who answer when you call"
        description="Small desk, deep experience. These are the people who price your lane, clear your paperwork and pick up the phone when a schedule moves."
        image="/images/highway-truck.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl bg-cream p-7 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-teal-deep text-2xl font-extrabold text-white">
                {initials(member.name)}
              </span>
              <h2 className="mt-5 text-base font-bold text-ink">{member.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-ink">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              <div className="mt-5 flex justify-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-teal-deep">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-teal-deep">
                  <PhoneIcon className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-teal-deep py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            light
            eyebrow="Join Us"
            title="We are hiring coordinators and customs brokers"
            description="If you have run a freight desk and want to do it without a script, send us your background. We read every application ourselves."
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Send Your CV
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
