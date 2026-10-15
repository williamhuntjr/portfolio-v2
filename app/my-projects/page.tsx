import type { Metadata } from "next";
import MyProjectsView from "@/components/MyProjectsView";
import CtaBand from "@/components/CtaBand";
import { TECH_OPTIONS } from "@/lib/constants";
import {
  fetchProjects,
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
  return { page, technologies };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { page } = parseParams(await searchParams);
  return {
    title: page > 1 ? `My Projects – Page ${page}` : "My Projects",
    description:
      "A look at projects William Hunt has built and shipped, filterable by technology.",
    // Filtered views are variations of the same list; point them at the
    // unfiltered page so only the paginated URLs get indexed.
    alternates: {
      canonical: page > 1 ? `/my-projects?page=${page}` : "/my-projects",
    },
  };
}

export default async function MyProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, technologies } = parseParams(await searchParams);

  let data: ProjectsResponse | null = null;
  try {
    const response = await fetchProjects({ page, technologies });
    data = { ...response, data: resolveThumbnails(response.data) };
  } catch {
    // Strapi unreachable — the view shows its error state.
  }

  return (
    <>
      <MyProjectsView
        projects={data?.data ?? []}
        pagination={data?.meta?.pagination ?? null}
        page={page}
        selectedTech={technologies}
        error={!data}
      />
      <CtaBand />
    </>
  );
}
