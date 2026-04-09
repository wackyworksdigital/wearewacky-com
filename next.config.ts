import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Old dashboard paths → new subdomain (permanent 301)
      {
        source: '/heyjess/dashboard',
        destination: 'https://agency.wearewacky.com',
        permanent: true,
      },
      {
        source: '/heyjess/dashboard/:path*',
        destination: 'https://agency.wearewacky.com/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Hey Jess Landing Page (already indexed, do not move)
      {
        source: '/heyjess',
        destination: 'https://agent-jess-landing.vercel.app/',
      },
      {
        source: '/heyjess/:path*',
        destination: 'https://agent-jess-landing.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
