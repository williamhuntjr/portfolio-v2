"use client";

import { useOptimistic, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import ProjectPagination from "@/components/ProjectPagination";
import type { StrapiPagination, StrapiProject } from "@/lib/strapi";

function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-10 border-b border-border py-12 animate-pulse md:flex-row md:items-center">
      <div className="w-full shrink-0 md:max-w-180">
        <div className="aspect-video w-full rounded-card bg-border" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="h-8 w-2/3 rounded bg-border" />
        <div className="h-4 w-1/3 rounded bg-border" />
        <div className="h-4 w-full rounded bg-border" />
        <div className="h-4 w-5/6 rounded bg-border" />
        <div className="mt-1 flex gap-2">
          <div className="h-7 w-20 rounded-full bg-border" />
          <div className="h-7 w-20 rounded-full bg-border" />
          <div className="h-7 w-24 rounded-full bg-border" />
        </div>
      </div>
    </div>
  );
}

// Page and filters live in the URL so every page is server-rendered and
// reachable by crawlers through plain links.
function projectsHref(page: number, technologies: string[], archived: boolean) {
  const params = new URLSearchParams();
  if (archived) params.set("archived", "1");
  if (page > 1) params.set("page", String(page));
  technologies.forEach((tech) => params.append("technology", tech));
  const query = params.toString();
  return query ? `/my-projects?${query}` : "/my-projects";
}

export default function MyProjectsView({
  projects,
  pagination,
  page,
  selectedTech,
  archived,
  techOptions,
  error,
}: {
  projects: StrapiProject[];
  pagination: StrapiPagination | null;
  page: number;
  selectedTech: string[];
  archived: boolean;
  techOptions: string[];
  error: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // Reflect clicks immediately while the server renders the new list.
  const [optimistic, setOptimistic] = useOptimistic({
    page,
    selectedTech,
    archived,
  });
  const listRef = useRef<HTMLDivElement>(null);

  function navigate(
    nextPage: number,
    nextTech: string[],
    nextArchived = optimistic.archived,
  ) {
    startTransition(() => {
      setOptimistic({
        page: nextPage,
        selectedTech: nextTech,
        archived: nextArchived,
      });
      router.push(projectsHref(nextPage, nextTech, nextArchived), {
        scroll: false,
      });
    });
  }

  function toggleTech(tech: string) {
    const current = optimistic.selectedTech;
    navigate(
      1,
      current.includes(tech)
        ? current.filter((t) => t !== tech)
        : [...current, tech],
    );
  }

  function toggleArchived() {
    navigate(1, optimistic.selectedTech, !optimistic.archived);
  }

  function clearFilters() {
    navigate(1, [], false);
  }

  function changePage(next: number) {
    navigate(next, optimistic.selectedTech);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hasFilters =
    optimistic.selectedTech.length > 0 || optimistic.archived;

  const clearButton = (
    <button
      type="button"
      onClick={clearFilters}
      className="cursor-pointer font-semibold text-accent hover:underline underline-offset-4"
    >
      Clear filters
    </button>
  );

  return (
    <div className="flex flex-col">
      <div className="px-6 md:px-16 pt-12 md:pt-22 pb-8">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          My Projects
        </span>
        <h1 className="font-heading font-extrabold text-4xl text-ink mt-2">
          Projects I&apos;ve built and shipped.
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-muted">
          Websites and applications I&apos;ve designed, built and shipped.
          Filter by technology to narrow the list.
        </p>
      </div>

      <ProjectFilters
        options={techOptions}
        selected={optimistic.selectedTech}
        archived={optimistic.archived}
        onToggle={toggleTech}
        onToggleArchived={toggleArchived}
      />

      <div
        ref={listRef}
        className="mx-auto w-full max-w-480 scroll-mt-6 px-6 md:px-16"
      >
        {!isPending && !error && pagination && projects.length > 0 && (
          <p className="text-sm text-muted-2">
            <span className="font-semibold" aria-live="polite">
              Showing {(page - 1) * pagination.pageSize + 1}–
              {(page - 1) * pagination.pageSize + projects.length} of{" "}
              {pagination.total} {archived ? "archived " : ""}project
              {pagination.total === 1 ? "" : "s"}
            </span>
            {hasFilters && (
              <>
                <span aria-hidden="true"> &middot; </span>
                {clearButton}
              </>
            )}
          </p>
        )}

        {isPending && (
          <>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </>
        )}

        {!isPending && error && (
          <p className="py-20 text-center text-[15px] text-muted">
            Something went wrong loading projects. Please try again shortly.
          </p>
        )}

        {!isPending && !error && projects.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="font-heading font-extrabold text-2xl text-ink">
              No projects found.
            </h2>
            <p className="mt-2 text-[15px] text-muted">
              Try adjusting or clearing your filters.
            </p>
            {hasFilters && <p className="mt-4 text-[15px]">{clearButton}</p>}
          </div>
        )}

        {!isPending &&
          !error &&
          projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
      </div>

      {!error && (
        <ProjectPagination
          page={optimistic.page}
          pageCount={pagination?.pageCount ?? 0}
          hrefFor={(p) =>
            projectsHref(p, optimistic.selectedTech, optimistic.archived)
          }
          onChange={changePage}
        />
      )}
    </div>
  );
}
