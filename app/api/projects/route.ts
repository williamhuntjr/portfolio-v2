import { NextRequest, NextResponse } from "next/server";
import { fetchProjects, strapiMediaUrl } from "@/lib/strapi";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const technologies = searchParams.getAll("technology");

  try {
    const data = await fetchProjects({ page, technologies });

    // Resolve thumbnail URLs here, server-side, where STRAPI_URL is actually
    // available — the client that consumes this response never has it.
    data.data = data.data.map((project) => ({
      ...project,
      thumbnail: project.thumbnail
        ? { ...project.thumbnail, url: strapiMediaUrl(project.thumbnail.url) }
        : null,
    }));

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to load projects" },
      { status: 502 },
    );
  }
}
