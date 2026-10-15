import Image from "next/image";

const APPS = [
  {
    name: "REST API",
    tech: "Python / Flask",
    body: "Powers every app in the suite, with a payment layer that processes orders through Square or Stripe.",
  },
  {
    name: "Dashboard",
    tech: "React",
    body: "Where restaurants configure payment integrations, deploy their apps, and manage their subscription.",
  },
  {
    name: "Ordering app",
    tech: "Next.js",
    body: "Customer-facing online ordering, server-side rendered for speed and search visibility.",
  },
  {
    name: "Terminal app",
    tech: "Next.js",
    body: "Shows cooks incoming orders in the kitchen, refreshed every minute.",
  },
  {
    name: "Kiosk app",
    tech: "Next.js",
    body: "Self-checkout from a tablet or kiosk screen for food trucks and small restaurants.",
  },
];

const INFRA = ["Kubernetes", "Helm", "Jenkins", "Private Docker registry", "Flyway"];

export default function GrubStackSpotlight() {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 border-t border-border bg-background">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Side project &middot; Sep 2022 – Present
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            GrubStack
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">
            A subscription SaaS suite for food ordering that I founded and run
            end to end — from the Kubernetes cluster it deploys to, through to
            the payment integrations restaurants rely on.
          </p>
        </div>

        <Image
          src="/images/grubstack-preview.webp"
          alt="GrubStack's terminal app on a tablet, the dashboard on a desktop monitor, and the ordering app on a phone"
          width={1672}
          height={782}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="mt-10 h-auto w-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="flex flex-col gap-2 rounded-card border border-border bg-white p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-narrow font-bold text-lg text-ink">
                  {app.name}
                </h3>
                {app.tech && (
                  <span className="rounded-full border border-accent px-3 py-1 text-xs font-bold text-accent">
                    {app.tech}
                  </span>
                )}
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                {app.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold text-muted-2">
              Runs on
            </span>
            {INFRA.map((item) => (
              <span
                key={item}
                className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href="https://grubstack.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold text-accent hover:underline underline-offset-4"
          >
            Visit grubstack.app &#8599;
          </a>
        </div>
      </div>
    </section>
  );
}
