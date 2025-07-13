export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
	};
}
