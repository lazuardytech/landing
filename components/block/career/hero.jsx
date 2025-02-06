import AnimatedBox from "@/components/ui/animated-box";
import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Hero() {
  return (
    <LayoutLine className="pt-[12vh] md:pt-[22vh] px-8 relative">
      <div className="absolute top-40 right-8 flex flex-col opacity-50">
        <AnimatedBox character="+" randomCharacter="-" />
      </div>
      <Title className="text-md md:text-lg text-left uppercase">Career</Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 relative">
        <div className="flex w-full col-span-2">
          <Title className="text-3xl md:text-5xl text-left">
            We&apos;re seeking different perspective.
          </Title>
        </div>
        <div className="flex flex-col w-full justify-end"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4 md:mt-10">
        <div className="w-full flex md:space-x-4 justify-start">
          <Button size="lg" variant="default" asChild>
            <Link
              href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to us
            </Link>
          </Button>
          <Button size="lg" variant="link" asChild>
            <Link href="/contact">
              <span className="hidden md:flex">Any job openings?</span>
              <span className="flex md:hidden">Contact us</span>
            </Link>
          </Button>
        </div>
      </div>
    </LayoutLine>
  );
}
