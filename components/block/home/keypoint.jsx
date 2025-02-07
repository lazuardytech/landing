import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import { Marquee } from "@/components/ui/marquee";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Doto from "@/lib/fonts/doto";
import Link from "next/link";

const products = [
	// software
	"software development",
	"web development",
	"mobile app",
	"native app",
	"erp",
	"saas",
	"pos",
	// hardware
	"hardware development",
	"iot",
	"embedded system",
	"pcb design",
	// design
	"ui/ux",
	"brand identity",
	"product branding",
	"design",
	// ai
	"artificial intelligence",
	"research",
	"chatbot development",
	"algorithm",
];

const productFirstRow = products.slice(0, products.length / 2);
const productSecondRow = products.slice(products.length / 2);

export default function Keypoint({ titleCenter = false }) {
	titleCenter =
		typeof titleCenter === "string" ? titleCenter === "true" : titleCenter;
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLineHeader
				title="Now is the right time."
				className={titleCenter ? "text-center" : "text-left"}
				sticky={false}
			/>
			<LayoutLine>
				<div className="grid grid-cols-2 md:grid-cols-4 w-full">
					<div className="flex flex-col w-full p-8 justify-center items-center border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="flex text-xl">
							<span className="hidden md:flex mr-2">To</span>Automate
						</Title>
						<Paragraph className="text-xs mt-2">
							Automate repetitive tasks and streamline your workflows.
						</Paragraph>
					</div>
					<div className="flex flex-col w-full p-8 justify-center items-center border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="flex text-xl">
							<span className="hidden md:flex mr-2">To</span>Optimize
						</Title>
						<Paragraph className="text-xs mt-2">
							Enhance efficiency by refining processes and technology.
						</Paragraph>
					</div>
					<div className="flex flex-col w-full p-8 justify-center items-center border-r border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="flex text-xl">
							<span className="hidden md:flex mr-2">To</span>Modernize
						</Title>
						<Paragraph className="text-xs mt-2">
							Upgrade your systems with the latest and modern technology.
						</Paragraph>
					</div>
					<div className="relative flex flex-col w-full p-8 justify-center items-center md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Paragraph className="hidden md:flex text-xs">
							We offer a free and no-commitment consultation.
						</Paragraph>
						<Button size="sm" variant="default" className="w-full mt-4" asChild>
							<Link href="/inquiry">Start a Project</Link>
						</Button>
						<Button size="sm" variant="link" className="w-full mt-2" asChild>
							<Link
								href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
								target="_blank"
								rel="noopener noreferrer"
							>
								Talk to Us
							</Link>
						</Button>
						<BorderBeam
							borderWidth={3}
							duration={6}
							colorFrom={"#171717"}
							colorTo="#A9A9A9"
							className="hidden md:block"
						/>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<div className="relative py-8 flex h-auto w-full flex-col items-center justify-center overflow-hidden">
					<Marquee pauseOnHover className="[--duration:20s]">
						{productFirstRow.map((label, index) => (
							<ProductItem key={index} label={label} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover className="[--duration:20s]">
						{productSecondRow.map((label, index) => (
							<ProductItem key={index} label={label} />
						))}
					</Marquee>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}

export function ProductItem({ label }) {
	return (
		<h1
			className={`font-bold text-lg md:text-xl text-black text-left leading-snug uppercase ${Doto.className}`}
		>
			{label}
		</h1>
	);
}
