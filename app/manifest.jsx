import { CompanyData } from "@/lib/config";

export default function manifest() {
  return {
    name: CompanyData.tradeName,
    short_name: CompanyData.tradeName,
    description: "We help businesses grow bigger through technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
