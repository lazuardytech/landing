import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import {
	FileCheck2,
	FileText,
	MessageCircleWarning,
	PackageSearch,
} from "lucide-react";

const features = [
	{
		icon: <FileText className="w-5 h-5 text-white" />,
		title: "Report",
		description:
			"We deliver detailed reports that highlight findings, risks, and practical recommendations.",
	},
	{
		icon: <PackageSearch className="w-5 h-5 text-white" />,
		title: "Procedure",
		description:
			"We provide clear, actionable procedures to effectively handle common cybersecurity incidents.",
	},
	{
		icon: <FileCheck2 className="w-5 h-5 text-white" />,
		title: "Compliance",
		description:
			"We help you align with industry standards and security frameworks easier, faster, and audit-ready.",
	},
	{
		icon: <MessageCircleWarning className="w-5 h-5 text-white" />,
		title: "Complaints",
		description:
			"We offer a structured complaint system to escalate and resolve cybersecurity concerns transparentlys.",
	},
];

export default function Highlight() {
	return (
		<div className="flex flex-col w-full relative">
			<LayoutLine>
				<div className="w-full flex flex-col justify-center items-center mt-16 pb-8 px-8">
					<Title className="text-2xl md:text-4xl text-center w-full">
						Handled by Those Who’ve Seen the Worst
					</Title>
				</div>
			</LayoutLine>
			<HorizontalBorder />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={`flex flex-col relative w-full p-8 border-r border-neutral-400 border-opacity-90 border-b ${index === features.length - 1 ? "md:border-r-0" : ""} ${index < features.length - 2 ? "" : "md:border-b-0"}`}
						>
							{feature.icon}
							<Title className="text-md md:text-lg text-start mt-4 md:mt-6">
								{feature.title}
							</Title>
							<Paragraph className="flex text-sm mt-4 md:mt-6">
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
