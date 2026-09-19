import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">
        This shipment took a wrong turn
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[15px] text-muted">
        The page you are looking for is not on our route map. Head back to the
        homepage or tell us what you were trying to find.
      </p>
      <div className="mt-8 flex justify-center gap-3 text-sm font-semibold">
        <Link href="/" className="rounded-full bg-brand px-6 py-3 text-white transition hover:bg-brand-dark">
          Back To Home
        </Link>
        <Link href="/contact" className="rounded-full border border-black/10 px-6 py-3 text-ink transition hover:bg-cream">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
