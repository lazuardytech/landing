import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Disclaimer() {
	return (
		<div className="flex flex-col w-full">
			<LayoutLineHeader title="A wise man said," className="text-center" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-5 w-full">
					<div className="hidden md:flex flex-col w-full border-r border-neutral-400 border-opacity-90"></div>
					<div className="flex flex-col w-full border-r border-neutral-400 border-opacity-90 md:col-span-3 p-8 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="text-lg">Simpler is better</Title>
						<Paragraph className="text-sm text-justify mt-4">
							While we support many of it, not all technologies above are
							suitable and usable for your needs. A stupid analogy is like, a
							teeth can get rotten if you use too much sugar.
						</Paragraph>
						<Paragraph className="text-sm text-justify mt-4">
							You wouldn&apos;t get a rotten teeth do you? Then let us research
							and define what the best technology for your needs.
						</Paragraph>
						<Paragraph className="text-sm text-justify mt-4">
							If you have any specific technology request for your project, just
							ask us.
						</Paragraph>
						<div className="flex justify-end space-x-4 mt-10">
							<Button size="default" variant="link" asChild>
								<Link href="/contact">Ask us anything</Link>
							</Button>
							<Button size="default" variant="default" asChild>
								<Link
									href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
									target="_blank"
									rel="noopener noreferrer"
								>
									Talk to us
								</Link>
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
