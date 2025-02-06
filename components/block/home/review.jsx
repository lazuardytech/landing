import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import ezra from "@/public/images/mention/ezra.png";
import handoko from "@/public/images/mention/handoko.png";
import yunius from "@/public/images/mention/yunius.png";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Review() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLineHeader title="Notable mentions" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-3 w-full">
					<div className="flex flex-col relative w-full p-8 border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
						<Title className="text-lg">Ezra Lazuardy</Title>
						<p className="w-full font-regular text-sm text-neutral-600 text-justify leading-snug mt-2">
							Founder of Lazuardy
						</p>
						<Title className="text-2xl mt-4 md:mt-8">&quot;</Title>
						<Paragraph className="text-sm">
							Lazuardy was built with a mission to help any business, by any
							scale, to perform better than before.
						</Paragraph>
						<Image
							src={ezra}
							alt="Ezra Lazuardy"
							width={500}
							height={500}
							placeholder="blur"
							className="absolute top-0 right-0 w-24 md:w-28 h-24 md:h-28 border border-t-0 border-neutral-400 border-opacity-90 z-10"
						/>
						<Link
							href="https://www.linkedin.com/in/ezralazuardy/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-center items-center absolute top-0 left-0 z-20 w-full h-full bg-neutral-950 transition-opacity duration-200 opacity-0 hover:opacity-60"
						>
							<LinkIcon className="text-white w-12 h-12" strokeWidth={1.4} />
						</Link>
					</div>
					<div className="flex flex-col relative w-full p-8 border-r border-b md:border-b-0 border-neutral-400 border-opacity-90 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="text-lg">Handoko Wibowo</Title>
						<p className="w-full font-regular text-sm text-neutral-600 text-justify leading-snug mt-2">
							Founder of Omah Tani
						</p>
						<Title className="text-2xl mt-4 md:mt-8">&quot;</Title>
						<Paragraph className="text-sm">
							I know they&apos;re good because they really know what
							they&apos;re doing. And the good thing is, it&apos;s their
							passion.
						</Paragraph>
						<Image
							src={handoko}
							alt="Handoko Wibowo"
							width={500}
							height={500}
							placeholder="blur"
							className="absolute top-0 right-0 w-24 md:w-28 h-24 md:h-28 border border-t-0 border-neutral-400 border-opacity-90 z-10"
						/>
						<Link
							href="https://www.google.com/search?q=Handoko+Wibowo"
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-center items-center absolute top-0 left-0 z-20 w-full h-full bg-neutral-950 transition-opacity duration-200 opacity-0 hover:opacity-60"
						>
							<LinkIcon className="text-white w-12 h-12" strokeWidth={1.4} />
						</Link>
					</div>
					<div className="flex flex-col relative w-full p-8 justify-center items-center md:transition-colors md:duration-200 md:hover:bg-neutral-300">
						<Title className="text-lg">Yunius Mujianto</Title>
						<p className="w-full font-regular text-sm text-neutral-600 text-justify leading-snug mt-2">
							Professional Designer
						</p>
						<Title className="text-2xl mt-4 md:mt-8">&quot;</Title>
						<Paragraph className="text-sm">
							I never met a team that can deliver the project so perfectly
							before. Simple concept, with elegant closing.
						</Paragraph>
						<Image
							src={yunius}
							alt="Yunius Mujianto"
							width={500}
							height={500}
							placeholder="blur"
							className="absolute top-0 right-0 w-24 md:w-28 h-24 md:h-28 border border-t-0 border-neutral-400 border-opacity-90 z-10"
						/>
						<Link
							href="https://www.yuniusmujianto.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-center items-center absolute top-0 left-0 z-20 w-full h-full bg-neutral-950 transition-opacity duration-200 opacity-0 hover:opacity-60"
						>
							<LinkIcon className="text-white w-12 h-12" strokeWidth={1.4} />
						</Link>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
