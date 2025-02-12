import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import ezra from "@/public/images/mention/ezra.png";
import handoko from "@/public/images/mention/handoko.png";
import yunius from "@/public/images/mention/yunius.png";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Timeline() {
  return (
    <div className="flex flex-col w-full relative">
      <LayoutLineHeader title="How We Work" />
      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <div className="flex flex-col relative w-full p-8 border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Title className="text-2xl">1. Consult</Title>
            <Paragraph className="text-sm mt-4 md:mt-6">
              We listen and analyze all of your needs, specs, and requirements.
              It&apos;s free! no commitment needed.
            </Paragraph>
          </div>
          <div className="flex flex-col relative w-full p-8 border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Title className="text-2xl">2. Propose</Title>
            <Paragraph className="text-sm mt-4 md:mt-6">
              Based on your needs, we research, plan and propose on what you
              really needs.
            </Paragraph>
          </div>
          <div className="flex flex-col relative w-full p-8 border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Title className="text-2xl">3. Execute</Title>
            <Paragraph className="text-sm mt-4 md:mt-6">
              After the proposal and payment term are settled, we start to
              execute and develop our plan.
            </Paragraph>
          </div>
          <div className="flex flex-col relative w-full p-8 justify-center items-center md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Title className="text-2xl">4. Maintain</Title>
            <Paragraph className="text-sm mt-4 md:mt-6">
              We provide an ongoing maintenance and support for your project to
              keep it up-to-date.
            </Paragraph>
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
