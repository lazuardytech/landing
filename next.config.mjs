/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
    optimizePackageImports: [
      "@formspark/use-formspark",
      "@hookform/resolvers",
      "@marsidev/react-turnstile",
      "@next/third-parties",
      "@radix-ui/react-dialog",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@vercel/analytics",
      "@vercel/speed-insights",
      "cheerio",
      "class-variance-authority",
      "clsx",
      "cmdk",
      "crisp-sdk-web",
      "embla-carousel-react",
      "isomorphic-dompurify",
      "lucide-react",
      "motion",
      "next",
      "next-themes",
      "react",
      "react-dom",
      "react-hook-form",
      "react-phone-number-input",
      "reading-time",
      "rss-parser",
      "sonner",
      "tailwind-merge",
      "tailwindcss-animate",
      "vanilla-cookieconsent",
      "zod",
      "@eslint/eslintrc",
      "eslint",
      "eslint-config-next",
      "postcss",
      "tailwindcss",
    ],
  },
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
        hostname: "via.placeholder.com",
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
      // apply hsts headers for all routes
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // hsts settings
          },
        ],
      },
    ];
  },
};

export default nextConfig;
