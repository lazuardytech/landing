"use client";

import HeroVideo from "@/components/block/home/hero-video";
import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function Hero() {
	const phrases = useMemo(
		() => [
			"",
			"strategy.",
			"solutions.",
			"workflow.",
			"process.",
			"automation.",
			"product.",
			"brand.",
			"business.",
			"agency.",
			"plan.",
		],
		[],
	);
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [typedText, setTypedText] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	const [baseText, setBaseText] = useState("");
	const basePhrase = "because you do deserve better ";
	const typingDelay = 100;
	const deletingDelay = 50;
	const pauseDelay = 2000;

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	useEffect(() => {
		let i = 0;
		const typeBaseText = () => {
			if (i <= basePhrase.length) {
				setBaseText(basePhrase.slice(0, i));
				i++;
				setTimeout(typeBaseText, 47); // Changed from typingDelay to 50
			}
		};
		typeBaseText();
	}, []);

	useEffect(() => {
		const currentPhrase = phrases[currentPhraseIndex];

		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					if (typedText === currentPhrase) {
						setTimeout(() => setIsDeleting(true), pauseDelay);
						return;
					}
					setTypedText(currentPhrase.substring(0, typedText.length + 1));
				} else {
					if (typedText === "") {
						setIsDeleting(false);
						setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
						return;
					}
					setTypedText(currentPhrase.substring(0, typedText.length - 1));
				}
			},
			isDeleting ? deletingDelay : typingDelay,
		);

		return () => clearTimeout(timeout);
	}, [typedText, isDeleting, currentPhraseIndex, phrases]);

	return (
		<LayoutLine className="pt-[14vh] md:pt-[22vh] px-8">
			<div className="block w-full min-h-[6rem] lg:min-h-[8rem]">
				<Title className="text-3xl md:text-6xl text-justify">
					{baseText}
					<span>{typedText}</span>
					{showCursor ? "|" : ""}
				</Title>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-2 md:mt-8">
				<div className="w-full flex space-x-2 justify-start">
					<Button size="lg" variant="default" asChild>
						<Link href="/inquiry">Start a Project</Link>
					</Button>
					<Button size="lg" variant="link" asChild>
						<Link
							href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							Talk to Us
						</Link>
					</Button>
				</div>
				<div className="w-full flex justify-end mt-8 md:mt-0">
					<Paragraph className="text-sm">
						We&apos;re the most respected tech firm in Central Java that gets
						your challenges and uses the best tech in industries to help you.
					</Paragraph>
				</div>
			</div>
			<div className="flex w-full h-full aspect-video mt-10 md:mt-2">
				<HeroVideo />
			</div>
		</LayoutLine>
	);
}
