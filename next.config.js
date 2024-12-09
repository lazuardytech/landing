/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: [
      "@next/third-parties",
      "@next/third-parties/google",
      "@vercel/analytics",
      "@vercel/analytics/react",
      "@vercel/speed-insights",
      "@vercel/speed-insights/next",
      "@radix-ui/react-accordion",
      "@radix-ui/react-avatar",
      "@radix-ui/react-icons",
      "@radix-ui/react-slot",
      "@radix-ui/react-tooltip",
      "class-variance-authority",
      "clsx",
      "crisp-sdk-web",
      "embla-carousel-react",
      "framer-motion",
      "gsap",
      "next",
      "next-themes",
      "react",
      "react-dom",
      "react-spring",
      "rss-parser",
      "sonner",
      "tailwind-merge",
      "tailwindcss-animate",
    ],
  },
  serverExternalPackages: ["cheerio", "isomorphic-dompurify", "reading-time"],
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    minimumCacheTTL: 31536000, // cache for 1 year (31536000 seconds)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.medium.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      // apply cache headers for root static assets
      {
        source:
          "/:file*.{txt,xml,json,ico,png,jpg,jpeg,svg,webp,webm,mp4,woff,woff2}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // immutable cache for 1 year (31536000 seconds)
          },
        ],
      },
      // apply cache headers for other static assets
      {
        source: "/(static|media|assets|images|videos|documents)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // immutable cache for 1 year (31536000 seconds)
          },
        ],
      },
      // apply cache headers for next.js static assets
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // immutable cache for 1 year (31536000 seconds)
          },
        ],
      },
      // apply cache headers for vercel insights static assets
      {
        source: "/_vercel/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // immutable cache for 1 year (31536000 seconds)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
