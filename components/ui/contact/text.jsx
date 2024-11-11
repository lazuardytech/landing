import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowRight } from "lucide-react";

export default function Text() {
  return (
    <div className="container px-10 lg:px-16 mb-16 mt-16 lg:mt-40">
      <div className="font-bold text-3xl lg:text-7xl leading-tight mb-6">
        <BlurFade
          key="contact-title"
          className="max-w-xl lg:max-w-3xl leading-snug"
          delay={0.25 + 0 * 0.05}
          inView
        >
          We Would ❤️ to Hear From You.
        </BlurFade>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="flex justify-start items-end">
          <div className="w-full grid grid-rows gap-8 leading-relaxed font-light text-md text-gray-400 max-w-md mb-1">
            <BlurFade key="contact-text-1" delay={0.25 + 1 * 0.05} inView>
              Let&apos;s cut the bs, here we keep all things simple.
              <br />
              Please ask us anything via email.
            </BlurFade>
          </div>
        </div>
        <div className="flex lg:justify-end items-end pt-4 lg:pt-0">
          <div className="grid grid-rows gap-4 lg:gap-0">
            <div className="text-md font-light text-gray-400">
              <BlurFade
                key="contact-text-2"
                delay={0.25 + 3 * 0.05}
                inView
                className="flex gap-2 lg:justify-end"
              >
                <div>Have something in mind?</div>
                <div>
                  <Link
                    href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                    target="_blank"
                    className="text-white font-bold transform-colors duration-500 hover:underline"
                  >
                    Let&apos;s talk.
                  </Link>
                </div>
              </BlurFade>
            </div>
            <div className="text-white text-xl lg:text-2xl font-light hover:underline">
              <BlurFade
                key="contact-text-3"
                delay={0.25 + 4 * 0.05}
                inView
                className="flex lg:gap-2 lg:justify-end"
              >
                <ArrowRight className="hidden lg:block w-8 h-8 mt-1" />
                <Link href="mailto:contact@lazuardy.tech" target="_blank">
                  contact@lazuardy.tech
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
