import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Image from "next/image";

export default function ArticleCover({ article }) {
	return (
		<>
			<HorizontalBorder />
			<LayoutLine>
				<div className="flex w-full aspect-video">
					<Image
						src={article.coverImageUrl}
						alt={article.title}
						width={720}
						height={405}
						draggable={false}
						className="select-none object-cover w-full h-full aspect-video"
					/>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</>
	);
}
