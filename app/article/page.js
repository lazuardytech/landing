import ArticleItems from "@/components/block/article/article-items";
import Hero from "@/components/block/article/hero";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { fetchMediumRss } from "@/lib/services/rss-service";
import { cache } from "react";

export const revalidate = 86400;

export const dynamicParams = false;

export const getArticles = cache(async () => {
	return await fetchMediumRss();
});

export default async function Article() {
	const articles = await getArticles();

	return (
		<div className="relative w-full h-full">
			<Header />
			<Hero />
			<ArticleItems articles={articles} />
			<Keypoint titleCenter={true} />
			<Footer />
		</div>
	);
}
