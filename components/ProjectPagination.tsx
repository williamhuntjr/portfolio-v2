export default function ProjectPagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 px-16 py-12">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        &larr;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === page}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-bold ${
            p === page
              ? "bg-accent text-white"
              : "text-muted hover:text-ink"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        &rarr;
      </button>
    </div>
  );
}
