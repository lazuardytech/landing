import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import mapPoint from "@/public/images/about/map-point.png";
import map from "@/public/images/about/map.png";
import Image from "next/image";

export default function Mission() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLineHeader title="Our Mission" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<div className="flex flex-col w-full p-8 pb-4 md:pb-8 border-r border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-400">
						<Paragraph className="text-sm">
							Lazuardy is a team full of visionary engineers, researchers, and
							professionals that work together to help business grow bigger
							through bleeding edge technology.
						</Paragraph>
						<Title className="text-lg mt-8">Business Presence</Title>
						<div className="flex space-x-4 md:space-x-8 mt-4">
							<p className="flex font-light text-neutral-600 text-justify leading-snug text-xs md:text-sm">
								🇮🇩 Indonesia
							</p>
							<p className="flex font-light text-neutral-600 text-justify leading-snug text-xs md:text-sm">
								🇸🇬 Singapore
							</p>
							<p className="flex font-light text-neutral-600 text-justify leading-snug text-xs md:text-sm">
								🇺🇸 United States
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center w-full relative">
						<Image
							src={map}
							alt="Map"
							draggable={false}
							width={960}
							height={540}
							placeholder="blur"
							className="flex w-full h-full select-none object-cover z-10"
						/>
						<Image
							src={mapPoint}
							alt="Map Point"
							draggable={false}
							width={960}
							height={540}
							placeholder="blur"
							className="absolute top-0 left-0 w-full h-full select-none object-cover animate-pulse z-20"
						/>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
