"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { associates } from "@/lib/state";

const items = associates.concat(associates).concat(associates);

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
    }, 2000);
  }, [api, current]);

  return (
    <div className="relative z-10 bg-black pt-16 pb-24 border-t border-zinc-800">
      <div className="container">
        <div className="w-full pb-4 lg:pb-0 lg:px-16 text-lg md:text-2xl font-light text-center">
          Trusted by businesses worldwide
        </div>
      </div>
      <Carousel setApi={setApi} className="select-none hover:cursor-pointer">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
              <div className="relative aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Link href={item.link} target={item.target}>
                    <Image src={item.logo} alt={item.name} fill />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
