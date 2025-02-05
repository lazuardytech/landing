import ArticleItems from "@/components/block/article/article-items";
import Hero from "@/components/block/article/hero";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import LayoutLine from "@/components/ui/layout-line";
import { CACHED_ARTICLES } from "@/lib/services/rss-service";

const articles = CACHED_ARTICLES;

export default function Article() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Hero />
      <ArticleItems data={articles} />
      <Keypoint titleCenter={true} />
      <Footer />
    </div>
  );
}
