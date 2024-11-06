import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const images = Array.from({ length: 3 }, (_, i) => {
  const width = 1000;
  const height = 1000;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Description() {
  return (
    <div className="container px-16 pt-40">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <BlurFade key={"description-title"} delay={0.25 + 0 * 0.05} inView>
              <h1 className="text-6xl md:text-8xl text-left font-regular mb-4">
                A Digital Collective.
              </h1>
            </BlurFade>
            <BlurFade key={"description-text"} delay={0.25 + 1 * 0.05} inView>
              <p className="text-md font-light text-gray-400 max-w-md text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 ps-12">
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[0]}
              delay={0.25 + 2 * 0.05}
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
          <div className="row-span-2">
            <BlurFade
              className="w-full h-full"
              key={images[0]}
              delay={0.25 + 4 * 0.05}
              inView
            >
              <Image
                alt={images[2]}
                src={images[2]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "100%" }}
                className="w-full rounded-lg"
              />
            </BlurFade>
          </div>
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key={images[1]}
              delay={0.25 + 3 * 0.05}
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
        </div>
      </div>
    </div>
  );
}
