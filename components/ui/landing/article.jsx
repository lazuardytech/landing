import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const maxArticles = 4;

const maxArticleImageWidth = 400;

const articles = [
  {
    title: "We’re now legally registered on Indonesia 🎉",
    description:
      "Lazuardy, is now legally registered on the Republic of Indonesia, under name PT Inovasi Kolektif Digital.",
    link: "https://lazuardytech.medium.com/were-now-registered-on-indonesia-f2d9b9cffdc1",
    image: `https://miro.medium.com/v2/resize:fit:${maxArticleImageWidth}/format:webp/0*mArKQSbn5mGbHM-x`,
  },
  {
    title: "Deploy Serverless Laravel with WebAssembly",
    description:
      "In-depth guide about how to deploy a serverless Laravel Application with bleeding edge technology, The Web Assembly.",
    link: "https://lazuardytech.medium.com/deploy-serverless-laravel-with-webassembly-50cdbdb1a755",
    image: `https://miro.medium.com/v2/resize:fit:${maxArticleImageWidth}/format:webp/0*bONULBPKojfiGDz-`,
  },
  {
    title: "Next 101: IoC Implementation with Inversify",
    description:
      "Learn how to properly implement Typescript IoC for Next 14 with Inversivy",
    link: "https://javascript.plainenglish.io/next-101-ioc-implementation-with-inversify-29ce548aad3b",
    image: `https://miro.medium.com/v2/resize:fit:${maxArticleImageWidth}/format:webp/0*dfpP_z8wf905GV2B`,
  },
  {
    title: "A Radical Way For Better Software Development",
    description:
      "Help yourself build a positive mindset in sake for high quality software development process",
    link: "https://levelup.gitconnected.com/a-radical-way-for-better-software-development-da0d2ef1219f",
    image: `https://miro.medium.com/v2/resize:fit:${maxArticleImageWidth}/format:webp/0*SY5nwTcezKCCMfQx`,
  },
  {
    title: "How Engineers Got Exhausted",
    description:
      "Theirs mental burnt, yet physically tired. It’s okay, there are some ways to avoid that.",
    link: "https://levelup.gitconnected.com/how-engineers-got-exhausted-6bec0f41216b",
    image: `https://miro.medium.com/v2/resize:fit:${maxArticleImageWidth}/format:webp/0*5S9N_qihiCSAdK1B`,
  },
];

export default function Article() {
  return (
    <div className="container mt-40 px-10 lg:px-16 flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <div className="relative w-full h-full text-3xl md:text-4xl lg:text-5xl">
          Our Latest Articles
        </div>
        <Link href="https://blog.lazuardy.tech" target="_blank">
          <Button className="gap-4">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.slice(0, maxArticles).map((article, index) => (
          <Link href={article.link} key={index} target="_blank">
            <div
              key={index}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-500"
            >
              <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                <div className="relative w-full h-full border border-zinc-800 aspect-video mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <div className="relative w-full h-full">
                  <span className="text-lg sm:whitespace-pre-line">
                    {article.title.length <= 34
                      ? article.title + "\n\n"
                      : article.title}
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
