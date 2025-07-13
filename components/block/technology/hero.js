import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import SpaceInvaders from "@/components/ui/space-invaders";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Hero() {
	return (
		<LayoutLine className="pt-[12vh] md:pt-[22vh] px-8 relative">
			<div className="hidden md:flex flex-col absolute pt-[12vh] top-6 right-6 opacity-80">
				<SpaceInvaders />
			</div>
			<Title className="text-md md:text-lg text-left uppercase">
				Technology
			</Title>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 relative">
				<div className="flex w-full col-span-2">
					<Title className="text-3xl md:text-5xl text-left">
						Our swiss-army knife to cut any problem you have.
					</Title>
				</div>
				<div className="flex flex-col w-full justify-end" />
			</div>
			<div className="flex flex-col w-full mt-4 md:mt-10">
				<div className="flex w-full space-x-2 justify-start">
					<Button size="lg" variant="default" asChild>
						<Link
							href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							Talk to Us
						</Link>
					</Button>
					<Button size="lg" variant="link" asChild>
						<Link href="/contact">
							<span className="hidden md:flex">
								Any question about our tech?
							</span>
							<span className="flex md:hidden">Contact Us</span>
						</Link>
					</Button>
				</div>
			</div>
		</LayoutLine>
	);
}
