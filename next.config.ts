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
      // Hey Jess — AI Receptionist & PA (already indexed, do not move)
      {
        source: '/heyjess',
        destination: 'https://agent-jess-landing.vercel.app/heyjess',
      },
      {
        source: '/heyjess/:path*',
        destination: 'https://agent-jess-landing.vercel.app/heyjess/:path*',
      },
      // Social Sarah — AI Social Media Manager
      {
        source: '/socialsarah',
        destination: 'https://agent-jess-landing.vercel.app/socialsarah',
      },
      {
        source: '/socialsarah/:path*',
        destination: 'https://agent-jess-landing.vercel.app/socialsarah/:path*',
      },
      // Freddie Finance — AI Tax Advisor
      {
        source: '/freddiefinance',
        destination: 'https://agent-jess-landing.vercel.app/freddiefinance',
      },
      {
        source: '/freddiefinance/:path*',
        destination: 'https://agent-jess-landing.vercel.app/freddiefinance/:path*',
      },
      // The Agency — platform overview
      {
        source: '/theagency',
        destination: 'https://agent-jess-landing.vercel.app/theagency',
      },
      {
        source: '/theagency/:path*',
        destination: 'https://agent-jess-landing.vercel.app/theagency/:path*',
      },
    ];
  },
};

export default nextConfig;
