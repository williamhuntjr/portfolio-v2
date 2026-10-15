import Link from "next/link";

function BrokenLinkIllustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-auto w-full max-w-sm lg:max-w-md"
      aria-hidden="true"
    >
      {/* Backdrop, echoing the hero */}
      <circle cx="215" cy="165" r="140" fill="var(--accent-tint)" />

      {/* Browser window */}
      <g filter="url(#window-shadow)">
        <rect x="55" y="60" width="290" height="200" rx="16" fill="white" />
      </g>
      <rect
        x="55"
        y="60"
        width="290"
        height="200"
        rx="16"
        fill="none"
        stroke="var(--border)"
        strokeWidth="2"
      />
      <path d="M55 94h290" stroke="var(--border)" strokeWidth="2" />
      <circle cx="78" cy="77" r="5" fill="var(--accent-tint-strong)" />
      <circle cx="95" cy="77" r="5" fill="var(--accent-tint-strong)" />
      <circle cx="112" cy="77" r="5" fill="var(--accent-tint-strong)" />
      <rect x="140" y="71" width="150" height="12" rx="6" fill="var(--background)" />

      <text
        x="200"
        y="172"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="68"
        fontWeight="800"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        404
      </text>

      {/* Broken chain link */}
      <g fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round">
        <path d="M184 214h-26a13 13 0 0 1 0-26h26" />
        <path d="M168 201h14" />
        <path d="M216 188h26a13 13 0 0 1 0 26h-26" />
        <path d="M218 201h14" />
      </g>
      <g stroke="var(--accent)" strokeWidth="3" strokeLinecap="round">
        <path d="M200 184v-8" />
        <path d="M200 226v-8" />
        <path d="M191 187l-4-5" />
        <path d="M209 215l4 5" />
      </g>

      {/* Question bubble */}
      <circle cx="338" cy="62" r="24" fill="var(--accent)" />
      <text
        x="338"
        y="72"
        textAnchor="middle"
        fill="white"
        fontSize="28"
        fontWeight="800"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        ?
      </text>

      <defs>
        <filter id="window-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="14"
            floodColor="rgb(20,30,60)"
            floodOpacity="0.10"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="px-6 md:px-16 pt-12 md:pt-22 pb-16 md:pb-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            404
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted">
            The page you&apos;re looking for may have been moved or never
            existed. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/"
              className="flex h-12 items-center justify-center rounded-btn bg-accent px-6.5 text-[15px] font-bold text-white transition-colors hover:bg-accent-hover"
            >
              Back to Home
            </Link>
            <Link
              href="/my-projects"
              className="flex h-12 items-center justify-center rounded-btn border-[1.5px] border-ink px-6.5 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View My Projects
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <BrokenLinkIllustration />
        </div>
      </div>
    </section>
  );
}
