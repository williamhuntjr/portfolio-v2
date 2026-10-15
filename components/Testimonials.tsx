// Drafted from real client work — confirm the wording with each client before publishing.
const TESTIMONIALS = [
  {
    quote:
      "William took the static HTML website I'd made with ChatGPT and turned it into a custom WordPress theme. Now it's much easier for me to make changes to my website on my own.",
    name: "Dylan Lewis",
    role: "Founder, Cape Henry Mechanical",
  },
  {
    quote:
      "Our Next.js website was poorly built when William took it over. He cleaned up the code and set up automated deployments with Supabase and Vercel.",
    name: "Hasseb Obeidy",
    role: "Owner, Auto and All Automotive",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 px-6 md:px-16 py-12 md:py-20 bg-background border-t border-border">
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          Kind words
        </span>
        <h2 className="font-heading font-extrabold text-4xl text-ink">
          What people I&apos;ve worked with say.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col gap-6 rounded-card border border-border bg-white p-8"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="var(--accent-tint-strong)"
              aria-hidden="true"
            >
              <path d="M9.5 6C6.5 6 4 8.5 4 11.5V18h6v-6H7c0-1.7 1.3-3 3-3V6h-.5zm10 0c-3 0-5.5 2.5-5.5 5.5V18h6v-6h-3c0-1.7 1.3-3 3-3V6h-.5z" />
            </svg>
            <blockquote className="flex-1 text-[17px] leading-relaxed text-ink">
              {item.quote}
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-sm font-bold text-accent">
                {initials(item.name)}
              </span>
              <span className="flex flex-col">
                <span className="text-[15px] font-bold text-ink">
                  {item.name}
                </span>
                <span className="text-sm text-muted-2">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
