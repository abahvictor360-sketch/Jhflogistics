import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/port-terminal.jpg",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-deep">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/90 to-teal-deep/50" aria-hidden />
      <div className="container-x relative py-20 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-light">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-teal-soft/85">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/quote"
            className="rounded-full bg-brand-ink px-6 py-3 text-white transition hover:bg-brand-dark"
          >
            Request A Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-6 py-3 text-white transition hover:bg-white/10"
          >
            Talk To Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
