import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz no projeto — evita que um lockfile fora da pasta seja escolhido.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
