import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { ShinyBadge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-8 pb-20 min-h-screen items-center justify-center flex-col">
        <div>
          <ShinyBadge>
            <span>🇮🇩</span>
            <span className="ms-2">We&apos;re registered on Indonesia!</span>
          </ShinyBadge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-normal text-center font-regular">
            We help businesses <span className="underline">grow bigger</span>{" "}
            through technology
          </h1>
          <p className="text-md md:text-xl font-light leading-relaxed tracking-tight text-muted-foreground text-gray-400 max-w-3xl text-center mt-4 mb-4">
            Lazuardy is a team full of visionary engineers, researchers, and
            professionals that work together to help business grow bigger
            through bleeding edge technology.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link
            href={`${process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}`}
            target="_blank"
          >
            <RainbowButton className="gap-2 text-black transition-transform duration-500 hover:scale-105 active:scale-100 active:bg-black">
              Book a Free Consultation <PhoneCall className="w-4 h-4" />
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
