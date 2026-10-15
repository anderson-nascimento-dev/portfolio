import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-center px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-36">
        <p className="mb-6 font-mono text-sm text-accent">
          <span className="text-fg-dim">{profile.handle}@portfolio:~$</span> whoami
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-fg-muted sm:text-4xl">
          {profile.title}
        </p>
        <p className="mt-2 font-mono text-sm text-accent-2">{profile.focus}</p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm">
          <a
            href="#work"
            className="rounded bg-accent px-4 py-2 font-medium text-bg transition-opacity hover:opacity-90"
          >
            view work
          </a>
          <a
            href="#contact"
            className="rounded border border-border-strong px-4 py-2 text-fg transition-colors hover:border-accent hover:text-accent"
          >
            get in touch
          </a>
          <span className="ml-1 text-fg-dim">
            {profile.location}
            {profile.remote ? " · open to remote" : ""}
          </span>
        </div>

        <p className="cursor mt-12 font-mono text-sm text-fg-dim">
          {profile.handle}@portfolio:~${" "}
        </p>
      </div>
    </section>
  );
}
