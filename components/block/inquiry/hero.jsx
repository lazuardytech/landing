import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Hero() {
	return (
		<LayoutLine className="pt-[12vh] md:pt-[22vh] px-8 relative">
			<Title className="text-md md:text-lg text-center uppercase">
				Inquiry
			</Title>
			<div className="flex flex-col justify-center items-center gap-4 w-full mt-6 relative">
				<div className="flex flex-col w-full justify-center items-center">
					<Title className="text-3xl md:text-5xl text-center">
						Ready to build product that outstands others?
					</Title>
					<p className="w-full md:max-w-lg font-light text-neutral-600 text-center text-xs md:text-sm leading-snug mt-4 md:mt-8">
						Let&apos;s not waste time by waiting until your competitors become
						more successful than you. Don&apos;t know where to start? Please
						reach us out.
					</p>
					<div className="flex justify-center mt-8 space-x-2">
						<Button size="lg" variant="link" asChild>
							<Link href="/contact">Contact Us</Link>
						</Button>
						<Button size="lg" variant="default" asChild>
							<Link
								href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
								target="_blank"
								rel="noopener noreferrer"
							>
								Schedule a Meeting
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</LayoutLine>
	);
}
