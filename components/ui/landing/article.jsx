import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchMediumRss } from "@/lib/services/rss-service";

const maxArticles = 4;

export default async function Article() {
  const data = await fetchMediumRss();

  return (
    <div className="container mt-40 px-10 lg:px-16 flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <div className="relative w-full h-full text-3xl md:text-4xl lg:text-5xl">
          Our Latest Articles
        </div>
        <Link href="/articles">
          <Button className="gap-4">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.items.slice(0, maxArticles).map((article, index) => (
          <Link href={article.link} key={index} target="_blank">
            <div
              key={index}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-500"
            >
              <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                <div className="relative w-full h-full border border-zinc-800 aspect-video mb-4">
                  <Image
                    src={article.coverImageUrl}
                    alt={article.title}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <div className="relative w-full h-full">
                  <span className="text-lg line-clamp-1 text-ellipsis">
                    {article.title}
                  </span>
                </div>
                <div className="w-full h-full">
                  <span className="font-light text-gray-400 text-sm line-clamp-2 text-ellipsis">
                    {article.description}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
