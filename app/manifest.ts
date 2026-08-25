import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "William Hunt | Full-Stack Developer",
    short_name: "William Hunt",
    description:
      "Full-stack developer specializing in React front-ends, Python APIs, and containerized deployments with Docker and Kubernetes.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#16213e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
