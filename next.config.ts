import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/atelier-rosemere",
        destination: "/atelier-mascouche",
        permanent: true,
      },
      {
        source: "/atelier-rosemere/:path*",
        destination: "/atelier-mascouche",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/atelier-mascouche",
        destination: "https://synvista-rosemere-29juin.vercel.app/",
      },
      {
        source: "/atelier-mascouche/:path*",
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
      {
        source: "/neurodivergence",
        destination: "https://synvista-rosemere-29juin.vercel.app/neurodivergence/",
      },
      {
        source: "/neurodivergence/:path*",
        destination: "https://synvista-rosemere-29juin.vercel.app/neurodivergence/:path*",
      },
    ];
  },
};

export default nextConfig;
