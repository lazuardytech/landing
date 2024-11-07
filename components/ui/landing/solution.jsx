import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const images = Array.from({ length: 4 }, (_, i) => {
  const width = 1000;
  const height = 1000;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Solution() {
  return (
    <div className="container pt-40 px-20">
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
            <div className="text-3xl md:text-5xl text-left font-regular mb-2">
              <BlurFade key={"solution-title"} delay={0.25 + 4 * 0.05} inView>
                Do we got your interest?
              </BlurFade>
            </div>
            <div className="text-md text-left font-light text-gray-400 max-w-lg">
              <BlurFade key={"solution-title"} delay={0.25 + 4 * 0.05} inView>
                Read our Company Profile and Service Offering documents below to
                know more about us.
              </BlurFade>
            </div>
            <div className="flex gap-6 mt-6">
              <BlurFade
                key={"solution-button-1"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                <Button className="gap-2" variant="default" size="sm">
                  Company Profile <Download className="w-4 h-4" />
                </Button>
              </BlurFade>
              <BlurFade
                key={"solution-button-2"}
                delay={0.25 + 6 * 0.05}
                inView
              >
                <Button className="gap-2" variant="default" size="sm">
                  Service Offering <Download className="w-4 h-4" />
                </Button>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
