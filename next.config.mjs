const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    minimumCacheTTL: 2592000, // cache for 1 month (2592000 seconds)
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
            value: "public, max-age=2592000, immutable", // immutable cache for 1 month (2592000 seconds)
          },
        ],
      },
      // apply cache headers for other static assets
      {
        source: "/(static|media|assets|images|videos|documents)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable", // immutable cache for 1 month (2592000 seconds)
          },
        ],
      },
      // apply cache headers for next.js static assets
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable", // immutable cache for 1 month (2592000 seconds)
          },
        ],
      },
      // apply cache headers for vercel insights static assets
      {
        source: "/_vercel/insights/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable", // immutable cache for 1 month (2592000 seconds)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
