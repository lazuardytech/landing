import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WIP() {
  return (
    <div className="container px-10 lg:px-16 mb-16 mt-16 lg:mt-40">
      <div className="max-w-xl lg:max-w-3xl mb-6 text-3xl lg:text-7xl font-bold">
        <span className="leading-snug">
          We&apos;re still preparing this section 🚧
        </span>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="flex justify-start items-end">
          <div className="w-full grid grid-rows gap-8 leading-relaxed font-light text-md text-gray-400 max-w-md mb-1">
            We appreciate your patience while we work on this section. Please
            check back later. Thank you!
          </div>
        </div>
        <div className="flex lg:justify-end items-end pt-4 lg:pt-0">
          <div className="grid grid-rows gap-4 lg:gap-0">
            <div className="flex gap-2 lg:justify-end text-md font-light text-gray-400">
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
            </div>
            <div className="flex lg:gap-2 lg:justify-end text-white text-xl lg:text-2xl font-light hover:underline">
              <ArrowRight className="hidden lg:block w-8 h-8 mt-1" />
              <Link href="mailto:contact@lazuardy.tech" target="_blank">
                contact@lazuardy.tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
