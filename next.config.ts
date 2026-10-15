import type { NextConfig } from "next";

// Project thumbnails are served from Strapi's uploads; allow only that path
// through the image optimizer.
const strapiOrigin = new URL(process.env.STRAPI_URL ?? "http://localhost:1337")
  .origin;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [new URL(`${strapiOrigin}/uploads/**`)],
  },
};

export default nextConfig;
