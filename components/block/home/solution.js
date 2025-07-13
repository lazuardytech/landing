"use client";

import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { Marquee } from "@/components/ui/marquee";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import lazuardyAi from "@/public/images/logo/ai.png";
import lazuardyByte from "@/public/images/logo/byte.png";
import lazuardyStudio from "@/public/images/logo/studio.png";
import lazuardyOura from "@/public/images/logo/oura.png";
import solution1 from "@/public/images/solution/solution-1.png";
import solution2 from "@/public/images/solution/solution-2.png";
import solution3 from "@/public/images/solution/solution-3.png";
import solution7 from "@/public/images/solution/solution-7.png";
import solution8 from "@/public/images/solution/solution-8.png";
import solution9 from "@/public/images/solution/solution-9.png";
import solution10 from "@/public/images/solution/solution-10.png";
import solution11 from "@/public/images/solution/solution-11.png";
import solution12 from "@/public/images/solution/solution-12.png";
import solution13 from "@/public/images/solution/solution-13.png";
import solution14 from "@/public/images/solution/solution-14.png";
import solution15 from "@/public/images/solution/solution-15.png";
import {
	AppWindow,
	Apple,
	Brain,
	Bug,
	Cloud,
	Figma,
	Shield,
	Speech,
	SquareFunction,
	Swords,
	UserRoundSearch,
	View,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useRef } from "react";

const lazuardyByteImages = [
	{
		name: "Lazuardy Byte 1",
		img: solution1,
	},
	{
		name: "Lazuardy Byte 2",
		img: solution2,
	},
	{
		name: "Lazuardy Byte 3",
		img: solution3,
	},
];

const lazuardyOuraImages = [
	{
		name: "Lazuardy Oura 1",
		img: solution13,
	},
	{
		name: "Lazuardy Oura 2",
		img: solution14,
	},
	{
		name: "Lazuardy Oura 3",
		img: solution15,
	},
];

const lazuardyStudioImages = [
	{
		name: "Lazuardy Studio 1",
		img: solution7,
	},
	{
		name: "Lazuardy Studio 2",
		img: solution8,
	},
	{
		name: "Lazuardy Studio 3",
		img: solution9,
	},
];

const lazuardyAiImages = [
	{
		name: "Lazuardy AI 1",
		img: solution10,
	},
	{
		name: "Lazuardy AI 2",
		img: solution11,
	},
	{
		name: "Lazuardy AI 3",
		img: solution12,
	},
];

export default function Solution() {
	const lazuardyByteDiv = useRef(null);
	const lazuardyByteLogo = useRef(null);
	const lazuardyOuraDiv = useRef(null);
	const lazuardyOuraLogo = useRef(null);
	const lazuardyStudioDiv = useRef(null);
	const lazuardyStudioLogo = useRef(null);
	const lazuardyAiDiv = useRef(null);
	const lazuardyAiLogo = useRef(null);

	const showClass = "md:opacity-100";
	const showClass2 = "md:opacity-90";
	const hideClass = "md:opacity-20";
	const hideClass2 = "md:opacity-20";
	const threshold = 0.6;

	useEffect(() => {
		const _lazuardyByteDiv = lazuardyByteDiv?.current;
		const _lazuardyByteLogo = lazuardyByteLogo?.current;
		const _lazuardyOuraDiv = lazuardyOuraDiv?.current;
		const _lazuardyOuraLogo = lazuardyOuraLogo?.current;
		const _lazuardyStudioDiv = lazuardyStudioDiv?.current;
		const _lazuardyStudioLogo = lazuardyStudioLogo?.current;
		const _lazuardyAiDiv = lazuardyAiDiv?.current;
		const _lazuardyAiLogo = lazuardyAiLogo?.current;

		if (
			!_lazuardyByteDiv ||
			!_lazuardyByteLogo ||
			!_lazuardyOuraDiv ||
			!_lazuardyOuraLogo ||
			!_lazuardyStudioDiv ||
			!_lazuardyStudioLogo ||
			!_lazuardyAiDiv ||
			!_lazuardyAiLogo
		)
			return;

		const _lazuardyByteDivObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						_lazuardyByteLogo.classList.add(showClass);
						_lazuardyByteLogo.classList.remove(hideClass);
						_lazuardyByteDiv.classList.add(showClass2);
						_lazuardyByteDiv.classList.remove(hideClass2);

						_lazuardyOuraLogo.classList.add(hideClass);
						_lazuardyOuraLogo.classList.remove(showClass);
						_lazuardyOuraDiv.classList.add(hideClass2);
						_lazuardyOuraDiv.classList.remove(showClass2);

						_lazuardyStudioLogo.classList.add(hideClass);
						_lazuardyStudioLogo.classList.remove(showClass);
						_lazuardyStudioDiv.classList.add(hideClass2);
						_lazuardyStudioDiv.classList.remove(showClass2);

						_lazuardyAiLogo.classList.add(hideClass);
						_lazuardyAiLogo.classList.remove(showClass);
						_lazuardyAiDiv.classList.add(hideClass2);
						_lazuardyAiDiv.classList.remove(showClass2);
					}
				});
			},
			{ threshold: threshold },
		);

		const _lazuardyOuraDivObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						_lazuardyByteLogo.classList.add(hideClass);
						_lazuardyByteLogo.classList.remove(showClass);
						_lazuardyByteDiv.classList.add(hideClass2);
						_lazuardyByteDiv.classList.remove(showClass2);

						_lazuardyOuraLogo.classList.add(showClass);
						_lazuardyOuraLogo.classList.remove(hideClass);
						_lazuardyOuraDiv.classList.add(showClass2);
						_lazuardyOuraDiv.classList.remove(hideClass2);

						_lazuardyStudioLogo.classList.add(hideClass);
						_lazuardyStudioLogo.classList.remove(showClass);
						_lazuardyStudioDiv.classList.add(hideClass2);
						_lazuardyStudioDiv.classList.remove(showClass2);

						_lazuardyAiLogo.classList.add(hideClass);
						_lazuardyAiLogo.classList.remove(showClass);
						_lazuardyAiDiv.classList.add(hideClass2);
						_lazuardyAiDiv.classList.remove(showClass2);
					}
				});
			},
			{ threshold: threshold },
		);

		const _lazuardyStudioDivObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						_lazuardyByteLogo.classList.add(hideClass);
						_lazuardyByteLogo.classList.remove(showClass);
						_lazuardyByteDiv.classList.add(hideClass2);
						_lazuardyByteDiv.classList.remove(showClass2);

						_lazuardyOuraLogo.classList.add(hideClass);
						_lazuardyOuraLogo.classList.remove(showClass);
						_lazuardyOuraDiv.classList.add(hideClass2);
						_lazuardyOuraDiv.classList.remove(showClass2);

						_lazuardyStudioLogo.classList.add(showClass);
						_lazuardyStudioLogo.classList.remove(hideClass);
						_lazuardyStudioDiv.classList.add(showClass2);
						_lazuardyStudioDiv.classList.remove(hideClass2);

						_lazuardyAiLogo.classList.add(hideClass);
						_lazuardyAiLogo.classList.remove(showClass);
						_lazuardyAiDiv.classList.add(hideClass2);
						_lazuardyAiDiv.classList.remove(showClass2);
					}
				});
			},
			{ threshold: threshold },
		);

		const _lazuardyAiDivObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						_lazuardyByteLogo.classList.add(hideClass);
						_lazuardyByteLogo.classList.remove(showClass);
						_lazuardyByteDiv.classList.add(hideClass2);
						_lazuardyByteDiv.classList.remove(showClass2);

						_lazuardyOuraLogo.classList.add(hideClass);
						_lazuardyOuraLogo.classList.remove(showClass);
						_lazuardyOuraDiv.classList.add(hideClass2);
						_lazuardyOuraDiv.classList.remove(showClass2);

						_lazuardyStudioLogo.classList.add(hideClass);
						_lazuardyStudioLogo.classList.remove(showClass);
						_lazuardyStudioDiv.classList.add(hideClass2);
						_lazuardyStudioDiv.classList.remove(showClass2);

						_lazuardyAiLogo.classList.add(showClass);
						_lazuardyAiLogo.classList.remove(hideClass);
						_lazuardyAiDiv.classList.add(showClass2);
						_lazuardyAiDiv.classList.remove(hideClass2);
					}
				});
			},
			{ threshold: threshold },
		);

		_lazuardyByteDivObserver.observe(_lazuardyByteDiv);
		_lazuardyOuraDivObserver.observe(_lazuardyOuraDiv);
		_lazuardyStudioDivObserver.observe(_lazuardyStudioDiv);
		_lazuardyAiDivObserver.observe(_lazuardyAiDiv);

		return () => {
			if (_lazuardyByteDiv)
				_lazuardyByteDivObserver.unobserve(_lazuardyByteDiv);
			if (_lazuardyOuraDiv)
				_lazuardyOuraDivObserver.unobserve(_lazuardyOuraDiv);
			if (_lazuardyStudioDivObserver)
				_lazuardyStudioDivObserver.unobserve(_lazuardyStudioDiv);
			if (_lazuardyAiDivObserver)
				_lazuardyAiDivObserver.unobserve(_lazuardyAiDiv);
		};
	}, []);

	return (
		<div className="flex flex-col w-full relative">
			<div className="flex flex-col w-full items-center justify-center md:sticky md:top-8 z-30">
				<div className="grid grid-cols-2 w-full pt-20 pb-4 md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 select-none backdrop-filter backdrop-blur-lg bg-neutral-200/40">
					<div className="flex w-full col-span-2 px-8">
						<Title className="text-2xl md:text-5xl">
							What You&apos;ve Been Looking For
						</Title>
					</div>
				</div>
				<HorizontalBorder className="flex w-full" />
				<div className="hidden md:flex flex-col w-full md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 select-none bg-main">
					<div className="grid grid-cols-4 w-full">
						<div className="flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
							<SolutionDivisionLogo
								ref={lazuardyByteLogo}
								src={lazuardyByte}
								alt="Lazuardy Byte"
							/>
						</div>
						<div className="relative flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
							<SolutionDivisionLogo
								ref={lazuardyOuraLogo}
								src={lazuardyOura}
								alt="Lazuardy Oura"
							/>
							<div className="absolute top-0 right-0 py-2 px-4 text-red-500 text-xs">
								New!
							</div>
						</div>
						<div className="flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
							<SolutionDivisionLogo
								ref={lazuardyStudioLogo}
								src={lazuardyStudio}
								alt="Lazuardy Studio"
							/>
						</div>
						<div className="flex flex-col w-full justify-center items-center p-4">
							<SolutionDivisionLogo
								ref={lazuardyAiLogo}
								src={lazuardyAi}
								alt="Lazuardy AI"
							/>
						</div>
					</div>
				</div>
				<HorizontalBorder className="hidden md:flex w-full" />
			</div>

			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="flex flex-col w-full border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
						<div
							ref={lazuardyByteDiv}
							className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20"
						>
							<SolutionServiceGallery
								logo={lazuardyByte}
								images={lazuardyByteImages}
							/>
						</div>
					</div>
					<div className="flex flex-col w-full justify-center items-center p-10">
						<Paragraph className="text-sm">
							At <span className="font-semibold">Lazuardy Byte</span>, we
							develop custom software, cloud solutions, and perform technology
							consulting. tailored to your needs.
						</Paragraph>
						<Paragraph className="text-sm mt-4">
							Whether automating tasks or optimizing infrastructure, we make
							technology simple and effective.
						</Paragraph>
						<SolutionServiceItem
							Icon={AppWindow}
							label="Software Engineering"
							className="mt-8"
						/>
						<SolutionServiceItem
							Icon={Cloud}
							label="Cloud Infrastructure"
							className="mt-4"
						/>
						<SolutionServiceItem
							Icon={Speech}
							label="Technology Consultation"
							className="mt-4"
						/>
						<div className="flex space-x-4 mt-8 w-full">
							<Button size="default" variant="default" asChild>
								<Link href="/inquiry">Start Project with Byte</Link>
							</Button>
							<Button size="default" variant="link" asChild>
								<Link href="/contact">Learn More</Link>
							</Button>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />

			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="flex flex-col w-full justify-center items-center p-10 border-r border-neutral-400 border-opacity-90">
						<Paragraph className="text-sm">
							At <span className="font-semibold">Lazuardy Oura</span>, we secure
							digital ecosystems through cybersecurity services, penetration
							testing, and continuous monitoring.
						</Paragraph>
						<Paragraph className="text-sm mt-4">
							From identifying system vulnerabilities to managing security
							operations, we help you stay one step ahead, protecting what
							matters most.
						</Paragraph>
						<SolutionServiceItem
							Icon={Bug}
							label="Vulnerability Assessment"
							className="mt-6"
						/>
						<SolutionServiceItem
							Icon={Swords}
							label="Penetration Testing"
							className="mt-4"
						/>
						<SolutionServiceItem
							Icon={Shield}
							label="SOC & Monitoring"
							className="mt-4"
						/>
						<div className="flex space-x-4 mt-8 w-full">
							<Button size="default" variant="default" asChild>
								<Link href="/inquiry">Start Project with Oura</Link>
							</Button>
							<Button size="default" variant="link" asChild>
								<Link href="/oura">Learn More</Link>
							</Button>
						</div>
					</div>
					<div
						ref={lazuardyOuraDiv}
						className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20 border-b md:border-b-0 border-neutral-400 border-opacity-90 order-first md:order-last"
					>
						<SolutionServiceGallery
							logo={lazuardyOura}
							images={lazuardyOuraImages}
						/>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />

			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="flex flex-col w-full border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
						<div
							ref={lazuardyStudioDiv}
							className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20"
						>
							<SolutionServiceGallery
								logo={lazuardyStudio}
								images={lazuardyStudioImages}
							/>
						</div>
					</div>
					<div className="flex flex-col w-full p-10 justify-center items-center">
						<Paragraph className="text-sm">
							At <span className="font-semibold">Lazuardy Studio</span>, we
							craft UI/UX designs, brand identities, and digital experiences
							that elevate your business.
						</Paragraph>
						<Paragraph className="text-sm mt-4">
							From intuitive interfaces to compelling visuals, we ensure every
							design is both functional and engaging.
						</Paragraph>
						<SolutionServiceItem
							Icon={Figma}
							label="UI/UX Designing"
							className="mt-6"
						/>
						<SolutionServiceItem
							Icon={UserRoundSearch}
							label="UX Research"
							className="mt-4"
						/>
						<SolutionServiceItem
							Icon={Apple}
							label="Brand Identity"
							className="mt-4"
						/>
						<div className="flex space-x-4 mt-8 w-full">
							<Button size="default" variant="default" asChild>
								<Link href="/inquiry">Start Project with Studio</Link>
							</Button>
							<Button size="default" variant="link" asChild>
								<Link href="/contact">Learn More</Link>
							</Button>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />

			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="flex flex-col w-full justify-center items-center p-10 border-r border-neutral-400 border-opacity-90">
						<Paragraph className="text-sm">
							At <span className="font-semibold">Lazuardy AI</span>, we
							integrate AI, machine learning, and automation to make businesses
							smarter.
						</Paragraph>
						<Paragraph className="text-sm mt-4">
							From predictive analytics to intelligent chatbots, we build AI
							solutions that enhance efficiency and decision-making.
						</Paragraph>
						<SolutionServiceItem
							Icon={Brain}
							label="AI Integration"
							className="mt-6"
						/>
						<SolutionServiceItem
							Icon={SquareFunction}
							label="AI Research"
							className="mt-4"
						/>
						<SolutionServiceItem
							Icon={View}
							label="Computer Vision"
							className="mt-4"
						/>
						<div className="flex space-x-4 mt-8 w-full">
							<Button size="default" variant="default" asChild>
								<Link href="/inquiry">Start an AI Project</Link>
							</Button>
							<Button size="default" variant="link" asChild>
								<Link href="/ai">Learn More</Link>
							</Button>
						</div>
					</div>
					<div
						ref={lazuardyAiDiv}
						className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20 border-b md:border-b-0 border-neutral-400 border-opacity-90 order-first md:order-last"
					>
						<SolutionServiceGallery
							logo={lazuardyAi}
							images={lazuardyAiImages}
						/>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}

export const SolutionDivisionLogo = forwardRef(({ src, alt }, ref) => (
	<Image
		ref={ref}
		src={src}
		alt={alt}
		draggable={false}
		width={400}
		height={200}
		placeholder="blur"
		className="flex w-16 md:w-24 h-full select-none object-fit transition-opacity duration-200 opacity-100 md:opacity-20"
	/>
));
SolutionDivisionLogo.displayName = "SolutionDivisionLogo";

export function SolutionServiceItem({ Icon, label, className }) {
	return (
		<div className={`flex w-full space-x-4 ${className}`}>
			<Icon className="w-5 h-5" strokeWidth={1.6} />
			<p className="w-full font-regular text-sm text-black text-justify leading-snug mt-[0.05rem]">
				{label}
			</p>
		</div>
	);
}

export function SolutionServiceGallery({ logo, images }) {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden -mb-4 z-20">
			<div className="flex flex-row gap-4 [perspective:300px]">
				<Marquee
					className="h-[40vh] md:h-[70vh] justify-center overflow-hidden [--duration:20s] [--gap:1rem]"
					vertical
					style={{
						transform:
							"translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
					}}
				>
					{images.map((data) => (
						<Image
							key={data.name}
							src={data.img}
							alt={data.name}
							width={400}
							height={600}
							placeholder="blur"
							loading="eager"
							className="select-none mx-auto w-2/5 md:w-2/3 h-full border border-neutral-400 shadow-2xl"
						/>
					))}
				</Marquee>
			</div>
			<div className="absolute md:hidden top-0 left-0">
				<div className="flex w-full h-full items-center justify-center">
					<div className="flex mt-8 ml-8">
						<Image
							src={logo}
							alt={"Logo"}
							draggable={false}
							width={400}
							height={200}
							placeholder="blur"
							className="flex w-20 h-full select-none object-fit transition-opacity duration-200 opacity-100 md:opacity-20"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
