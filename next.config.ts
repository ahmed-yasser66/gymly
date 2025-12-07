import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_KEY: 'c16b22179emsh2b3b3c55e3c67c7p1f06e9jsnbaa64bd1ab4d',
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
    qualities: [75, 85]
  },
};

export default nextConfig;
