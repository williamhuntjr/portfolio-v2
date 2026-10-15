import { TECH_OPTIONS } from "@/lib/constants";

export default function ProjectFilters({
  selected,
  onToggle,
  onClear,
}: {
  selected: string[];
  onToggle: (tech: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 px-6 md:px-16 py-10">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          Filter by technology
        </span>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="cursor-pointer text-sm font-semibold text-accent"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {TECH_OPTIONS.map((tech) => {
          const active = selected.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              onClick={() => onToggle(tech)}
              aria-pressed={active}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-muted hover:text-ink hover:shadow-sm"
              }`}
            >
              {tech}
            </button>
          );
        })}
      </div>
    </div>
  );
}
