import type { NextConfig } from "next";

// GitHub Pages serves project repos from a sub-path (e.g. /Online-Portfolio).
// The deploy workflow sets this from actions/configure-pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
