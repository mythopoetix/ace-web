import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/landing-v4.html",
      },
    ];
  },
};

export default nextConfig;
