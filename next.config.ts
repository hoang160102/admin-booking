import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chieuphimquocgia.com.vn",
      },
    ],
  },
};

export default nextConfig;
