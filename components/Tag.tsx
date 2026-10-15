export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded border border-border bg-bg-elev px-2 py-0.5 font-mono text-[11px] leading-5 text-fg-muted">
      {children}
    </span>
  );
}
