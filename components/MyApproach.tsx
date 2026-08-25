const REASONS = [
  {
    number: 1,
    title: "I build with modern frameworks.",
    subtitle: "React.js front-end, any back-end",
    body: "React.js is my primary front-end framework — it lets me prototype and iterate quickly without cutting corners. I'm just as comfortable building the backend API behind it, in Python or whatever stack a team already relies on.",
  },
  {
    number: 2,
    title: "I automate the build process.",
    subtitle: "With CI/CD pipelines",
    body: "I set up staging environments with automated build pipelines from day one. Every iteration ships to staging for testing first, then gets promoted to production through a repeatable, automated process.",
  },
  {
    number: 3,
    title: "I test what matters.",
    subtitle: "With integration and unit tests",
    body: "Tests are usually the first thing to get cut under a deadline — I don't cut them. I write unit and integration tests for an application's critical paths so regressions get caught before users do.",
  },
  {
    number: 4,
    title: "I deploy to the cloud.",
    subtitle: "ECS, Kubernetes, and beyond",
    body: "I build Jenkins and GitHub Actions pipelines to ship applications to container platforms like ECS and Kubernetes, so deployments stay consistent, fast, and repeatable.",
  },
];

export default function MyApproach() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 px-6 md:px-16 py-12 md:py-20 bg-background border-t border-border">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          My approach
        </span>
        <h2 className="font-heading font-extrabold text-4xl text-ink">
          How I approach every project.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REASONS.map((reason) => (
          <div
            key={reason.number}
            className="flex flex-col gap-3 rounded-card border border-border bg-white p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {reason.number}
              </span>
              <h3 className="font-narrow font-bold text-xl text-ink">
                {reason.title}
              </h3>
            </div>
            <span className="text-xs font-bold tracking-wide text-accent uppercase">
              {reason.subtitle}
            </span>
            <p className="text-[15px] leading-relaxed text-muted">
              {reason.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
