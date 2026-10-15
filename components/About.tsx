import { profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" index="01." title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-fg-muted">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="md:col-span-2" delay={120}>
          <dl className="grid grid-cols-2 gap-3">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-bg-card p-4"
              >
                <dt className="font-mono text-xs text-fg-dim">{s.label}</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-accent">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
