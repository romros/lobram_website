/** @type {import('next').NextConfig} */

/*const nextConfig = withBuilderDevTools({});*/

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
    ],
    domains: ["cdn.sanity.io"],
  },
};
