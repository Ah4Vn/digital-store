/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.ts

// import type { NextConfig } from 'next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // ...other config settings
};

export default nextConfig;
