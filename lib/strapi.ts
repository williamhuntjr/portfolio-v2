export interface StrapiTechTag {
  id: number;
  name: string;
}

export interface StrapiMedia {
  id: number;
  url: string;
  width?: number;
  height?: number;
}

export interface StrapiProject {
  id: number;
  documentId: string;
  name: string;
  subtitle: string | null;
  description: string;
  url: string;
  // Optional: add a `source_url` text field in Strapi to show a GitHub link.
  source_url?: string | null;
  // A page on this site ("/grubstack") or an external URL.
  case_study_url?: string | null;
  // Optional: add a `year` number field in Strapi to show when it shipped.
  year?: number | null;
  coded: boolean | null;
  designed: boolean | null;
  converted_wireframe: boolean | null;
  is_discontinued: boolean | null;
  is_featured: boolean | null;
  thumbnail: StrapiMedia | null;
  technology: StrapiTechTag[];
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProjectsResponse {
  data: StrapiProject[];
  meta: { pagination: StrapiPagination };
}

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export function strapiMediaUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${STRAPI_URL}${path}`;
}

// "Design, Development" style summary of what William did on a project.
export function projectRoles(project: StrapiProject): string[] {
  const roles: string[] = [];
  if (project.designed) roles.push("Design");
  if (project.coded) roles.push("Development");
  if (project.converted_wireframe) roles.push("Wireframe conversion");
  return roles;
}

// Resolve thumbnail URLs server-side, where STRAPI_URL is actually available —
// client components that render these projects never have it.
export function resolveThumbnails(projects: StrapiProject[]): StrapiProject[] {
  return projects.map((project) => ({
    ...project,
    thumbnail: project.thumbnail
      ? { ...project.thumbnail, url: strapiMediaUrl(project.thumbnail.url) }
      : null,
  }));
}

// Archived = discontinued projects; the default list shows only live ones.
function applyArchivedFilter(params: URLSearchParams, archived: boolean) {
  if (archived) {
    params.set("filters[is_discontinued][$eq]", "true");
  } else {
    // Treat an unset flag as live, not just an explicit false.
    params.set("filters[$or][0][is_discontinued][$null]", "true");
    params.set("filters[$or][1][is_discontinued][$eq]", "false");
  }
}

function strapiHeaders(): HeadersInit {
  return STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {};
}

export async function fetchProjects({
  page = 1,
  pageSize = 6,
  technologies = [],
  archived = false,
}: {
  page?: number;
  pageSize?: number;
  technologies?: string[];
  archived?: boolean;
}): Promise<ProjectsResponse> {
  const params = new URLSearchParams();
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));
  params.set("populate", "*");
  technologies.forEach((tech, i) => {
    params.append(`filters[technology][name][$in][${i}]`, tech);
  });
  applyArchivedFilter(params, archived);

  const res = await fetch(`${STRAPI_URL}/api/projects?${params.toString()}`, {
    headers: strapiHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`);
  }

  return res.json();
}

// Technologies used by at least one live (or archived) project, so the
// filters never offer a choice that returns nothing.
export async function fetchUsedTechnologies({
  archived = false,
}: {
  archived?: boolean;
}): Promise<string[]> {
  const params = new URLSearchParams();
  params.set("pagination[pageSize]", "100");
  params.set("fields[0]", "documentId");
  params.set("populate[technology]", "true");
  applyArchivedFilter(params, archived);

  const res = await fetch(`${STRAPI_URL}/api/projects?${params.toString()}`, {
    headers: strapiHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch technologies: ${res.status}`);
  }

  const json: { data: Pick<StrapiProject, "technology">[] } = await res.json();
  return [...new Set(json.data.flatMap((p) => p.technology.map((t) => t.name)))];
}

export async function fetchFeaturedProject(): Promise<StrapiProject | null> {
  const params = new URLSearchParams();
  params.set("filters[is_featured][$eq]", "true");
  params.set("pagination[pageSize]", "1");
  params.set("populate", "*");

  try {
    const res = await fetch(`${STRAPI_URL}/api/projects?${params.toString()}`, {
      headers: STRAPI_API_TOKEN
        ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` }
        : {},
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json: ProjectsResponse = await res.json();
    return json.data[0] ?? null;
  } catch {
    // Strapi unreachable — homepage should still render without the featured section.
    return null;
  }
}
