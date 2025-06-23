import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import ezra from "@/public/images/mention/ezra.png";
import handoko from "@/public/images/mention/handoko.png";
import yunius from "@/public/images/mention/yunius.png";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    image: ezra,
    name: "Ezra Lazuardy",
    role: "Founder of Lazuardy Tech",
    content:
      "Lazuardy Tech was built with a mission to help any business, by any scale, to perform better than before.",
    link: "https://www.linkedin.com/in/ezralazuardy",
  },
  {
    image: handoko,
    name: "Handoko Wibowo",
    role: "Founder of Omah Tani",
    content:
      "I know they're good because they really know what they're doing. And the good thing is, it's their passion.",
    link: "https://www.google.com/search?q=Handoko+Wibowo",
  },
  {
    image: yunius,
    name: "Yunius Mujianto",
    role: "Professional Designer",
    content:
      "I never met a team that can deliver the project so perfectly before. Simple concept, with elegant closing.",
    link: "https://www.yuniusmujianto.com",
  },
];

export default function Review() {
  return (
    <div className="flex flex-col w-full relative">
      <LayoutLineHeader title="Notable mentions" />
      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`flex flex-col relative w-full p-8 ${index < reviews.length - 1 ? "border-r border-b md:border-b-0 border-neutral-400 border-opacity-90" : ""}`}
            >
              <Title className="text-lg">{review.name}</Title>
              <p className="w-full font-regular text-sm text-neutral-600 text-justify leading-snug mt-2">
                {review.role}
              </p>
              <Title className="text-2xl mt-4 md:mt-8">&quot;</Title>
              <Paragraph className="text-sm">{review.content}</Paragraph>
              <Image
                src={review.image}
                alt={review.name}
                width={500}
                height={500}
                placeholder="blur"
                className="absolute top-0 right-0 w-24 md:w-28 h-24 md:h-28 border border-t-0 border-neutral-400 border-opacity-90 z-10"
              />
              <Link
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center absolute top-0 left-0 z-20 w-full h-full bg-neutral-900 transition-opacity duration-200 opacity-0 hover:opacity-40"
              >
                <LinkIcon className="text-white size-10" strokeWidth={1.4} />
              </Link>
            </div>
          ))}
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
