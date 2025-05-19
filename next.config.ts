import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  distDir: "./docs", // ビルド出力をdocsにする（GitHub Pages対応）
};

export default nextConfig;
