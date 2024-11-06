import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Building, BookText } from "lucide-react";

const images = Array.from({ length: 4 }, (_, i) => {
  const width = 1000;
  const height = 1000;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Solution() {
  return (
    <div className="container px-16 pt-40">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="grid grid-cols-2 gap-8 pe-32 select-none pointer-events-none">
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[0]}
              delay={0.25 + 1 * 0.05}
              inView
            >
              <Image
                alt={images[0]}
                src={images[0]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="w-full rounded-lg"
              />
            </BlurFade>
          </div>
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[1]}
              delay={0.25 + 2 * 0.05}
              inView
            >
              <Image
                alt={images[1]}
                src={images[1]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="w-full rounded-lg"
              />
            </BlurFade>
          </div>
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[2]}
              delay={0.25 + 3 * 0.05}
              inView
            >
              <Image
                alt={images[2]}
                src={images[2]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="w-full rounded-lg"
              />
            </BlurFade>
          </div>
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[3]}
              delay={0.25 + 4 * 0.05}
              inView
            >
              <Image
                alt={images[3]}
                src={images[3]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="w-full rounded-lg"
              />
            </BlurFade>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="text-5xl md:text-6xl text-left font-regular">
              <BlurFade key={"solution-title"} delay={0.25 + 4 * 0.05} inView>
                We got a complete solutions, ready to help you.
              </BlurFade>
            </div>
            <div className="flex gap-4 mt-10">
              <BlurFade
                key={"solution-button-1"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                <Button className="gap-2" variant="default" size="sm">
                  Download Our Company Profile <Building className="w-4 h-4" />
                </Button>
              </BlurFade>
              <BlurFade
                key={"solution-button-2"}
                delay={0.25 + 6 * 0.05}
                inView
              >
                <Button className="gap-2" variant="default" size="sm">
                  Download Our Service Offering <BookText className="w-4 h-4" />
                </Button>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
