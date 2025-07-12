"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { ouraCertifications as certificationItems } from "@/lib/state";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const certifications = certificationItems
	.concat(certificationItems)
	.concat(certificationItems);

export default function Certification() {
	return (
		<>
			<LayoutLine>
				<CertificationItems />
			</LayoutLine>
			<HorizontalBorder />
		</>
	);
}

export function CertificationItems() {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const timerRef = useRef(null);

	useEffect(() => {
		if (!api) return;

		timerRef.current = setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, 2000);

		return () => clearTimeout(timerRef.current);
	}, [api, current]);

	return (
		<Carousel setApi={setApi} className="select-none hover:cursor-pointer">
			<CarouselContent>
				{certifications.map((item, index) => (
					<CarouselItem
						key={`${item.name}-${index}`}
						className="basis-1/4 lg:basis-1/6"
					>
						<div className="relative aspect-square flex items-center justify-center">
							<div className="relative flex items-center w-16 h-full mb-2">
								<Link
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="transition-all duration-300 hover:scale-125 md:filter md:grayscale md:hover:filter-none"
								>
									<Image
										src={item.logo}
										alt={item.name}
										draggable={false}
										width={500}
										height={500}
										placeholder="blur"
									/>
								</Link>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
