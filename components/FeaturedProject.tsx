import Link from "next/link";
import { fetchFeaturedProject, strapiMediaUrl } from "@/lib/strapi";

export default async function FeaturedProject() {
  const project = await fetchFeaturedProject();

  if (!project) return null;

  return (
    <section className="flex flex-col gap-6 px-6 md:px-16 pt-10 md:pt-14 pb-12 md:pb-20">
      <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
        Featured project
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-card border border-border bg-white overflow-hidden shadow-[0_12px_32px_rgba(20,30,60,0.06)]">
        <div className="flex items-center justify-center bg-white min-h-75">
          {project.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={strapiMediaUrl(project.thumbnail.url)}
              alt={project.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.3"
            >
              <rect x="3" y="4" width="18" height="14" rx="1.5" />
              <path d="M3 15l5-5 4 4 4-6 5 7" />
              <circle cx="8" cy="8" r="1.4" />
            </svg>
          )}
        </div>

        <div className="flex flex-col gap-3 p-10">
          <h3 className="font-narrow font-bold text-2xl text-ink">
            {project.name}
          </h3>
          {project.subtitle && (
            <span className="text-sm font-bold tracking-wide text-accent uppercase">
              {project.subtitle}
            </span>
          )}
          <p className="text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-1.5">
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
          <Link
            href="/my-projects"
            className="mt-2.5 text-sm font-bold text-accent"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
