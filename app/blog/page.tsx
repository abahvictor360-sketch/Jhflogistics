import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowIcon } from "@/components/Icons";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the Jhflogistics operations desk on freight rates, customs, tracking and routing decisions.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Notes from the operations desk"
        description="What we are seeing on rates, capacity and customs, written by the people who book the freight rather than a marketing team."
        image="/images/container-ship-ocean.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-muted">
                  {post.author} · {post.date}
                </p>
                <h2 className="mt-2.5 text-lg font-bold leading-snug text-ink">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-ink transition hover:gap-3"
                >
                  Read More
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
