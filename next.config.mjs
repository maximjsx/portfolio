/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "api.microlink.io" }],
  },
  // Ensure dark mode script is loaded early
  headers: async () => {
    return [
      {
        source: '/scripts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // ESLint configuration for builds
  eslint: {
    // Warning during builds instead of errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
