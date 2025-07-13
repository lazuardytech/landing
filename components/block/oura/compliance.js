"use client";

import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Image from "next/image";
import certificateMockup from "@/public/images/oura/certificate-mockup.png";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function Compliance() {
	return (
		<div className="flex flex-col w-full">
			<LayoutLine>
				<div className="flex w-full">
					<div className="relative w-full h-full aspect-[16/9] bg-[#171717]">
						<DotPattern
							width={25}
							height={25}
							cx={1}
							cy={1}
							cr={1}
							className={cn(
								"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] w-full max-h-[70vh]",
							)}
						/>
						<Image
							alt="Oura Certificate"
							src={certificateMockup}
							draggable={false}
							width={1000}
							height={600}
							placeholder="blur"
							className="absolute right-0 mb-20 md:mb-10 -me-44 md:-me-52 md:transition-all md:duration-500 md:hover:scale-105"
						/>
						<div className="absolute left-0 top-0 flex flex-col justify-center items-start px-8 py-7">
							<span className="border border-white px-4 py-2 font-mono text-white text-xs bg-[#171717]">
								Certificate
							</span>
						</div>
						<div className="absolute left-0 bottom-0 flex flex-col justify-center items-start px-8 py-7">
							<Title className="text-2xl md:text-4xl text-start w-full">
								Stay Compliance.
								<br />
								Stay Safe.
							</Title>
							<div className="hidden md:flex flex-col w-full mt-6 md:mt-8 justify-start items-start">
								<div className="w-full max-w-sm flex justify-start">
									<p className="w-full font-light text-neutral-600 text-justify md:text-start leading-snug text-sm">
										Oura provides an official certificate upon completion to
										show your company has completed our security checks and
										meets compliance standards.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
