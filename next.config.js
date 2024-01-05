/** @type {import('next').NextConfig} */

/*const nextConfig = withBuilderDevTools({});*/

const nextConfig = {};

module.exports = {
  ...nextConfig,
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
