"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/80 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm text-fg">
          <span className="text-accent">~</span>/{profile.handle}
        </a>

        <nav className="hidden items-center gap-6 font-mono text-sm sm:flex" aria-label="Primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <span className="text-accent/70">0{i + 1}.</span> {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-accent/50 px-3 py-1.5 text-accent transition-colors hover:bg-accent-soft"
          >
            resume
          </a>
        </nav>

        <button
          type="button"
          className="sm:hidden font-mono text-sm text-fg-muted"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-bg px-4 py-4 font-mono text-sm sm:hidden"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-fg-muted hover:text-accent"
                >
                  <span className="text-accent/70">0{i + 1}.</span> {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-accent"
              >
                resume ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
