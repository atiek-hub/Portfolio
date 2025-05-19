import type { NextConfig } from "next";
const repoName = "Portfolio";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: { unoptimized: true },
  assetPrefix: `/${repoName}/`, // ビルド出力をdocsにする（GitHub Pages対応）
};

export default nextConfig;
