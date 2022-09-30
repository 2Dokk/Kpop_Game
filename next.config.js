/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const path = require("path");

module.exports = {
  images: {
    domains: ["i.ytimg.com"],
  },
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
