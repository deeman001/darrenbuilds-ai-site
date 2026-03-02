import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
