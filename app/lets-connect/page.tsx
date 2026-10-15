import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Let's Connect",
  description:
    "Get in touch about a job opportunity, a project, or just to say hello.",
};

const DETAILS = [
  {
    label: "Email",
    value: "contact@williamhuntjr.com",
    href: "mailto:contact@williamhuntjr.com",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/williamhuntjr",
    href: "https://www.linkedin.com/in/williamhuntjr",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
  {
    label: "Location",
    value: "North Carolina, USA · Eastern Time",
    href: null,
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  {
    label: "Response time",
    // SAMPLE — adjust to whatever you can reliably commit to.
    value: "Usually within 1–2 business days",
    href: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
];

export default function LetsConnect() {
  return (
    <section className="px-6 md:px-16 pt-12 md:pt-22 pb-16 md:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Let&apos;s Connect
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink">
            Let&apos;s talk.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted">
            Whether you&apos;re hiring, have a project in mind, or just want
            to say hello — drop me a message and I&apos;ll get back to you
            soon.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ContactForm />

          <aside className="flex flex-col gap-6 rounded-card border border-border bg-white p-8">
            <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[13px] font-semibold text-ink">
                Open to new opportunities
              </span>
            </div>

            <dl className="flex flex-col gap-5">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-accent-tint">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {detail.icon}
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <dt className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
                      {detail.label}
                    </dt>
                    <dd className="wrap-break-word text-[15px] text-ink">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-semibold text-accent hover:underline underline-offset-4"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href="/William_Hunt_Resume-Latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-btn border-[1.5px] border-ink px-6.5 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Download My Resume
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
