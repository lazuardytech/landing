"use client";

import HeroVideo from "@/components/block/ai/hero-video";
import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
	useEffect(() => {
		const elements = document.querySelectorAll(".bg-main");
		const neutralElements = document.querySelectorAll(".bg-neutral-200\\/40");
		const borderElements = document.querySelectorAll(".border-neutral-400");
		elements.forEach((el) => {
			el.classList.remove("bg-main");
			el.classList.add("bg-ai");
		});
		neutralElements.forEach((el) => {
			el.classList.remove("bg-neutral-200/40");
			el.classList.add("bg-neutral-200/0");
		});
		borderElements.forEach((el) => {
			el.classList.remove("border-neutral-400");
			el.classList.add("border-neutral-500");
		});
		return () => {
			elements.forEach((el) => {
				el.classList.remove("bg-ai");
				el.classList.add("bg-main");
			});
			neutralElements.forEach((el) => {
				el.classList.remove("bg-neutral-200/0");
				el.classList.add("bg-neutral-200/40");
			});
			borderElements.forEach((el) => {
				el.classList.remove("border-neutral-500");
				el.classList.add("border-neutral-400");
			});
		};
	}, []);

	return (
		<LayoutLine className="pt-[14vh] md:pt-[22vh]">
			<div className="w-full flex flex-col justify-center items-center px-8">
				<Title className="text-3xl md:text-5xl text-center w-full">
					Applied AI for Modern Business
				</Title>
				<div className="flex flex-col w-full mt-6 md:mt-8 justify-center items-center">
					<div className="w-full max-w-xl flex justify-center">
						<p className="w-full font-light text-neutral-600 text-center leading-snug text-sm">
							Join us in the journey of creating a better future with AI. We
							help business to train, implement, and apply AI to their
							real-world problems.
						</p>
					</div>
					<div className="w-full flex space-x-2 justify-center mt-6 md:mt-8">
						<Button size="lg" variant="link" asChild>
							<Link
								href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
								target="_blank"
								rel="noopener noreferrer"
							>
								Talk to Us
							</Link>
						</Button>
						<Button size="lg" variant="default" asChild>
							<Link href="/inquiry">Start an AI Project</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center mt-8 md:mt-0">
				<div className="flex w-full h-full aspect-video">
					<HeroVideo />
				</div>
			</div>
		</LayoutLine>
	);
}
