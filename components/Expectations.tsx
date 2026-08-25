const ITEMS = [
  {
    title: "Infrastructure & Monitoring",
    body: "I'm comfortable owning server configuration and setting up monitoring — tools like Zabbix, Prometheus, or whatever a team already relies on — so problems get caught before they become outages.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 8v4l2.5 2.5" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    body: "I keep stakeholders in the loop with regular status updates, so a project's progress is never a mystery to the people waiting on it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </svg>
    ),
  },
  {
    title: "Fast, Not Reckless",
    body: "I take deadlines seriously and move quickly without cutting corners on quality — when crunch time hits, I show up.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Responsive When It Matters",
    body: "I'm quick to respond when something urgent comes up, and I make it a priority to unblock a team rather than let a blocker sit.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
        <path d="M19.5 19v1a3 3 0 0 1-3 3h-3" />
      </svg>
    ),
  },
];

export default function Expectations() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 px-6 md:px-16 py-12 md:py-20 bg-white border-t border-border">
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          You can depend on me
        </span>
        <h2 className="font-heading font-extrabold text-4xl text-ink">
          What can you expect?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent-tint">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-narrow font-bold text-lg text-ink">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
