/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["kakoota.herokuapp.com", "127.0.0.1"],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    publicExcludes: ["!images/*.*"],
    buildExcludes: [/chunks\/images\/.*$/]
  },
});
