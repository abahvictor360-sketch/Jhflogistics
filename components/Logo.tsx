import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Jhflogistics home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 16V7h9v9" />
          <path d="M12 10h4.5L21 13.5V16h-2.5" />
          <circle cx="7" cy="17.5" r="1.7" />
          <circle cx="16.5" cy="17.5" r="1.7" />
        </svg>
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${text}`}>
        Jhf<span className="text-brand">logistics</span>
      </span>
    </Link>
  );
}
