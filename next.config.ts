import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/atelier-rosemere",
        destination: "https://synvista-rosemere-29juin.vercel.app/",
      },
      {
        source: "/atelier-rosemere/:path*",
        destination: "https://synvista-rosemere-29juin.vercel.app/:path*",
      },
      {
        source: "/ateliers-en-personne",
        destination: "https://synvista-ateliers.vercel.app/",
      },
      {
        source: "/ateliers-en-personne/:path*",
        destination: "https://synvista-ateliers.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
