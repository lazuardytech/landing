import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { PhoneCall } from "lucide-react";
import { ShinyBadge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container">
      <div className="flex gap-8 pb-20 px-20 min-h-screen items-center justify-center flex-col">
        <BlurFade key={"hero-badge"} delay={0.25 + 0 * 0.05} inView>
          <ShinyBadge>
            <span>🇮🇩</span>
            <span className="ms-2">We&apos;re registered on Indonesia!</span>
          </ShinyBadge>
        </BlurFade>
        <div className="flex gap-4 flex-col">
          <div className="text-5xl md:text-7xl max-w-3xl tracking-normal text-center font-regular">
            <BlurFade key={"hero-title"} delay={0.25 + 1 * 0.05} inView>
              We help businesses <span className="underline">grow bigger</span>{" "}
              through technology
            </BlurFade>
          </div>
          <div className="text-md md:text-xl font-light leading-relaxed tracking-tight text-muted-foreground text-gray-400 max-w-3xl text-center mt-4 mb-4">
            <BlurFade key={"hero-text"} delay={0.25 + 2 * 0.05} inView>
              Lazuardy is a team full of visionary engineers, researchers, and
              professionals that work together to help business grow bigger
              through bleeding edge technology.
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Link
            href={`${process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}`}
            target="_blank"
          >
            <BlurFade key={"hero-button"} delay={0.25 + 3 * 0.05} inView>
              <RainbowButton className="gap-2 text-black transition-transform duration-500 hover:scale-105 active:scale-100 active:bg-black">
                Book a Free Consultation <PhoneCall className="w-4 h-4" />
              </RainbowButton>
            </BlurFade>
          </Link>
        </div>
      </div>
    </div>
  );
}
