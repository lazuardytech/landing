import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import Globe from "@/components/magicui/globe";
import { RainbowButton } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function HeroGlobe() {
  return (
    <div className="relative h-screen max-w-screen overflow-hidden">
      <Globe className="top-0 ms-auto -me-80 -mt-10 max-w-[1100px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      <div className="container px-10 lg:px-16">
        <div className="flex min-h-screen pb-20 items-start justify-center flex-col gap-12">
          <div className="text-6xl text-left font-regular">
            <BlurFade key="hero-title" delay={0.25 + 0 * 0.05} inView>
              <div className="pointer-events-none whitespace-pre-wrap text-left text-gray-200 font-semibold leading-none">
                Empowering Businesses
              </div>
              <div className="pointer-events-none whitespace-pre-wrap text-left bg-gradient-to-b from-black to-gray-200/80 bg-clip-text font-semibold leading-snug text-transparent dark:from-white dark:to-black">
                Through Technology
              </div>
            </BlurFade>
          </div>
          <div className="max-w-xl text-md font-light text-gray-400 text-left">
            <BlurFade key="hero-text" delay={0.25 + 2 * 0.05} inView>
              With a team that understands your unique challenges, we’re here to
              bring the best of technology to help your business thrive, adapt,
              and reach new heights together.
            </BlurFade>
          </div>
          <div className="flex flex-row">
            <Link
              href={`${process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}`}
              target="_blank"
            >
              <BlurFade key="hero-button" delay={0.25 + 3 * 0.05} inView>
                <RainbowButton className="gap-2 text-black transition-transform duration-500 hover:scale-105 active:scale-100 active:bg-black text-md">
                  Book a Free Consultation <PhoneCall className="w-4 h-4" />
                </RainbowButton>
              </BlurFade>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
