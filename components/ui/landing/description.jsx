import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { Parallax } from "@/components/parallax";

export default function Description() {
  return (
    <div className="container pt-40 px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <BlurFade key={"description-title"} delay={0.25 + 0 * 0.05} inView>
              <h1 className="text-6xl md:text-8xl text-left font-regular mb-6">
                A Digital Collective.
              </h1>
            </BlurFade>
            <BlurFade key={"description-text"} delay={0.25 + 1 * 0.05} inView>
              <p className="text-lg font-light text-gray-400 max-w-md text-left">
                Lazuardy is a team full of visionary engineers, researchers, and
                professionals that work together to help business grow bigger
                through bleeding edge technology.
              </p>
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:ps-12">
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key="description-image-1"
              delay={0.25 + 2 * 0.05}
              inView
            >
              <Parallax speed={1} className="self-end overflow-hidden">
                <Image
                  alt="description-image-1"
                  src="/images/landing/description-1.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="w-full object-cover"
                />
              </Parallax>
            </BlurFade>
          </div>
          <div className="row-span-2">
            <BlurFade
              className="w-full h-full"
              key="description-image-3"
              delay={0.25 + 4 * 0.05}
              inView
            >
              <Parallax speed={-1} className="self-center">
                <Image
                  alt="description-image-3"
                  src="/images/landing/description-3.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="w-full object-cover mt-16"
                />
              </Parallax>
            </BlurFade>
          </div>
          <div className="row-span-1 aspect-square">
            <BlurFade
              className="w-full h-full"
              key="description-image-2"
              delay={0.25 + 3 * 0.05}
              inView
            >
              <Parallax speed={0.1} className="self-center">
                <Image
                  alt="description-image-2"
                  src="/images/landing/description-2.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="w-full object-cover"
                />
              </Parallax>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
