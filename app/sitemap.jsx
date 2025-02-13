export default function sitemap() {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/ai`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/technology`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/article`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/career`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/terms-of-service`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: "https://partnership.lazuardy.tech",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
	];
}
