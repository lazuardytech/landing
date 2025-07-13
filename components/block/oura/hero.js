"use client";

import HeroVideo from "@/components/block/oura/hero-video";
import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import oura from "@/public/images/logo/oura.svg";

export default function Hero() {
	useEffect(() => {
		const elements = document.querySelectorAll(".bg-main");
		const neutralElements = document.querySelectorAll(".bg-neutral-200\\/40");
		const borderElements = document.querySelectorAll(".border-neutral-400");
		const buttonMainElements = document.querySelectorAll(".btn-main");
		const textPrimaryElements = document.querySelectorAll(".text-primary");
		const textTitleElements = document.querySelectorAll(".text-black");
		const textParagraphElements =
			document.querySelectorAll(".text-neutral-600");
		elements.forEach((el) => {
			el.classList.remove("bg-main");
			el.classList.add("bg-oura");
		});
		neutralElements.forEach((el) => {
			el.classList.remove("bg-neutral-200/40");
			el.classList.add("bg-neutral-200/0");
		});
		borderElements.forEach((el) => {
			el.classList.remove("border-neutral-400");
			el.classList.add("border-neutral-500");
		});
		buttonMainElements.forEach((el) => {
			el.classList.remove(
				"transition-colors",
				"duration-300",
				"bg-zinc-700",
				"hover:bg-zinc-800",
			);
			el.classList.add(
				"transition-colors",
				"duration-300",
				"bg-zinc-700",
				"hover:bg-zinc-800",
			);
		});
		textPrimaryElements.forEach((el) => {
			el.classList.remove("transition-colors", "duration-500", "text-primary");
			el.classList.add("transition-colors", "duration-500", "text-white");
		});
		textTitleElements.forEach((el) => {
			el.classList.remove("transition-colors", "duration-500", "text-black");
			el.classList.add("transition-colors", "duration-500", "text-white");
		});
		textParagraphElements.forEach((el) => {
			el.classList.remove(
				"transition-colors",
				"duration-500",
				"text-neutral-600",
			);
			el.classList.add("transition-colors", "duration-500", "text-neutral-300");
		});

		return () => {
			elements.forEach((el) => {
				el.classList.remove("bg-oura");
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
			buttonMainElements.forEach((el) => {
				el.classList.remove("bg-zinc-700", "hover:bg-zinc-800");
			});
			textPrimaryElements.forEach((el) => {
				el.classList.remove("transition-colors", "duration-500", "text-white");
				el.classList.add("transition-colors", "duration-500", "text-primary");
			});
			textTitleElements.forEach((el) => {
				el.classList.remove("transition-colors", "duration-500", "text-white");
				el.classList.add("transition-colors", "duration-500", "text-black");
			});
			textParagraphElements.forEach((el) => {
				el.classList.remove(
					"transition-colors",
					"duration-500",
					"text-neutral-300",
				);
				el.classList.add(
					"transition-colors",
					"duration-500",
					"text-neutral-600",
				);
			});
		};
	}, []);

	return (
		<div className="flex flex-col w-full relative">
			<LayoutLine className="pt-[11vh] md:pt-[17vh] pb-10 md:pb-12">
				<div className="w-full flex flex-col justify-center items-center px-8">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className="flex min-w-20 w-20 h-auto select-none text-white"
					>
						<Image
							src={oura}
							draggable={false}
							alt="Oura"
							width={400}
							height={200}
							className="text-white"
						/>
					</motion.div>
					<Title className="text-4xl md:text-5xl text-center w-full mt-8">
						Protect what matters the most
					</Title>
					<div className="flex flex-col w-full mt-6 justify-center items-center">
						<div className="w-full max-w-xl flex justify-center">
							<p className="w-full font-light text-neutral-600 text-center leading-snug text-sm">
								Cyberattacks evolve. So do we. Oura brings offensive and
								defensive security through real-world pentesting, continuous
								threat detection, and smart response.
							</p>
						</div>
						<div className="w-full flex space-x-2 justify-center mt-6">
							<Button size="lg" variant="link" asChild>
								<Link
									href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
									target="_blank"
									rel="noopener noreferrer"
								>
									Talk to Us
								</Link>
							</Button>
							<Button size="lg" variant="default" className="btn-main" asChild>
								<Link href="/inquiry">Protect Now</Link>
							</Button>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<div className="w-full flex justify-center">
					<div className="flex w-full h-full aspect-video">
						<HeroVideo />
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder className="z-40" />
		</div>
	);
}
