"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { customers as customerItems } from "@/lib/state";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const customers = customerItems.concat(customerItems).concat(customerItems);

export default function Customer() {
	return (
		<div className="flex flex-col w-full">
			<LayoutLine className="pt-14 md:pt-24 pb-4 px-8">
				<Title className="text-sm md:text-xl text-center">
					Trusted by amazing teams and companies
				</Title>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<CustomerItems />
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}

export function CustomerItems() {
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
				{customers.map((item) => (
					<CarouselItem key={item.name} className="basis-1/4 lg:basis-1/6">
						<div className="relative aspect-square flex items-center justify-center">
							<div className="relative w-full h-full">
								<Link
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
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
