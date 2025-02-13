import LEXAVideo from "@/components/block/ai/lexa-video";
import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function LEXA() {
	return (
		<div className="flex flex-col w-full">
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-3 w-full">
					<div className="my-16 md:my-0 md:col-span-2 w-full flex flex-col justify-center items-start px-8 md:border-r border-neutral-400 border-opacity-90">
						<Title className="text-2xl md:text-5xl text-center md:text-start w-full">
							Backed by the team behind LEXA
						</Title>
						<div className="flex flex-col w-full mt-6 md:mt-8 justify-start items-start">
							<div className="w-full max-w-xl flex justify-start">
								<p className="w-full font-light text-neutral-600 text-justify md:text-start leading-snug text-sm">
									We are a team that develop LEXA, intelligent assistant for
									Southeast Asian legal professionals. With Lazuardy, you got
									the best team in the industry to help you with your AI
									project.
								</p>
							</div>
							<div className="w-full flex space-x-2 justify-center md:justify-start mt-8">
								<Button size="lg" variant="default" asChild>
									<Link
										href="https://lexa.lazuardy.tech"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2" />
										Learn More about LEXA
									</Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-center border-t md:border-t-0 border-neutral-400 border-opacity-90 bg-black">
						<div className="flex w-full h-full aspect-[9/16] opacity-70">
							<LEXAVideo />
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
