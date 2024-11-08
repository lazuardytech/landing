import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowRight } from "lucide-react";

export default function Text() {
  return (
    <div className="container px-16 mb-12 mt-40">
      <div className="font-bold text-7xl mb-10">
        <BlurFade key={"canvas-title"} delay={0.25 + 0 * 0.05} inView>
          We Would ❤️ to
          <br />
          Hear From You.
        </BlurFade>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="col-span-1">
          <div className="font-light text-lg text-gray-400">
            <div className="w-full flex justify-start pt-2">
              <BlurFade key={"canvas-text-1"} delay={0.25 + 1 * 0.05} inView>
                Let&apos;s cut the bs, here we keep all things simple.
                <br />
                Please ask us anything via email.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-1">
          <div className="flex gap-2 text-md font-light justify-end mb-1 text-gray-400">
            <BlurFade key={"canvas-text-2"} delay={0.25 + 2 * 0.05} inView>
              Have something in mind?{" "}
              <Link
                href=""
                target="_blank"
                className="font-bold transform-colors duration-500 hover:text-white hover:underline"
              >
                Let&apos;s talk.
              </Link>
            </BlurFade>
          </div>
          <div className="text-white text-2xl font-light hover:underline">
            <BlurFade
              key={"canvas-text-3"}
              delay={0.25 + 3 * 0.05}
              inView
              className="flex gap-2 justify-end"
            >
              <ArrowRight className="w-8 h-8 mt-1" />
              <Link href="mailto:contact@lazuardy.tech" target="_blank">
                contact@lazuardy.tech
              </Link>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
