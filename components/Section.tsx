import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="mb-10 flex items-center gap-3 font-mono text-sm text-fg-muted">
            <span className="text-accent">{index}</span>
            <span className="text-fg text-base sm:text-lg font-semibold tracking-tight">
              {title}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
