import { CompanyData } from "@/lib/config";

export default function manifest() {
	return {
		name: CompanyData.tradeName,
		short_name: CompanyData.tradeName,
		description: CompanyData.description,
		theme_color: CompanyData.themeColor,
		background_color: CompanyData.themeColor,
		start_url: "/",
		display: "standalone",
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
