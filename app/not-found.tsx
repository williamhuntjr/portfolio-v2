import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 md:px-16 pt-12 md:pt-22 pb-16 md:pb-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
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

        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/"
            className="flex h-12 items-center justify-center rounded-btn bg-accent px-6.5 text-[15px] font-bold text-white"
          >
            Back to Home
          </Link>
          <Link
            href="/my-projects"
            className="flex h-12 items-center justify-center rounded-btn border-[1.5px] border-ink px-6.5 text-[15px] font-bold text-ink"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
