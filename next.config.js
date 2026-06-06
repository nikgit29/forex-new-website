/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "forexblues-react-website.vercel.app",
      "localhost:3000",
      "cms.forexblues.com",
      "forexblues.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
