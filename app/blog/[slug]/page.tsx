import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { posts } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="bg-teal-deep">
        <div className="container-x py-16 sm:py-20">
          <Link href="/blog" className="inline-block py-2 text-sm font-semibold text-brand-light hover:text-white">
            ← All articles
          </Link>
          <span className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-light">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-teal-soft/75">
            {post.author} · {post.date}
          </p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="container-x max-w-3xl">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1000}
              height={560}
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="h-72 w-full object-cover"
            />
          </div>
          <p className="mt-8 text-lg font-medium leading-relaxed text-ink">{post.excerpt}</p>
          {post.body.map((para) => (
            <p key={para.slice(0, 32)} className="mt-5 text-[15px] leading-relaxed text-muted">
              {para}
            </p>
          ))}

          <div className="mt-10 rounded-3xl bg-cream p-7">
            <h2 className="text-lg font-bold text-ink">Planning a shipment on this lane?</h2>
            <p className="mt-2 text-sm text-muted">
              Send us the details and a coordinator will come back with a costed
              routing within one business day.
            </p>
            <Link
              href="/quote"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Request A Quote
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <h2 className="mt-14 text-xl font-extrabold text-ink">More from the desk</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {more.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="rounded-2xl border border-black/8 p-5 transition hover:border-brand"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
                  {other.category}
                </p>
                <p className="mt-2 text-sm font-bold leading-snug text-ink">{other.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
