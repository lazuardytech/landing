const nextConfig = {
  images: {
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
};

export default nextConfig;
