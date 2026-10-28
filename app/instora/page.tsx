import type { Metadata } from "next";
import Image from "next/image";
import {
  FactsRow,
  Prose,
  Section,
  TechChips,
  type CaseStudyFact,
} from "@/components/CaseStudy";
import CtaBand from "@/components/CtaBand";
import { GenerationFlow } from "@/components/InstoraDiagrams";
import { INSTORA_PILLARS, INSTORA_PLANS, INSTORA_STACK } from "@/lib/instora";

const TITLE = "Instora Case Study";
const DESCRIPTION =
  "How William Hunt designed and built Instora: an AI SaaS that turns one real estate listing form into a complete marketing campaign, listing page and lead inbox.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/instora" },
  // Page-level openGraph replaces the layout's entirely, so restate the
  // shared fields; the image comes from ./opengraph-image.tsx.
  openGraph: {
    title: `${TITLE} | William Hunt`,
    description: DESCRIPTION,
    url: "/instora",
    siteName: "William Hunt",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | William Hunt`,
    description: DESCRIPTION,
  },
};

const FACTS: CaseStudyFact[] = [
  {
    label: "Role",
    value: "Founder & sole engineer",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
      </>
    ),
  },
  {
    label: "Timeline",
    value: "2026 – Present",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      </>
    ),
  },
  {
    label: "Status",
    value: "Live, taking sign-ups",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </>
    ),
  },
];

export default function InstoraCaseStudy() {
  return (
    <>
      <section className="px-6 md:px-16 pt-12 md:pt-22 pb-10 md:pb-16">
        <div className="container-page flex flex-col gap-5">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Case study &middot; Instora
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] text-ink">
            One listing in, a whole campaign out.
          </h1>
          <p className="max-w-3xl text-[17px] leading-relaxed text-muted">
            Instora is an AI marketing tool for real estate agents. An agent
            fills in one short form about a listing, and Instora writes the
            social posts, video script and listing copy, builds a page buyers
            can enquire from, and collects every lead in one place. I
            designed, built and run all of it.
          </p>

          <FactsRow facts={FACTS} />

          <Image
            src="/images/instora-preview.webp"
            alt="Instora's website on a desktop monitor, laptop, tablet and phone, showing a generated Instagram post and a listing page"
            width={1857}
            height={847}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mt-6 h-auto w-full"
            preload
          />

          <a
            href="https://instora.io"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm font-bold text-accent hover:underline underline-offset-4"
          >
            Visit instora.io &#8599;
          </a>
        </div>
      </section>

      <Section eyebrow="Why" title="A real product, end to end." tinted>
        <Prose>
          <p>
            I built Instora to show the full range of work a modern SaaS
            product takes, with AI at its core. That means more than calling a
            model: sign-in, billing, email, background jobs, monitoring and
            backups all have to work too, the way they would at a company.
          </p>
          <p>
            Real estate marketing was a good problem for it. Every new listing
            needs the same pile of writing for different channels, and agents
            want leads out of it, not just posts. Instora covers the whole
            path, from the listing details to a buyer getting in touch.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="The product" title="From listing to lead, in one place." wide>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {INSTORA_PILLARS.map((pillar) => (
            <div
              key={pillar.name}
              className="flex flex-col gap-2 rounded-card border border-border bg-background p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-narrow font-bold text-lg text-ink">
                  {pillar.name}
                </h3>
                <span className="rounded-full border border-accent px-3 py-1 text-xs font-bold text-accent">
                  {pillar.tag}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Hardest problem" title="A minute is a long time to wait." tinted wide>
        <Prose>
          <p>
            Writing a full kit takes Claude anywhere up to a minute, and
            sometimes it takes three calls: one retry if the reply isn&apos;t
            valid JSON, and one rewrite if the fair housing screen flags a
            phrase. Holding a web request open that long is fragile. A
            slow connection, a closed tab or a platform timeout would lose the
            work.
          </p>
          <p>
            So the request doesn&apos;t wait. It saves the listing as
            &ldquo;generating&rdquo; and returns at once, and the generation
            keeps running on the server after the response is sent. The page
            checks the listing&apos;s status every two seconds and shows the
            stages of the kit. If the agent leaves, the kit-ready email brings
            them back. If generation fails, the listing is marked as failed
            and the agent can regenerate it.
          </p>
        </Prose>
        <GenerationFlow />
      </Section>

      <Section eyebrow="Compliance" title="Describe the home, not the buyer.">
        <Prose>
          <p>
            US fair housing law bars ads that suggest who a home is for, so
            &ldquo;perfect for young families&rdquo; or &ldquo;walk to
            church&rdquo; can get an agent in trouble. AI copy writes phrases
            like that easily. Every kit goes through a screen of known risky
            and dated wording. If anything is flagged, Claude gets one chance
            to rewrite those phrases, and anything still flagged is shown to
            the agent with a suggested replacement.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Leads" title="Leads that don't go cold." tinted>
        <Prose>
          <p>
            Each listing page lets buyers enquire, book a showing, follow the
            home for updates or sign in at an open house from a QR code. New
            leads reach the agent by email and browser notification. If the
            agent hasn&apos;t replied, Instora sends follow-up emails on their
            behalf on days 1, 3 and 7, and it stops as soon as the agent
            replies or the home sells. When the price changes, an open house
            is scheduled or the home sells, followers get an update email
            unless the agent opts out.
          </p>
          <p>
            Scheduled jobs handle the rest: onboarding emails, a Monday summary
            of each agent&apos;s week, refreshing social tokens and cleaning up
            unused uploads.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Billing" title="Plans that grow with the agent.">
        <Prose>
          <p>
            Agents start with one free listing, then subscribe through Stripe
            Checkout. Stripe webhooks set the plan, reset the monthly
            allowance when a renewal is paid, and email the agent if a payment
            fails. Agents who join a team use the team&apos;s plan instead
            of their own.
          </p>
        </Prose>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border lg:grid-cols-4">
          {INSTORA_PLANS.map((plan) => (
            <li key={plan.name} className="flex flex-col gap-1 bg-white px-5 py-4">
              <span className="text-xs font-bold tracking-wide text-muted-2 uppercase">
                {plan.name}
              </span>
              <span className="font-heading font-extrabold text-2xl text-ink">
                {plan.price}
              </span>
              <span className="text-sm text-muted">{plan.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Operations" title="Built to be run, not just shipped." tinted>
        <Prose>
          <p>
            Instora runs on Vercel, with Supabase for the database, sign-in
            and file storage. Row-level security keeps each agent&apos;s
            data private. The browser can only read: every write goes through
            the server, which validates it first, so nobody can upgrade their
            own plan or skip a usage limit with a direct request. Upstash Redis
            rate-limits generation and sign-in.
          </p>
          <p>
            Errors go to Sentry and post to a Slack alerts channel, and an
            uptime monitor checks a health endpoint that also tests the
            database. The database is backed up nightly by GitHub Actions, and
            listing photos are copied to a separate server every night.
          </p>
        </Prose>
        <TechChips label="Built with" items={INSTORA_STACK} />
      </Section>

      <Section eyebrow="What's next" title="Posting straight to Instagram.">
        <Prose>
          <p>
            Instora can already publish a listing&apos;s graphic or photos to
            an agent&apos;s Instagram account or Facebook Page, with the
            caption and listing link. It&apos;s switched off for now while it
            goes through Meta&apos;s business verification and App Review.
            Once Meta approves it, agents won&apos;t need to copy and paste
            their posts at all.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Looking back" title="What I'd do differently." tinted>
        <Prose>
          <p>
            I&apos;d start Meta&apos;s review on day one. I built Instagram
            and Facebook posting first and only then turned to business
            verification and App Review, which depend on paperwork and
            Meta&apos;s timeline rather than code. Starting them alongside
            development would have let posting launch with everything else.
          </p>
        </Prose>
      </Section>

      <CtaBand />
    </>
  );
}
