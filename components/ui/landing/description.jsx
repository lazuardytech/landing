import Image from "next/image";
import { Parallax } from "@/components/parallax";

export default function Description() {
  return (
    <div className="container pt-20 px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col pb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-left font-regular mb-6">
              A Digital Collective.
            </h1>
            <p className="text-lg font-light text-gray-400 max-w-xl text-left">
              Lazuardy is a team full of visionary engineers, researchers, and
              professionals that work together to help business grow bigger
              through bleeding edge technology.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:ps-12">
          <div className="row-span-1 aspect-square w-full h-full">
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
          </div>
          <div className="row-span-2 w-full h-full">
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
          </div>
          <div className="row-span-1 aspect-square w-full h-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}
