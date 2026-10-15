import type { Metadata } from "next";
import MyProjectsView from "@/components/MyProjectsView";
import CtaBand from "@/components/CtaBand";
import { TECH_OPTIONS } from "@/lib/constants";
import {
  fetchProjects,
  fetchUsedTechnologies,
  resolveThumbnails,
  type ProjectsResponse,
} from "@/lib/strapi";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function parseParams(params: Awaited<SearchParams>) {
  const page = Math.max(1, Number.parseInt(String(params.page ?? "1"), 10) || 1);
  const raw = params.technology;
  const requested = Array.isArray(raw) ? raw : raw ? [raw] : [];
  // Only accept known filters so arbitrary values never reach the Strapi query.
  const technologies = requested.filter((tech) => TECH_OPTIONS.includes(tech));
  const archived = params.archived === "1";
  return { page, technologies, archived };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { page, archived } = parseParams(await searchParams);
  const indexedPage = !archived && page > 1;
  return {
    title: page > 1 ? `My Projects – Page ${page}` : "My Projects",
    description:
      "A look at projects William Hunt has built and shipped, filterable by technology.",
    // Filtered and archived views are variations of the same list; point them
    // at the main list so only its paginated URLs get indexed.
    alternates: {
      canonical: indexedPage ? `/my-projects?page=${page}` : "/my-projects",
    },
  };
}

export default async function MyProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, technologies, archived } = parseParams(await searchParams);

  const [projectsResult, techResult] = await Promise.allSettled([
    fetchProjects({ page, technologies, archived }),
    fetchUsedTechnologies({ archived }),
  ]);

  // Strapi unreachable — the view shows its error state.
  const data: ProjectsResponse | null =
    projectsResult.status === "fulfilled"
      ? {
          ...projectsResult.value,
          data: resolveThumbnails(projectsResult.value.data),
        }
      : null;

  // Hide chips no project in this view uses; keep any already selected so
  // they can still be turned off. Fall back to every option on failure.
  const available =
    techResult.status === "fulfilled"
      ? TECH_OPTIONS.filter(
          (tech) =>
            techResult.value.includes(tech) || technologies.includes(tech),
        )
      : TECH_OPTIONS;

  return (
    <>
      <MyProjectsView
        projects={data?.data ?? []}
        pagination={data?.meta?.pagination ?? null}
        page={page}
        selectedTech={technologies}
        archived={archived}
        techOptions={available}
        error={!data}
      />
      <CtaBand />
    </>
  );
}
