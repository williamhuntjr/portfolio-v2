"use client";

import { useEffect, useState } from "react";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import ProjectPagination from "@/components/ProjectPagination";
import type { StrapiProject } from "@/lib/strapi";

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

export default function MyProjectsView() {
  const [page, setPage] = useState(1);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [projects, setProjects] = useState<StrapiProject[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(false);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        selectedTech.forEach((tech) => params.append("technology", tech));

        const res = await fetch(`/api/projects?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Request failed");
        const json = await res.json();
        setProjects(json.data ?? []);
        setPageCount(json.meta?.pagination?.pageCount ?? 0);
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();
    return () => controller.abort();
  }, [page, selectedTech]);

  function toggleTech(tech: string) {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
    setPage(1);
  }

  function clearFilters() {
    setSelectedTech([]);
    setPage(1);
  }

  return (
    <div className="flex flex-col">
      <div className="px-16 pt-22 pb-8">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          My Projects
        </span>
        <h1 className="font-heading font-extrabold text-4xl text-ink mt-2">
          Projects I&apos;ve built and shipped.
        </h1>
      </div>

      <ProjectFilters
        selected={selectedTech}
        onToggle={toggleTech}
        onClear={clearFilters}
      />

      <div className="mx-auto w-full max-w-480 px-16">
        {loading && (
          <>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </>
        )}

        {!loading && error && (
          <p className="py-20 text-center text-[15px] text-muted">
            Something went wrong loading projects. Please try again shortly.
          </p>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="font-heading font-extrabold text-2xl text-ink">
              No projects found.
            </h2>
            <p className="mt-2 text-[15px] text-muted">
              Try adjusting or clearing your filters.
            </p>
          </div>
        )}

        {!loading &&
          !error &&
          projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
      </div>

      {!loading && !error && (
        <ProjectPagination page={page} pageCount={pageCount} onChange={setPage} />
      )}
    </div>
  );
}
