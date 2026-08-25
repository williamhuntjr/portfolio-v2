import type { StrapiProject } from "@/lib/strapi";

export default function ProjectCard({
  project,
  reversed,
}: {
  project: StrapiProject;
  reversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-10 border-b border-border py-12 md:items-center ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full shrink-0 overflow-hidden rounded-card border border-border bg-white md:max-w-180">
        {project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail.url}
            alt={project.name}
            className="w-full object-cover"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-accent-tint">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.3"
            >
              <rect x="3" y="4" width="18" height="14" rx="1.5" />
              <path d="M3 15l5-5 4 4 4-6 5 7" />
              <circle cx="8" cy="8" r="1.4" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-narrow font-bold text-3xl text-ink">
          {project.name}
        </h2>
        {project.subtitle && (
          <span className="text-sm font-bold tracking-wide text-accent uppercase">
            {project.subtitle}
          </span>
        )}
        <p className="text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.coded && (
            <span className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white">
              Coded
            </span>
          )}
          {project.designed && (
            <span className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white">
              Designed
            </span>
          )}
          {project.converted_wireframe && (
            <span className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white">
              Converted Wireframes
            </span>
          )}
          {project.is_discontinued && (
            <span className="rounded-full border border-muted-2 px-3.5 py-1.5 text-xs font-bold text-muted-2">
              Discontinued
            </span>
          )}
          {project.technology.map((tech) => (
            <span
              key={tech.id}
              className="rounded-full border border-accent px-3.5 py-1.5 text-xs font-bold text-accent"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {!project.is_discontinued && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm font-bold text-accent w-fit"
          >
            Visit project &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
