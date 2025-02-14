import { Combobox } from "@/components/ui/combobox";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";

const workLocations = [
	{
		value: "remote",
		label: "Remote",
	},
	{
		value: "hybrid",
		label: "Hybrid",
	},
	{
		value: "onsite",
		label: "On-Site",
	},
];

const workTypes = [
	{
		value: "freelance",
		label: "Freelance",
	},
	{
		value: "parttime",
		label: "Part-Time",
	},
	{
		value: "fulltime",
		label: "Full-Time",
	},
];

const workDivisions = [
	{
		value: "engineering",
		label: "Engineering",
	},
	{
		value: "designing",
		label: "Designing",
	},
	{
		value: "qa",
		label: "Quality Assurance",
	},
	{
		value: "branding",
		label: "Branding & Social Media",
	},
	{
		value: "sales",
		label: "Sales & Marketing",
	},
];

export default function CareerFilter() {
	return (
		<>
			<LayoutLine className="pt-8" />
			<HorizontalBorder className="opacity-0 md:opacity-100" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:px-8 w-full">
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group md:py-8">
								<Combobox label="work location" items={workLocations} />
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group pt-4 md:py-8">
								<Combobox label="work type" items={workTypes} />
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group pt-4 md:py-8">
								<Combobox label="work division" items={workDivisions} />
							</div>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder className="opacity-0 md:opacity-100" />
		</>
	);
}
