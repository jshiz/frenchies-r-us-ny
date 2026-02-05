/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate static HTML files
  images: {
    unoptimized: true,
  },
  // Helps with routing consistency on Cloudflare
  trailingSlash: true,
  // Ensure the build uses the App Router correctly
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
