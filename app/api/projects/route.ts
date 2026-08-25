import { NextRequest, NextResponse } from "next/server";
import { fetchProjects } from "@/lib/strapi";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const technologies = searchParams.getAll("technology");

  try {
    const data = await fetchProjects({ page, technologies });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to load projects" },
      { status: 502 },
    );
  }
}
