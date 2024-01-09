/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
  ...nextConfig,
  logging: {
    fetches: {
      fullUrl: true,
    },
    /* level to write console.log as info */
    level: 3,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
