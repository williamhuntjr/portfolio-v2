import type { MetadataRoute } from "next";

const SITE_URL = "https://williamhuntjr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/my-projects", "/lets-connect"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
