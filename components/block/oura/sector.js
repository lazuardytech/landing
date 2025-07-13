import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { Marquee } from "@/components/ui/marquee";
import Doto from "@/lib/fonts/doto";
import { generateRandomKey } from "@/lib/utils";

const sectors = [
	"Finance",
	"Banking",
	"Insurance",
	"Healthcare",
	"Telecommunications",
	"E-commerce",
	"Retail",
	"Government",
	"Defense",
	"Education",
	"Energy",
	"Transportation",
	"Logistics",
	"Manufacturing",
	"Technology",
	"Legal Services",
	"Media & Entertainment",
	"Hospitality",
	"Real Estate",
	"Aerospace",
];

export default function Sectors() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLine>
				<div className="relative py-8 flex h-auto w-full flex-col items-center justify-center overflow-hidden">
					<Marquee pauseOnHover className="[--duration:30s]">
						{sectors.map((label) => (
							<SectorItem
								key={`${label}${generateRandomKey()}`}
								label={label}
							/>
						))}
					</Marquee>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}

export function SectorItem({ label }) {
	return (
		<h1
			className={`font-bold text-lg md:text-xl text-black text-left leading-snug uppercase ${Doto.className}`}
		>
			{label}
		</h1>
	);
}
