import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import { NumberTicker } from "@/components/ui/number-ticker";
import Paragraph from "@/components/ui/paragraph";
import Doto from "@/lib/fonts/doto";
import { CreditCard, Expand, Sparkle, Speech } from "lucide-react";
import Link from "next/link";

export default function Why() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLineHeader title="Why They Trust Us?" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="grid grid-cols-2 w-full border-r border-neutral-400 border-opacity-90">
						<div className="flex w-full justify-center items-center border-r border-b border-neutral-400 border-opacity-90">
							<WhyKeypoint
								count={25}
								countSuffix="+"
								label="Certified Engineers and Professionals"
							/>
						</div>
						<div className="flex w-full justify-center items-center border-b border-neutral-400 border-opacity-90">
							<WhyKeypoint
								count={16}
								countSuffix="+"
								label="Entrepreneur, Organization, and Corporate Clients"
							/>
						</div>
						<div className="flex w-full justify-center items-center border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
							<WhyKeypoint
								count={60}
								countSuffix="%"
								label="Higher cost efficiency on business operational"
							/>
						</div>
						<div className="flex w-full justify-center items-center border-b md:border-b-0 border-neutral-400 border-opacity-90">
							<WhyKeypoint
								count={20}
								countSuffix="+"
								label="International Software, AI, and Research Projects"
							/>
						</div>
					</div>
					<div className="flex flex-col w-full p-8">
						<Paragraph className="text-sm">
							Statistic says, 90% of startups that exist are failing, while
							18.4% business tend to fail at the first year.
						</Paragraph>
						<Paragraph className="text-sm mt-0">
							<Button size="default" variant="link" className="px-0" asChild>
								<Link
									href="https://luisazhou.com/blog/businesses-that-fail"
									target="_blank"
									rel="noopener noreferrer"
								>
									luisazhou.com
								</Link>
							</Button>
						</Paragraph>
						<Paragraph className="text-sm mt-4">
							We know you&apos;re tired to grow your business. Thus, let us
							handle the hard work for you, so you don&apos;t have to. You can
							focus on what you do best for the next step.
						</Paragraph>
						<WhyBenefit
							Icon={Sparkle}
							label="Quality over quantity"
							className="mt-8"
						/>
						<WhyBenefit
							Icon={Expand}
							label="Scalable based on your needs"
							className="mt-4"
						/>
						<WhyBenefit
							Icon={CreditCard}
							label="Flexible payment term"
							className="mt-4"
						/>
						<WhyBenefit
							Icon={Speech}
							label="Free consultation"
							className="mt-4"
						/>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}

export function WhyKeypoint({ count, countSuffix, label }) {
	return (
		<div className="flex flex-col w-full py-8">
			<div className="flex mx-auto space-x-2">
				<NumberTicker
					value={count}
					className={`whitespace-pre-wrap text-4xl md:text-6xl font-regular tracking-tighter text-black ${Doto.className}`}
				/>
				<span
					className={`whitespace-pre-wrap text-4xl md:text-6xl font-regular tracking-tighter text-black ${Doto.className}`}
				>
					{countSuffix}
				</span>
			</div>
			<p className="w-full font-light text-center text-xs mt-4 px-8">{label}</p>
		</div>
	);
}

export function WhyBenefit({ Icon, label, className }) {
	return (
		<div className={`flex w-full space-x-4 ${className}`}>
			<Icon className="w-5 h-5" strokeWidth={1.6} />
			<p className="w-full font-regular text-sm text-black text-justify leading-snug">
				{label}
			</p>
		</div>
	);
}
