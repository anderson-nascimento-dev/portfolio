import { selectedWork } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Tag from "./Tag";

export default function Work() {
  return (
    <Section id="work" index="02." title="Selected work">
      <div className="grid gap-4 sm:grid-cols-2">
        {selectedWork.map((w, i) => (
          <Reveal key={w.title} delay={(i % 2) * 80}>
            <article className="group flex h-full flex-col rounded-lg border border-border bg-bg-card p-5 transition-colors hover:border-accent/60">
              <header className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  {w.title}
                </h3>
                {w.link && (
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-fg-dim transition-colors hover:text-accent"
                  >
                    link ↗
                  </a>
                )}
              </header>

              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                    problem
                  </dt>
                  <dd className="text-fg-muted">{w.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                    approach
                  </dt>
                  <dd className="text-fg-muted">{w.solution}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                    outcome
                  </dt>
                  <dd className="text-accent-2">{w.outcome}</dd>
                </div>
              </dl>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
                {w.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
