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
        hostname: "miro.medium.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate", // cache for 1 month (2592000 seconds)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
