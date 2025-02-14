import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";

export default function Hook() {
	const features = [
		{
			title: "Automate Repetitive Tasks",
			description:
				"Save time and reduce costs by letting AI handle routine work.",
		},
		{
			title: "Enhance Decision Making",
			description: "Use AI-driven insights to make smarter business moves.",
		},
		{
			title: "Improve Customer Experience",
			description: "Personalize interactions and boost engagement with AI.",
		},
		{
			title: "Stay Ahead From Any Competitors",
			description:
				"Businesses leveraging AI gain a strategic edge in their industry.",
		},
	];

	return (
		<div className="flex flex-col w-full relative">
			<LayoutLine>
				<div className="w-full flex flex-col justify-center items-center mt-16 pb-8 px-8">
					<Title className="text-2xl md:text-4xl text-center w-full md:max-w-2xl">
						Thousands of business are starting to adopt AI
					</Title>
					<div className="flex flex-col w-full mt-6 justify-center items-center">
						<div className="w-full max-w-xl flex justify-center">
							<p className="w-full font-light text-neutral-600 text-center leading-snug text-sm">
								They&apos;re not just FOMO. They&apos;re being smart. They know
								that AI is now a necessity for their business to stay
								competitive.
							</p>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-4 w-full">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={`flex flex-col relative w-full p-8 border-r border-neutral-400 border-opacity-90 ${index === features.length - 1 ? "md:border-r-0" : "border-b md:border-b-0"}`}
						>
							<Title className="text-md md:text-lg text-center md:text-start">
								{feature.title}
							</Title>
							<Paragraph className="hidden md:flex text-sm mt-4 md:mt-6">
								{feature.description}
							</Paragraph>
						</div>
					))}
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
