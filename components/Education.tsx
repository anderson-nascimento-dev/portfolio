import { certificates, education, languages } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" index="05." title="Education & certifications">
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-1">
          <div className="h-full rounded-lg border border-border bg-bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-fg">{e.degree}</p>
                  <p className="text-sm text-fg-muted">{e.school}</p>
                  <p className="font-mono text-xs text-fg-dim">
                    {e.start} – {e.end} · {e.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="md:col-span-1" delay={80}>
          <div className="h-full rounded-lg border border-border bg-bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((c) => (
                <li key={c.name}>
                  <p className="font-medium text-fg">{c.name}</p>
                  <p className="font-mono text-xs text-fg-dim">
                    {c.issuer} · {c.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="md:col-span-1" delay={160}>
          <div className="h-full rounded-lg border border-border bg-bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Languages
            </h3>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between">
                  <span className="font-medium text-fg">{l.name}</span>
                  <span className="font-mono text-xs text-fg-dim">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
