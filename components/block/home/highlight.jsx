import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Highlight() {
  return (
    <div className="flex flex-col w-full">
      <LayoutLine className="pt-16 md:pt-20" />
      <HorizontalBorder />
      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-5 w-full">
          <div className="hidden md:flex flex-col w-full border-r border-neutral-400 border-opacity-90"></div>
          <div className="flex flex-col w-full border-r border-neutral-400 border-opacity-90 md:col-span-3 p-8 md:transition-colors md:duration-200 md:hover:bg-neutral-400">
            <Title className="text-lg">AI is Growing Rapidly!</Title>
            <Paragraph className="text-sm text-justify mt-4">
              Businesses worldwide are adopting AI to stay ahead of the
              competition. From automation to data-driven insights, AI is no
              longer a luxury, it&apos;s a necessity.
            </Paragraph>
            <Paragraph className="text-sm text-justify mt-4">
              Don’t get left behind. Leverage AI to optimize operations, enhance
              customer experience, and drive smarter decisions. Let’s join us to
              build the future together and start integrating AI into your
              business today! 🚀
            </Paragraph>
            <div className="flex justify-end space-x-4 mt-10">
              <Button size="default" variant="link" asChild>
                <Link href="/contact">Ask us anything</Link>
              </Button>
              <Button size="default" variant="default" asChild>
                <Link href="/ai">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex flex-col w-full"></div>
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
