"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-teal-deep text-teal-soft/80 lg:block">
        <div className="container-x flex h-11 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-brand-light" />
              {site.hours}
            </span>
            <span className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-brand-light" />
              {site.address}
            </span>
          </div>
          <a href={site.phoneHref} className="flex items-center gap-2 transition hover:text-white">
            <PhoneIcon className="h-4 w-4 text-brand-light" />
            Call Us Anytime: <span className="font-semibold text-white">{site.phone}</span>
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-all ${
          scrolled
            ? "border-black/5 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-brand-soft text-brand-ink"
                      : "text-ink/75 hover:bg-cream hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-flex"
            >
              Request A Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 text-ink lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                {open ? (
                  <>
                    <path d="m6 6 12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-black/5 bg-white lg:hidden">
            <nav className="container-x flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-ink/80 hover:bg-cream"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-2 rounded-full bg-brand-ink px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request A Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
