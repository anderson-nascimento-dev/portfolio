import { profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    { label: "email", href: `mailto:${profile.email}`, text: profile.email },
    { label: "linkedin", href: profile.linkedin, text: "in/anderson-nascimento" },
    profile.github
      ? { label: "github", href: profile.github, text: profile.github.replace(/^https?:\/\//, "") }
      : null,
  ].filter((l): l is NonNullable<typeof l> => l !== null);

  return (
    <Section id="contact" index="06." title="Contact">
      <Reveal>
        <div className="rounded-lg border border-border bg-bg-card p-6 sm:p-8">
          <p className="max-w-xl text-base leading-relaxed text-fg-muted">
            Open to senior full-stack and backend roles, especially in payments
            infrastructure and LLM products. Remote-friendly. The fastest way to
            reach me is email.
          </p>

          <dl className="mt-6 grid gap-3 font-mono text-sm sm:grid-cols-2">
            {links.map((l) => (
              <div key={l.label} className="flex items-baseline gap-3">
                <dt className="w-16 shrink-0 text-fg-dim">{l.label}</dt>
                <dd>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="break-words text-fg transition-colors hover:text-accent"
                  >
                    {l.text}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded bg-accent px-4 py-2 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            say hello →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
