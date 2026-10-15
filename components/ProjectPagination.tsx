import Link from "next/link";
import type { MouseEvent } from "react";

const ARROW_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink";

export default function ProjectPagination({
  page,
  pageCount,
  hrefFor,
  onChange,
}: {
  page: number;
  pageCount: number;
  hrefFor: (page: number) => string;
  onChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  // Real links for crawlers and new-tab clicks; plain clicks navigate in place.
  function handleClick(e: MouseEvent<HTMLAnchorElement>, target: number) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onChange(target);
  }

  return (
    <nav
      aria-label="Project pages"
      className="flex items-center justify-center gap-2 px-6 md:px-16 py-12"
    >
      {page > 1 ? (
        <Link
          href={hrefFor(page - 1)}
          onClick={(e) => handleClick(e, page - 1)}
          aria-label="Previous page"
          rel="prev"
          className={ARROW_CLASS}
        >
          &larr;
        </Link>
      ) : (
        <span aria-hidden="true" className={`${ARROW_CLASS} opacity-40`}>
          &larr;
        </span>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={hrefFor(p)}
          onClick={(e) => handleClick(e, p)}
          aria-current={p === page ? "page" : undefined}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
            p === page
              ? "bg-accent text-white"
              : "text-muted hover:text-ink"
          }`}
        >
          {p}
        </Link>
      ))}

      {page < pageCount ? (
        <Link
          href={hrefFor(page + 1)}
          onClick={(e) => handleClick(e, page + 1)}
          aria-label="Next page"
          rel="next"
          className={ARROW_CLASS}
        >
          &rarr;
        </Link>
      ) : (
        <span aria-hidden="true" className={`${ARROW_CLASS} opacity-40`}>
          &rarr;
        </span>
      )}
    </nav>
  );
}
