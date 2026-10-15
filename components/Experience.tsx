import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Tag from "./Tag";

export default function Experience() {
  return (
    <Section id="experience" index="03." title="Experience">
      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative pb-14 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]"
            />
            <Reveal>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-fg-dim">
                  {job.start} – {job.end}
                </p>
              </header>
              <p className="mt-1 font-mono text-xs text-fg-dim">{job.location}</p>

              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-fg-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                {job.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
