import Image from "next/image";
import Link from "next/link";
import { GRUBSTACK_APPS, GRUBSTACK_INFRA } from "@/lib/grubstack";

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
            A subscription SaaS suite for food ordering that I founded and
            built end to end — from the Kubernetes cluster it deploys to,
            through to the Square and Stripe payment integrations.
          </p>
        </div>

        <Image
          // Hard-coded Strapi upload for now; move to a CMS field later.
          src="https://api.williamhuntjr.com/uploads/grubstack_6d5be43ba5.png"
          alt="The grubstack.app website shown on a laptop, desktop monitor, tablet and phone"
          width={1857}
          height={847}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GRUBSTACK_APPS.map((app) => (
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
            {GRUBSTACK_INFRA.map((item) => (
              <span
                key={item}
                className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/grubstack"
              className="text-sm font-bold text-accent hover:underline underline-offset-4"
            >
              Read the case study &rarr;
            </Link>
            <a
              href="https://grubstack.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-accent hover:underline underline-offset-4"
            >
              Visit grubstack.app &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
