/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",         // where service worker is generated
  register: true,         // auto register service worker
  skipWaiting: true,      // activate new SW immediately
  disable: process.env.NODE_ENV === "development", // disable in dev
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
