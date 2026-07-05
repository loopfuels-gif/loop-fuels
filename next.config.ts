import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.loopfuels.com" }],
        destination: "https://loopfuels.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
