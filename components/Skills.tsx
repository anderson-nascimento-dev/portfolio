import { skills } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" index="04." title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 4) * 60}>
            <div className="h-full rounded-lg border border-border bg-bg-card p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {g.group}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-fg-muted">
                {g.items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="text-fg-dim" aria-hidden="true">
                      ›
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
