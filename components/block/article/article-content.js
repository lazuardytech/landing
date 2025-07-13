import ArticleCover from "@/components/block/article/article-cover";
import ArticleHeader from "@/components/block/article/article-header";
import ArticleText from "@/components/block/article/article-text";

export default function ArticleContent({ article }) {
	return (
		<>
			<ArticleHeader article={article} />
			<ArticleCover article={article} />
			<ArticleText content={article.content} />
		</>
	);
}
