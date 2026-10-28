import Image from "next/image";
import Link from "next/link";

// A lighter companion to the GrubStack spotlight on the About page.
const STACK = ["Next.js", "Supabase", "Claude", "Stripe"];

export default function InstoraSpotlight() {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 border-t border-border bg-background">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-8 rounded-card border border-border bg-white p-6 md:p-8 lg:grid-cols-2">
          <Image
            src="/images/instora-preview.webp"
            alt="The instora.io website shown on a desktop monitor, laptop, tablet and phone"
            width={1857}
            height={847}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-auto w-full"
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
                Side project &middot; 2026 – Present
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-ink">
                Instora
              </h2>
              <p className="text-[17px] leading-relaxed text-muted">
                AI listing marketing for real estate agents. One short form
                becomes social posts, a video script and a listing page buyers
                can enquire from, with every lead collected in one inbox.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/instora"
                className="text-sm font-bold text-accent hover:underline underline-offset-4"
              >
                Read the case study &rarr;
              </Link>
              <a
                href="https://instora.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent hover:underline underline-offset-4"
              >
                Visit instora.io &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
