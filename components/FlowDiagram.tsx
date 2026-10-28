// Step-by-step flow diagrams for the case studies. Built from HTML rather
// than SVG so they reflow: steps run left-to-right on desktop and stack on
// mobile.

function FlowArrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-1 text-accent xl:px-1 xl:py-0"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-90 xl:rotate-0"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export function FlowStep({
  number,
  title,
  body,
  children,
}: {
  number: number;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-card border border-border bg-white p-5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
        {number}
      </span>
      <h3 className="font-narrow font-bold text-lg text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{body}</p>
      {children}
    </div>
  );
}

export function Flow({
  label,
  steps,
}: {
  label: string;
  steps: React.ReactNode[];
}) {
  return (
    <figure className="rounded-card border border-border bg-background p-4 md:p-6">
      <figcaption className="sr-only">{label}</figcaption>
      <div className="flex flex-col xl:flex-row xl:items-stretch">
        {steps.map((step, index) => (
          <div key={index} className="contents">
            {index > 0 && <FlowArrow />}
            {step}
          </div>
        ))}
      </div>
    </figure>
  );
}
