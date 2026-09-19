import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { ArrowIcon } from "../Icons";
import { cases } from "@/lib/site";

export default function Cases() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Best cases by Jhflogistics"
            description="A sample of the moves our operations desk planned, permitted and delivered."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-teal-deep hover:text-white"
          >
            All Projects
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group relative h-72 overflow-hidden rounded-3xl shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-flex rounded-full bg-brand-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
