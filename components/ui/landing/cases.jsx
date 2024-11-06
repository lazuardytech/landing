"use client";

import BlurFade from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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
    <>
      <div className="container pt-0">
        <h2 className="w-full text-xl md:text-3xl font-regular text-center">
          <BlurFade key={"cases-title"} delay={0.25 + 0 * 0.05} inView>
            Trusted by businesses worldwide
          </BlurFade>
        </h2>
      </div>
      <BlurFade key={"cases-carousel"} delay={0.25 + 1 * 0.05} inView>
        <Carousel setApi={setApi} className="mt-10">
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                <div className="flex rounded-md aspect-square bg-zinc-900 items-center justify-center p-6">
                  <span className="text-sm">Logo {index + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </BlurFade>
    </>
  );
}
