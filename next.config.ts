import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.exercisedb.io",
        port: "",
        pathname: "/image/**",
      },
      {
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
