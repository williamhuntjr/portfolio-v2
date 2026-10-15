import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import {
  OrderFlow,
  ProvisioningFlow,
  TenantArchitecture,
} from "@/components/GrubStackDiagrams";
import { GRUBSTACK_APPS, GRUBSTACK_INFRA } from "@/lib/grubstack";

export const metadata: Metadata = {
  title: "GrubStack Case Study",
  description:
    "How William Hunt designed and built GrubStack: a dedicated-tenant SaaS suite that gives food trucks and small restaurants affordable, modern order processing.",
  alternates: { canonical: "/grubstack" },
};

const FACTS = [
  { label: "Role", value: "Founder & sole engineer" },
  { label: "Timeline", value: "Sep 2022 – Present" },
  { label: "Status", value: "Preparing for launch" },
];

function Section({
  eyebrow,
  title,
  children,
  tinted = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      className={`px-6 md:px-16 py-10 md:py-16 border-t border-border ${
        tinted ? "bg-background" : "bg-white"
      }`}
    >
      <div className="container-page flex flex-col gap-6">
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

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-3xl flex-col gap-4 text-[17px] leading-relaxed text-muted">
      {children}
    </div>
  );
}

export default function GrubStackCaseStudy() {
  return (
    <>
      <section className="px-6 md:px-16 pt-12 md:pt-22 pb-10 md:pb-16">
        <div className="container-page flex flex-col gap-5">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Case study &middot; GrubStack
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] text-ink">
            Enterprise-level ordering for the small guy.
          </h1>
          <p className="max-w-3xl text-[17px] leading-relaxed text-muted">
            GrubStack is a subscription SaaS suite for food trucks and small
            restaurants: online ordering, a self-checkout kiosk, a kitchen
            terminal and a management dashboard. Every restaurant runs on its
            own dedicated deployment, and I designed, built and operate all of
            it.
          </p>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5 bg-white px-5 py-4">
                <dt className="text-xs font-bold tracking-wide text-muted-2 uppercase">
                  {fact.label}
                </dt>
                <dd className="text-[15px] font-semibold text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <Image
            src="/images/grubstack-preview.webp"
            alt="GrubStack's terminal app on a tablet, the dashboard on a desktop monitor, and the ordering app on a phone"
            width={1672}
            height={782}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mt-6 h-auto w-full"
            preload
          />

          <a
            href="https://grubstack.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm font-bold text-accent hover:underline underline-offset-4"
          >
            Visit grubstack.app &#8599;
          </a>
        </div>
      </section>

      <Section eyebrow="Why" title="Built for the small guy." tinted>
        <Prose>
          <p>
            Food trucks and small restaurants usually have to choose between
            software they can afford and software that&apos;s actually
            modern. I wanted the small guy to have both: affordable order
            processing built on current technology, with the kind of features
            normally reserved for businesses that can pay enterprise prices.
          </p>
          <p>
            GrubStack started three and a half years ago as a prototype, a
            way to keep building real software while I was looking for work.
            It never stopped growing. Today it&apos;s a full SaaS suite of
            five apps, with payments and the infrastructure to give every
            restaurant its own deployment.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="The suite" title="Five apps, one platform.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GRUBSTACK_APPS.map((app) => (
            <div
              key={app.name}
              className="flex flex-col gap-2 rounded-card border border-border bg-background p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-narrow font-bold text-lg text-ink">
                  {app.name}
                </h3>
                <span className="rounded-full border border-accent px-3 py-1 text-xs font-bold text-accent">
                  {app.tech}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                {app.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Onboarding" title="From sign-up to live." tinted>
        <Prose>
          <p>
            Subscribing, connecting payments and deploying a restaurant&apos;s
            apps all happen through the platform, so getting a new restaurant
            live is a guided flow rather than a manual setup.
          </p>
        </Prose>
        <ProvisioningFlow />
      </Section>

      <Section eyebrow="Ordering" title="The life of an order.">
        <Prose>
          <p>
            Once a restaurant is live, an order moves through the suite from
            the customer&apos;s screen to the kitchen and back. The customer
            can see where their order is at every step.
          </p>
        </Prose>
        <OrderFlow />
      </Section>

      <Section eyebrow="Architecture" title="One deployment per restaurant." tinted>
        <Prose>
          <p>
            Most SaaS products put hundreds of customers on one shared copy of
            the app. GrubStack is dedicated-tenant: each restaurant gets its
            own set of apps in its own space in the Kubernetes cluster. Each
            restaurant&apos;s apps are isolated from everyone else&apos;s, and
            each deployment can be upgraded on its own.
          </p>
          <p>
            Releases run through Jenkins, which builds images into a private
            Docker registry and redeploys each customer&apos;s apps with Helm.
            When I need more capacity, I add nodes to the cluster.
          </p>
        </Prose>
        <TenantArchitecture />
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
      </Section>

      <Section eyebrow="Payments" title="Square or Stripe, one codebase.">
        <Prose>
          <p>
            Restaurants already have a payment provider they trust, so
            GrubStack works with two of the most widely used. Each restaurant
            connects its own Stripe or Square account through OAuth, and
            customer payments go directly to them.
          </p>
          <p>
            Behind that is an abstract payment class: the rest of the API asks
            it to charge an order, and a Square or Stripe implementation does
            the work. Adding another provider would mean writing a new
            implementation rather than reworking the ordering flow.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Hardest problem" title="Taming database changes." tinted>
        <Prose>
          <p>
            Early on, I maintained the database structure by hand. That worked
            for one deployment, but it doesn&apos;t scale to one per
            restaurant: every manual change is a chance for two databases to
            drift apart.
          </p>
          <p>
            I moved to Flyway, so every schema change is now a versioned
            migration tracked alongside the code. Each deployment applies the
            same migrations in the same order, and I always know exactly which
            version a database is on.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Operations" title="Keeping it running.">
        <Prose>
          <p>
            Uptime Kuma runs on a separate external server and keeps watch
            over the cluster, so if the cluster has a problem, the monitoring
            isn&apos;t affected by it. I keep the server stack patched, write
            and maintain the software documentation, and render the public
            website and ordering app on the server for speed and search
            visibility.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="What's next" title="Card readers, then launch." tinted>
        <Prose>
          <p>
            I&apos;m currently integrating Stripe and Square card readers so
            restaurants can take in-person payments through GrubStack too.
            Once that&apos;s finished, I&apos;m ready to start selling it. The goal
            hasn&apos;t changed: be the most affordable option, while offering
            enterprise-level features to businesses that couldn&apos;t
            otherwise afford them.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Looking back" title="What I'd do differently.">
        <Prose>
          <p>
            I&apos;d plan it like a team project from day one. Because
            GrubStack was my own project, built in my free time with no
            deadlines, I tracked the work in my head. A Kanban board or Jira
            with a real backlog would have made priorities clearer and the
            path from prototype to product shorter.
          </p>
        </Prose>
      </Section>

      <CtaBand />
    </>
  );
}
