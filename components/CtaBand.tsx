import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-ink px-6 md:px-16 py-14 md:py-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="text-[13px] font-bold tracking-wide text-white/60 uppercase">
            Let&apos;s work together
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
            Have a role or project in mind?
          </h2>
          <p className="text-[17px] leading-relaxed text-white/75">
            I&apos;m open to full-time roles, contract work, or just a
            conversation about what you&apos;re building.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            href="/lets-connect"
            className="flex h-12 items-center justify-center rounded-btn bg-white px-6.5 text-[15px] font-bold text-ink transition-colors hover:bg-accent-tint focus-visible:outline-white"
          >
            Let&apos;s Connect
          </Link>
          <a
            href="/William_Hunt_Resume-Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-btn border-[1.5px] border-white/40 px-6.5 text-[15px] font-bold text-white transition-colors hover:border-white focus-visible:outline-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
