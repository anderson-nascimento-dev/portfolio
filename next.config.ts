import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: the site has no server-side features, so it can be
  // hosted on any static host (Netlify, GitHub Pages, Cloudflare Pages).
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
