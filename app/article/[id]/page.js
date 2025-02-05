import NotFound from "@/app/not-found";
import ArticleContent from "@/components/block/article/article-content";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { CACHED_ARTICLES } from "@/lib/services/rss-service";

const articles = CACHED_ARTICLES;

export default async function ArticleDetail({ params }) {
  const id = (await params).id;
  const article = articles.items[id] ?? null;

  if (!article) return <NotFound />;

  return (
    <div className="relative w-full h-full">
      <Header />
      <ArticleContent article={article} />
      <Footer />
    </div>
  );
}
