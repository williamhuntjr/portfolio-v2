import Image from "next/image";
import CaseStudyLink from "@/components/CaseStudyLink";
import { projectRoles, type StrapiProject } from "@/lib/strapi";

export default function ProjectCard({
  project,
  reversed,
}: {
  project: StrapiProject;
  reversed: boolean;
}) {
  const roles = projectRoles(project);

  return (
    <div
      className={`flex flex-col gap-10 border-b border-border py-12 md:items-center ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full shrink-0 overflow-hidden rounded-card border border-border bg-white md:max-w-180">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail.url}
            alt={project.name}
            width={project.thumbnail.width ?? 1600}
            height={project.thumbnail.height ?? 900}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full object-cover"
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
        {(roles.length > 0 || project.year) && (
          <p className="text-sm text-muted">
            {roles.length > 0 && (
              <>
                <span className="font-semibold text-ink">Role:</span>{" "}
                {roles.join(", ")}
              </>
            )}
            {roles.length > 0 && project.year && " · "}
            {project.year}
          </p>
        )}
        <p className="text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
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

        {((!project.is_discontinued && project.url) ||
          project.source_url ||
          project.case_study_url) && (
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {project.case_study_url && (
              <CaseStudyLink href={project.case_study_url} />
            )}
            {!project.is_discontinued && project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent hover:underline underline-offset-4"
              >
                Visit project &#8599;
              </a>
            )}
            {project.source_url && (
              <a
                href={project.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent hover:underline underline-offset-4"
              >
                Source on GitHub &#8599;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
