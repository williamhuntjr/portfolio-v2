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

export async function fetchProjects({
  page = 1,
  pageSize = 6,
  technologies = [],
}: {
  page?: number;
  pageSize?: number;
  technologies?: string[];
}): Promise<ProjectsResponse> {
  const params = new URLSearchParams();
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));
  params.set("sort", "is_discontinued:asc");
  params.set("populate", "*");
  technologies.forEach((tech, i) => {
    params.append(`filters[technology][name][$in][${i}]`, tech);
  });

  const res = await fetch(`${STRAPI_URL}/api/projects?${params.toString()}`, {
    headers: STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` }
      : {},
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`);
  }

  return res.json();
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
