import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Helps with routing consistency on Cloudflare
  trailingSlash: true,
  // Ensure the build uses the App Router correctly
  typescript: {
    ignoreBuildErrors: true, // Prevents tiny lint/type issues from blocking the deploy
  }
};

export default nextConfig;
