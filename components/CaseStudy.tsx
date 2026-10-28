// Layout pieces shared by the case study pages.

export interface CaseStudyFact {
  label: string;
  value: string;
  // Paths for a 24×24 outline icon.
  icon: React.ReactNode;
}

export function FactsRow({ facts }: { facts: CaseStudyFact[] }) {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
      {facts.map((fact) => (
        <li
          key={fact.label}
          className="flex items-center gap-4 bg-white px-5 py-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-accent-tint">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {fact.icon}
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold tracking-wide text-muted-2 uppercase">
              {fact.label}
            </span>
            <span className="text-[15px] font-semibold text-ink">
              {fact.value}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  tinted = false,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
  // Use the full page width (for card grids and diagrams) instead of the
  // narrower reading column.
  wide?: boolean;
}) {
  return (
    <section
      className={`px-6 md:px-16 py-10 md:py-16 border-t border-border ${
        tinted ? "bg-background" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col gap-6 ${wide ? "w-full" : "container-page"}`}
      >
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            {eyebrow}
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-3xl flex-col gap-4 text-[17px] leading-relaxed text-muted">
      {children}
    </div>
  );
}

export function TechChips({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-muted-2">{label}</span>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
