"use client";

import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const cases = [
  {
    title: "Case 1",
    image: "/images/landing/case-1.webp",
  },
  {
    title: "Case 2",
    image: "/images/landing/case-2.webp",
  },
  {
    title: "Case 3",
    image: "/images/landing/case-3.webp",
  },
  {
    title: "Case 4",
    image: "/images/landing/case-4.webp",
  },
  {
    title: "Case 5",
    image: "/images/landing/case-5.webp",
  },
  {
    title: "Case 6",
    image: "/images/landing/case-6.webp",
  },
];

const items = cases.concat(cases).concat(cases);

export default function Cases() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="mb-16">
      <div className="container">
        <div className="w-full px-16 text-xl md:text-2xl font-light text-center">
          <BlurFade key={"cases-title"} delay={0.25 + 0 * 0.05} inView>
            Trusted by businesses worldwide
          </BlurFade>
        </div>
      </div>
      <BlurFade key="cases-carousel" delay={0.25 + 1 * 0.05} inView>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image src={item.image} alt={item.title} fill />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </BlurFade>
    </div>
  );
}
