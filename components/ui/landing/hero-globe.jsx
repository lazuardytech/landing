import Link from "next/link";
import Globe from "@/components/ui/globe";
import { RainbowButton } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function HeroGlobe() {
  return (
    <div className="relative h-screen max-w-screen overflow-hidden">
      <Globe className="top-0 ms-auto -me-80 -mt-10 max-w-[1000px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      <div className="container px-10 lg:px-16">
        <div className="flex min-h-screen pb-24 items-start justify-center flex-col">
          <div className="text-6xl max-w-3xl text-left font-regular mb-6">
            <div className="pointer-events-none text-left text-white font-semibold leading-tight">
              Empowering Businesses
              <br />
              Through Technology
            </div>
          </div>
          <div className="max-w-xl text-md font-light text-gray-400 text-left mb-12">
            With a team that understands your unique challenges, we’re here to
            bring the best of technology to help your business thrive, adapt,
            and reach new heights together.
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
  );
}
