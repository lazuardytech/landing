"use client";

import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { useEffect } from "react";

export default function LegalText({ content }) {
	useEffect(() => {
		const links = document.querySelectorAll(".content a");
		links.forEach((link) => {
			link.setAttribute("rel", "noopener noreferrer");
			link.setAttribute("target", "_blank");
		});
	}, [content]);

	return (
		<>
			<HorizontalBorder />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-6 w-full">
					<div className="flex w-full" />
					<div
						className="content w-full col-span-4 text-neutral-600 leading-snug font-light text-sm text-justify md:border-l md:border-r border-neutral-400 border-opacity-90 pb-5"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<div className="flex w-full" />
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</>
	);
}
