import HeroVideo from "@/components/block/home/hero-video";
import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Hero() {
  return (
    <LayoutLine className="pt-[14vh] md:pt-[22vh] px-8">
      <Title className="text-3xl md:text-5xl text-justify">
        We help businesses grow bigger through modern technology.
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8 md:mt-8">
        <div className="w-full flex space-x-4 justify-start">
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
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        <div className="w-full flex justify-end mt-8 md:mt-0">
          <Paragraph className="text-sm">
            We’re a team that gets your challenges and uses the best technology
            to help your business grow, adapt, and succeed.
          </Paragraph>
        </div>
      </div>
      <div className="flex w-full h-full aspect-video mt-10 md:mt-2">
        <HeroVideo />
      </div>
    </LayoutLine>
  );
}
