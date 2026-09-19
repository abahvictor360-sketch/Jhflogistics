const partners = [
  "GlobalLine",
  "Freightex",
  "Transbound",
  "Trucking Co.",
  "Portside",
  "CargoWay",
];

export default function Partners() {
  return (
    <section className="border-b border-black/5 bg-white py-10">
      <div className="container-x">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-muted">
          Trusted by shippers and carriers worldwide
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-xl font-extrabold tracking-tight text-ink/55 transition hover:text-ink/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
