import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";

const timelines = [
	{
		title: "1. Consult",
		description:
			"We listen and analyze all of your needs, specs, and requirements. It's free! no commitment needed.",
	},
	{
		title: "2. Propose",
		description:
			"Based on the consultation, we do the research, planning, and propose on what you really needs.",
	},
	{
		title: "3. Execute",
		description:
			"After the proposal and payment term are settled, we start to execute and develop our plan, with efficiency in mind.",
	},
	{
		title: "4. Maintain",
		description:
			"We provide an ongoing maintenance and support for your project or product to keep it up-to-date.",
	},
];

export default function Timeline() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLineHeader title="How We Work" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-4 w-full">
					{timelines.map((timeline, index) => (
						<div
							key={timeline.title}
							className={`flex flex-col relative w-full p-8 ${index < timelines.length - 1 ? "border-r border-b md:border-b-0 border-neutral-400 border-opacity-90" : ""}`}
						>
							<Title className="text-lg md:text-xl">{timeline.title}</Title>
							<Paragraph className="text-xs mt-4">
								{timeline.description}
							</Paragraph>
						</div>
					))}
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
