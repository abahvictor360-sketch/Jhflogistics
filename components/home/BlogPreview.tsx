import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { ArrowIcon } from "../Icons";
import { posts } from "@/lib/site";

export default function BlogPreview() {
  return (
    <section className="bg-cream pb-28 pt-20 sm:pt-24">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Blog"
          title="Read all our logistics blogs"
          description="Notes from the operations desk on freight rates, customs and the routing decisions behind them."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-muted">
                  {post.author} · {post.date}
                </p>
                <h3 className="mt-2.5 text-base font-bold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
                >
                  Read More
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
