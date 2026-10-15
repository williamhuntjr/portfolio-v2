export default function ProjectFilters({
  options,
  selected,
  archived,
  onToggle,
  onToggleArchived,
}: {
  options: string[];
  selected: string[];
  archived: boolean;
  onToggle: (tech: string) => void;
  onToggleArchived: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 px-6 md:px-16 py-10">
      <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
        Filter by technology
      </span>

      {/* One scrolling row on mobile (bleeds to the screen edge), wrapping on desktop. */}
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
        {options.map((tech) => {
          const active = selected.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              onClick={() => onToggle(tech)}
              aria-pressed={active}
              className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-muted hover:text-ink hover:shadow-sm"
              }`}
            >
              {tech}
            </button>
          );
        })}

        <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-border" />

        <button
          type="button"
          onClick={onToggleArchived}
          aria-pressed={archived}
          className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            archived
              ? "border-ink bg-ink text-white"
              : "border-border bg-white text-muted hover:text-ink hover:shadow-sm"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="5" rx="1" />
            <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
            <path d="M10 13h4" />
          </svg>
          Archived
        </button>
      </div>
    </div>
  );
}
