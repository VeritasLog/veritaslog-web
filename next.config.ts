import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["@mysten/walrus", "@mysten/walrus-wasm"],
  images: { domains: ["avatar.vercel.sh"] },
};

export default nextConfig;
