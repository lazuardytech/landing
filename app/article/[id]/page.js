import ArticleContent from "@/components/block/article/article-content";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { fetchMediumRss } from "@/lib/services/rss-service";
import { notFound } from "next/navigation";
import { cache } from "react";

export const revalidate = 86400;

export const dynamicParams = false;

export const getArticle = cache(async (id) => {
	const article = await fetchMediumRss(id);

	if (!article) return notFound();

	return article;
});

export async function generateStaticParams() {
	const articles = await fetchMediumRss();

	return articles.map((article) => ({
		id: String(article.id),
	}));
}

export async function generateMetadata({ params }) {
	const { id } = await params;
	const article = await getArticle(id);

	return {
		id: article.id,
		title: article.title,
	};
}

export default async function ArticleDetail({ params }) {
	const { id } = await params;
	const article = await getArticle(id);

	return (
		<div className="relative w-full h-full">
			<Header />
			<ArticleContent article={article} />
			<Footer />
		</div>
	);
}
