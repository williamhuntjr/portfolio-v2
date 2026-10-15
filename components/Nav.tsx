"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation (including back/forward). Adjusting
  // state during render avoids an extra effect-driven re-render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative flex items-center justify-between h-22 px-6 md:px-16 border-b border-border bg-white">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="flex h-8.5 w-8.5 items-center justify-center rounded-btn bg-ink">
          <span className="font-heading font-extrabold text-base text-white">W</span>
        </span>
        <span className="hidden md:inline font-narrow font-bold text-xl text-ink tracking-wide">
          William Hunt
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-2">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                active ? "bg-accent text-white" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/williamhuntjr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-btn border-[1.5px] border-border px-4.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/williamhuntjr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-btn bg-accent px-4.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          GitHub
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-btn md:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col gap-8 bg-white p-6 shadow-[-8px_0_32px_rgba(20,30,60,0.12)] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex h-8.5 w-8.5 items-center justify-center rounded-btn bg-ink">
            <span className="font-heading font-extrabold text-base text-white">W</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-btn px-4 py-3 text-base font-semibold ${
                  active ? "bg-accent text-white" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/williamhuntjr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-btn border-[1.5px] border-border text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/williamhuntjr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-btn bg-accent text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
