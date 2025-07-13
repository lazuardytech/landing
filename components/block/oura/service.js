import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";

const features = [
	{
		title: "VA",
		description:
			"Audit to check if your system meets security standards and policies.",
	},
	{
		title: "VAPT",
		description:
			"Simulate real attacks to uncover system flaws before hackers do via VAPT.",
	},
	{
		title: "Digital Forensics",
		description:
			"Investigate breaches and trace digital evidence with precision.",
	},
	{
		title: "SOC & Monitoring",
		description:
			"Our SOC monitor, detect, and respond to threats in real-time.",
	},
];

export default function Service() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLine>
				<div className="w-full flex flex-col justify-center items-center mt-16 pb-8 px-8">
					<Title className="text-2xl md:text-4xl text-center w-full">
						Built for Mission-Critical Defense
					</Title>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<div className="grid grid-cols-2 md:grid-cols-4 w-full">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={`flex flex-col relative w-full p-8 border-r border-neutral-400 border-opacity-90 border-b ${index === features.length - 1 ? "md:border-r-0" : ""} ${index < features.length - 2 ? "" : "border-b-0"} md:border-b-0`}
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
