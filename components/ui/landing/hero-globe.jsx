import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import globe from "@/public/images/landing/globe.webp";

export default function HeroGlobe() {
  return (
    <>
      <div className="relative h-screen max-w-screen overflow-hidden">
        <div className="absolute h-screen w-full z-10">
          <Image
            alt="globe"
            className="absolute top-0 right-0 mt-4 -me-56"
            src={globe}
            width={880}
            height={880}
          />
        </div>
        <div className="absolute h-screen w-full z-20">
          <div className="flex container px-14">
            <div className="flex ps-1 min-h-screen pb-24 items-start justify-center flex-col">
              <div className="text-6xl max-w-3xl text-left font-regular mb-6">
                <div className="pointer-events-none text-left text-white font-semibold leading-tight">
                  Empowering Businesses
                  <br />
                  Through Technology
                </div>
              </div>
              <div className="max-w-xl text-md font-light text-gray-400 text-left mb-12">
                With a team that understands your unique challenges, we’re here
                to bring the best of technology to help your business thrive,
                adapt, and reach new heights together.
              </div>
              <div className="flex flex-row">
                <Link
                  href={`${process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}`}
                  target="_blank"
                >
                  <RainbowButton className="gap-2 text-black transition-transform duration-500 hover:scale-105 active:scale-100 active:bg-black text-md">
                    Book a Free Consultation <PhoneCall className="w-4 h-4" />
                  </RainbowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
