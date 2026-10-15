import type { Metadata } from "next";
import MyProjectsView from "@/components/MyProjectsView";
import {
  fetchProjects,
  resolveThumbnails,
  type ProjectsResponse,
} from "@/lib/strapi";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "A look at projects William Hunt has built and shipped, filterable by technology.",
};

export default async function MyProjectsPage() {
  // Render the first page on the server so crawlers see the projects without
  // running JS. Paging and filtering still happen client-side after that.
  let initialData: ProjectsResponse | null = null;
  try {
    const data = await fetchProjects({ page: 1 });
    initialData = { ...data, data: resolveThumbnails(data.data) };
  } catch {
    // Strapi unreachable — the client view will retry on mount.
  }

  return <MyProjectsView initialData={initialData} />;
}
