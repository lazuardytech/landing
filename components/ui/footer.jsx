"use client";

import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { CompanyData } from "@/lib/config";
import Doto from "@/lib/fonts/doto";
import { navigations, socials } from "@/lib/state";
import { ArrowUpRight, LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {
	const pathname = usePathname();

	useEffect(() => {
		const header = document.getElementById("header");

		if (!header) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						header.style.transition = "transform 0.4s ease-in-out";
						header.style.transform = "translateY(-200%)";
					} else {
						header.style.transition = "transform 0.4s ease-in-out";
						header.style.transform = "translateY(0)";
					}
				});
			},
			{ threshold: 0.1 },
		);

		const target = document.getElementById("copyright-text");
		if (target) {
			observer.observe(target);
		}

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, []);

	return (
		<div className="flex flex-col w-full">
			<LayoutLine>
				<div className="grid grid-cols-2 md:grid-cols-6 w-full">
					<div className="flex flex-col w-full h-full col-span-4 border-r border-neutral-400 border-opacity-90">
						<div className="hidden md:grid grid-cols-2 w-full h-full border-b border-neutral-400 border-opacity-90">
							<div className="flex flex-col w-full p-8 justify-center items-center border-r border-neutral-400 border-opacity-90">
								<p
									className={`w-full font-bold text-xs md:text-sm text-black text-left leading-snug ${Doto.className}`}
								>
									{CompanyData.copyright.html}
								</p>
							</div>
							<div className="flex flex-col relative w-full p-8 justify-center items-center md:transition-colors md:duration-200 md:hover:bg-neutral-300">
								<p
									className={`w-full font-bold text-xs md:text-sm text-black text-left leading-snug ${Doto.className}`}
								>
									{CompanyData.address.html}
								</p>
								<Link
									href="https://maps.app.goo.gl/9p28RqNKNQJ3reYL8"
									target="_blank"
									rel="noopener noreferrer"
									className="flex absolute top-0 left-0 z-20 w-full h-full transition-opacity duration-200 opacity-0 hover:opacity-100"
								>
									<ArrowUpRight
										className="absolute top-0 right-0 text-black w-10 h-10 m-1 opacity-60"
										strokeWidth={0.8}
									/>
								</Link>
							</div>
						</div>
						<div className="grid grid-cols-3 w-full">
							<div
								id="copyright-text"
								className="flex flex-col w-full p-8 justify-center items-center col-span-2 border-r border-neutral-400 border-opacity-90"
							>
								<Title className="text-xs md:text-sm">
									{CompanyData.copyright.label} {CompanyData.legalName}.
								</Title>
							</div>
							<div className="flex flex-col w-full p-8">
								<Button
									size="sm"
									variant="link"
									className="justify-center px-0"
									asChild
								>
									<Link
										href="/legal/privacy-policy"
										className="text-center lowercase"
									>
										privacy policy
									</Link>
								</Button>
								<Button
									size="sm"
									variant="link"
									className="justify-center px-0"
									asChild
								>
									<Link
										href="/legal/terms-of-service"
										className="text-center lowercase"
									>
										terms of service
									</Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full p-8 border-r border-t md:border-t-0 border-neutral-400 border-opacity-90">
						<Title className="text-xl">Connect</Title>
						<div className="flex flex-col w-full mt-4">
							{socials.map((social) => (
								<Button
									key={social.name}
									size="sm"
									variant="link"
									className="text-left justify-start px-0"
									asChild
								>
									<Link
										href={social.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-left lowercase"
									>
										{social.name}
									</Link>
								</Button>
							))}
						</div>
					</div>
					<div className="flex flex-col w-full p-8 border-t md:border-t-0 border-neutral-400 border-opacity-90">
						<Title className="text-xl">Navigate</Title>
						<div className="flex flex-col w-full mt-4">
							{navigations.map((navigation, index) => (
								<Button
									key={navigation.name}
									size="sm"
									variant="link"
									className="text-left justify-start px-0"
									asChild
								>
									<Link
										href={navigation.link}
										target={navigation.target}
										rel={navigation.rel}
										className={`text-left lowercase ${pathname === navigation.link || (navigation.link === "/article" && pathname.startsWith("/article") && "underline")}`}
									>
										{navigation.name}
									</Link>
								</Button>
							))}
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine className="px-8 md:pb-8" />
		</div>
	);
}
