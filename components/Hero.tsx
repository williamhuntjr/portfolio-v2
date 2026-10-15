import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16 items-center px-6 md:px-16 pt-12 md:pt-22 pb-14 md:pb-24">
      <div className="flex flex-col gap-5">
        <span className="text-[15px] font-semibold text-muted-2">
          Hi there, I&apos;m William.
        </span>

        <h1 className="font-heading font-extrabold text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.15] lg:leading-[1.1] text-ink">
          I build <span className="text-accent">full&#8209;stack</span> web
          applications.
        </h1>

        <p className="text-[17px] leading-relaxed text-muted max-w-[520px]">
          I&apos;m a full-stack developer focused on React and Vue front-ends and
          containerized deployments. I write REST APIs in Python, ship with
          Docker and Kubernetes, and automate delivery with Jenkins and
          GitHub Actions.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/my-projects"
            className="flex h-12 items-center justify-center rounded-btn bg-accent px-6.5 text-[15px] font-bold text-white transition-colors hover:bg-accent-hover"
          >
            View My Projects
          </Link>
          <a
            href="https://github.com/williamhuntjr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-btn border-[1.5px] border-ink px-6.5 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-[460px]">
        <div className="absolute h-[340px] w-[340px] rounded-full bg-accent-tint top-2.5 right-7 z-0" />
        <div className="relative z-10 h-105 w-90 overflow-hidden rounded-card border border-border shadow-[0_12px_32px_rgba(20,30,60,0.10)]">
          <Image
            src="/images/william-hunt.jpg"
            alt="William Hunt"
            fill
            sizes="360px"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-1.5 z-20 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-[0_8px_24px_rgba(20,30,60,0.10)]">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-[13px] font-semibold text-ink">
            Open to new opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
