import CTAVideo from "@/components/block/oura/cta-video";
import { Button } from "@/components/ui/button";
import { Mail, Swords } from "lucide-react";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";
import Image from "next/image";
import oura from "@/public/images/logo/oura.svg";

export default function CTA() {
	return (
		<div id="ai-cta" className="flex flex-col w-full relative">
			<LayoutLine className="relative bg-black">
				<div className="w-full flex flex-col justify-center items-center aspect-video z-10 px-8">
					<Title className="hidden md:block text-lg md:text-3xl text-center w-full text-white md:max-w-2xl mt-3">
						You&apos;re Either Prepared or Exposed.
					</Title>
					<Title className="block md:hidden text-lg md:text-3xl text-center w-full text-white md:max-w-2xl mt-4">
						Trigger Full Protection, Today.
					</Title>
					<div className="flex flex-col w-full mt-20 md:mt-48 justify-center items-center">
						<div className="w-full flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center mt-0 md:mt-6">
							<Button
								size="default"
								variant="link"
								className="hidden md:flex"
								asChild
							>
								<Link
									href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white"
								>
									<Mail className="w-5 h-5" />
									Contact Us
								</Link>
							</Button>
							<Button
								size="default"
								variant="default"
								className="btn-main"
								asChild
							>
								<Link href="/inquiry">
									<Swords className="w-5 h-5" />
									Start the Hunt
								</Link>
							</Button>
						</div>
					</div>
				</div>
				<div className="absolute top-0 left-0 h-full w-full aspect-video z-0 pb-1">
					<CTAVideo />
				</div>
				<div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
					<Image
						src={oura}
						draggable={false}
						alt="Oura"
						width={400}
						height={200}
						className="text-white w-10 md:w-12 h-auto mt-1 md:mt-2 opacity-70"
					/>
				</div>
			</LayoutLine>
			<HorizontalBorder className="z-40" />
		</div>
	);
}
