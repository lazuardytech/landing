import Link from "next/link";
import Image from "next/image";
import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { isMaintenanceMode } from "@/lib/config";
import { fetchMediumRss } from "@/lib/services/rss-service";
import { socials } from "@/lib/state";

export default async function Page({ params }) {
  if (isMaintenanceMode()) return <Maintenance />;

  const data = await fetchMediumRss((await params).id);

  return (
    <>
      <Header />
      <div className="container px-10 lg:px-16 mt-16 mb-16 lg:mt-32 lg:mb-32">
        <ArticleHeader data={data} />
        <ArticleCover className="mt-10 lg:mt-14" data={data} />
        <ArticleContent className="mt-14" data={data} />
        <ArticleFooter className="mt-16" data={data} />
      </div>
      <Footer />
    </>
  );
}

function ArticleHeader({ className, data }) {
  const article = data.article;
  return (
    <>
      <div className={`text-md max-w-2xl mx-auto flex ${className}`}>
        <div className="flex justify-start items-start">
          <Link
            href="/articles"
            className="transition-colors duration-300 text-neutral-400 hover:text-white font-regular"
          >
            <div className="flex gap-2 w-full">
              <ChevronLeft className="w-5 h-5 mt-0.5" />
              <span>Back to Latest Articles</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-4xl md:text-5xl text-white font-bold max-w-2xl mx-auto text-left mt-14">
        <h1 className="leading-none">{article.title}</h1>
      </div>
      <div className="max-w-2xl mx-auto grid lg:grid-cols-2 gap-6 mt-6 lg:mt-12">
        <div className="text-md text-white font-light text-left flex gap-2 leading-none lg:pt-1">
          <div className="flex gap-1">
            <span>By</span>
            <span>{article.creator.name}</span>
          </div>
          <span>•</span>
          <span>{article.readTime.text}</span>
        </div>
        <div className="flex gap-2 lg:justify-end items-start">
          {article.categories.length > 0
            ? article.categories.slice(0, 3).map((category, index) => (
                <Badge key={index} className="line-clamp-1">
                  {category}
                </Badge>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

function ArticleCover({ className, data }) {
  const article = data.article;
  return (
    <>
      <div
        className={`relative w-full h-full max-w-2xl mx-auto border border-zinc-800 aspect-video ${className}`}
      >
        <Image
          src={article.coverImageUrl}
          alt={article.title}
          className="object-cover w-full h-full"
          fill
        />
      </div>
      <div
        className="content text-white font-extralight text-sm max-w-2xl mx-auto text-center mt-4"
        dangerouslySetInnerHTML={{ __html: article.coverImageAttribution }}
      />
    </>
  );
}

function ArticleContent({ className, data }) {
  const article = data.article;
  return (
    <div
      className={`content text-white font-light text-md lg:text-md max-w-2xl mx-auto text-left ${className}`}
      dangerouslySetInnerHTML={{ __html: article.content }}
    />
  );
}

function ArticleFooter({ className, data }) {
  return (
    <>
      <div className={`max-w-2xl mx-auto text-left ${className}`}>
        <hr />
        <h1 className="text-white text-xl lg:text-2xl font-semibold mt-14">
          We like to write these kind of article.
        </h1>
        <div className="flex flex-row text-gray-400 font-light text-sm lg:text-md mt-4">
          Follow us on
          <Link
            className="underline gap-1 mx-1 transition duration-300 hover:text-white"
            href={socials[2].link}
            target={socials[2].target}
          >
            Medium
          </Link>
          to get the latest updates.
        </div>
        <p className="text-gray-400 font-light text-sm lg:text-md mt-2">
          We also active on these social media platforms,
        </p>
      </div>
      <div className="flex gap-4 text-gray-400 font-light text-xs lg:text-md max-w-2xl mx-auto text-left mt-4">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target={social.target}
            className="flex items-center gap-2 transition duration-300 hover:text-white hover:scale-105"
          >
            <span>{social.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden md:grid max-w-2xl mx-auto grid-cols-2 gap-16 mt-12">
        <div className="flex w-full">
          {data.prev ? (
            <PreviousArticleButton id={data.prevId} article={data.prev} />
          ) : null}
        </div>
        <div className="flex w-full">
          {data.next ? (
            <NextArticleButton id={data.nextId} article={data.next} />
          ) : null}
        </div>
      </div>
    </>
  );
}

function PreviousArticleButton({ className, id, article }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex justify-start items-start text-white font-regular gap-2">
        <ChevronLeft className="w-5 h-5 mt-0.5" />
        <span>Previous Article</span>
      </div>
      <Link
        href={`/articles/${id}`}
        className="flex mt-4 transition duration-300 hover:bg-neutral-900 hover:scale-105 border border-neutral-500"
      >
        <div className="relative w-1/3 aspect-square">
          <Image
            src={article.coverImageUrl}
            alt={article.title}
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="flex gap-2 w-full items-center mx-4">
          <h1 className="font-regular text-md line-clamp-3 leading-none">
            {article.title}
          </h1>
        </div>
      </Link>
    </div>
  );
}

function NextArticleButton({ className, id, article }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex justify-end items-start text-white font-regular gap-2">
        <span>Next Article</span>
        <ChevronRight className="w-5 h-5 mt-0.5" />
      </div>
      <Link
        href={`/articles/${id}`}
        className="flex mt-4 transition duration-300 hover:bg-neutral-900 hover:scale-105 border border-neutral-500"
      >
        <div className="flex gap-2 w-full items-center mx-4">
          <h1 className="font-regular text-md line-clamp-3 leading-none">
            {article.title}
          </h1>
        </div>
        <div className="relative w-1/3 aspect-square">
          <Image
            src={article.coverImageUrl}
            alt={article.title}
            className="object-cover w-full h-full"
            fill
          />
        </div>
      </Link>
    </div>
  );
}
