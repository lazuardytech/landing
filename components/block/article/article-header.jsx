import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { ArrowLeft, Share } from "lucide-react";
import Link from "next/link";

export default function ArticleHeader({ article }) {
  return (
    <LayoutLine className="pt-[12vh] md:pt-[18vh] pb-16 px-8">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="grid grid-cols-3 w-full md:max-w-3xl mt-6">
          <div className="flex flex-col w-full justify-center items-start">
            <div className="flex">
              <Button size="default" variant="link" asChild>
                <Link href="/article">
                  <ArrowLeft />
                  Back
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <Title className="text-md md:text-lg text-center uppercase">
              Article
            </Title>
          </div>
          <div className="flex flex-col w-full justify-center items-end">
            <div className="flex">
              <Button size="default" variant="link" disabled>
                <Share />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <Title className="w-full md:max-w-3xl text-3xl md:text-5xl text-center">
          {article.title}
        </Title>
        <p className="w-full md:max-w-2xl font-light text-md text-neutral-600 text-center leading-snug mt-8">
          {article.description}
        </p>
        <div className="flex space-x-4 mt-8">
          <span className="flex md:max-w-2xl font-light text-sm text-black text-center leading-snug">
            {article.getFormattedDate()}
          </span>
          <span className="flex md:max-w-2xl font-light text-sm text-black text-center leading-snug">
            &bull;
          </span>
          <span className="flex md:max-w-2xl font-light text-sm text-black text-center leading-snug">
            {article.readTime.text}
          </span>
        </div>
      </div>
    </LayoutLine>
  );
}
