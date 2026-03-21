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
  async rewrites() {
    return [
      // Hey Jess Dashboard — exact root
      {
        source: '/heyjess/dashboard',
        destination: 'https://agent-jess-dashboard.vercel.app/heyjess/dashboard',
      },
      // Hey Jess Dashboard — sub-paths
      {
        source: '/heyjess/dashboard/:path*',
        destination: 'https://agent-jess-dashboard.vercel.app/heyjess/dashboard/:path*',
      },
      // Hey Jess Landing Page
      {
        source: '/heyjess/:path*',
        destination: 'https://agent-jess-landing.vercel.app/:path*',
      },
      {
        source: '/heyjess',
        destination: 'https://agent-jess-landing.vercel.app/',
      },
    ];
  },
};

export default nextConfig;
