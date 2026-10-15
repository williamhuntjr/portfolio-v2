const STEPS = [
  {
    number: 1,
    step: "Build",
    title: "I build with modern frameworks.",
    subtitle: "React.js front-end, any back-end",
    body: "React.js is my primary front-end framework — it lets me prototype and iterate quickly without cutting corners. I'm just as comfortable building the backend API behind it, in Python or whatever stack a team already relies on.",
  },
  {
    number: 2,
    step: "Automate",
    title: "I automate the build process.",
    subtitle: "With CI/CD pipelines",
    body: "I set up staging environments with automated build pipelines from day one. Every iteration ships to staging for testing first, then gets promoted to production through a repeatable, automated process.",
  },
  {
    number: 3,
    step: "Test",
    title: "I test what matters.",
    subtitle: "With integration and unit tests",
    body: "Tests are usually the first thing to get cut under a deadline — I don't cut them. I write unit and integration tests for an application's critical paths so regressions get caught before users do.",
  },
  {
    number: 4,
    step: "Deploy",
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

      <ol className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            className="relative flex gap-5 lg:flex-col lg:gap-5"
          >
            {index < STEPS.length - 1 && (
              // Connector to the next step: vertical on mobile, horizontal on desktop.
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-11 -bottom-6 w-0.5 bg-accent-tint-strong lg:left-12 lg:-right-3 lg:top-[17px] lg:bottom-auto lg:h-0.5 lg:w-auto"
              />
            )}
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {step.number}
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-wide text-accent uppercase">
                {step.step} &middot; {step.subtitle}
              </span>
              <h3 className="font-narrow font-bold text-xl text-ink">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
