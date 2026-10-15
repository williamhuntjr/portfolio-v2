// SAMPLE DATA — replace these with your real numbers.
const STATS = [
  {
    value: "10+",
    label: "Years building for the web",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        <path d="M8 14h3M8 17h6" />
      </>
    ),
  },
  {
    value: "20+",
    label: "Projects shipped",
    icon: (
      <>
        <path d="M12 15l-3-3c1.5-4.5 4.5-8 10-9-1 5.5-4.5 8.5-9 10" />
        <path d="M9 12l-4-.5L7.5 8.5h4M12 15l.5 4 3-2.5v-4" />
        <path d="M6.5 17.5c-1.5.5-2.5 2-2.5 3 1 0 2.5-1 3-2.5" />
      </>
    ),
  },
  {
    value: "5",
    label: "Apps in the GrubStack suite",
    icon: (
      <>
        <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5L12 21l9-4.5" />
      </>
    ),
  },
  {
    value: "16",
    label: "Technologies in regular use",
    icon: (
      <>
        <path d="M8.5 6L3 12l5.5 6" />
        <path d="M15.5 6L21 12l-5.5 6" />
        <path d="M13.5 4.5l-3 15" />
      </>
    ),
  },
];

export default function StatsRow() {
  return (
    <section className="px-6 md:px-16 pb-12 md:pb-16">
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-card border border-border bg-border">
        {STATS.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col gap-3 bg-white px-5 py-6 md:flex-row md:items-center md:gap-4 md:px-7 md:py-7"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent-tint">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {stat.icon}
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-extrabold text-3xl md:text-4xl text-ink">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-muted">
                {stat.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
