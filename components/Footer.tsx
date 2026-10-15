"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/portfolio";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

export default function Footer() {
  // Rendered empty on the server so the static prerender stays deterministic,
  // then filled with the visitor's current year on the client.
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-8 font-mono text-xs text-fg-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year ?? ""} {profile.name}
        </p>
        <p>Built with Next.js, React, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
