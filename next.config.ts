import type { NextConfig } from "next";
const repoName = "Portfolio";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: { unoptimized: true },
  assetPrefix: `/${repoName}/`, // GitHub Pages用の設定
};

export default nextConfig;
