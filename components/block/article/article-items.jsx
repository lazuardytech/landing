import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Image from "next/image";
import Link from "next/link";

export default function ArticleItems({ data }) {
  return (
    <div className="flex flex-col w-full">
      <LayoutLine className="z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {data.items.map((article, index) => (
            <ArticleItem
              key={index}
              index={index}
              image={article.coverImageUrl}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </LayoutLine>
    </div>
  );
}

export function ArticleItem({ index, image, title, description }) {
  return (
    <div className="flex flex-col w-full">
      <HorizontalBorder className="mt-16 md:mt-20" />
      <div
        className={`flex flex-col w-full justify-center items-center ${index <= 0 || index % 2 === 0 ? "md:items-end pr-6" : "md:items-start pl-6"}`}
      >
        <div className="flex flex-col w-5/6 md:border-l md:border-r border-neutral-400 border-opacity-90 group hover:cursor-click">
          <Link key={index} href={`/article/${index}`}>
            <div className="flex w-full aspect-video">
              <Image
                src={image}
                alt={title}
                width={720}
                height={405}
                draggable={false}
                className="select-none object-cover w-full h-full aspect-video border-b border-neutral-400 border-opacity-90 md:filter md:grayscale md:transition-all md:duration-500 md:group-hover:filter-none"
              />
            </div>
            <div className="flex flex-col w-full p-8 md:transition-colors md:duration-500 md:group-hover:bg-neutral-300">
              <Title className="text-lg line-clamp-1 text-ellipsis">
                {title}
              </Title>
              <Paragraph className="w-full text-xs text-justify mt-4 line-clamp-1 text-ellipsis">
                {description}
              </Paragraph>
            </div>
          </Link>
        </div>
      </div>
      <HorizontalBorder />
    </div>
  );
}
