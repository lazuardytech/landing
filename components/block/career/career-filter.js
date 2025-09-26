"use client";

import { Combobox } from "@/components/ui/combobox";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { useRouter, useSearchParams } from "next/navigation";

export const workLocations = [
	{
		value: "",
		label: "All Locations",
	},
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

export const workTypes = [
	{
		value: "",
		label: "All Types",
	},
	{
		value: "internship",
		label: "Internship",
	},
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

export const workDivisions = [
	{
		value: "",
		label: "All Divisions",
	},
	{
		value: "engineering",
		label: "Engineering",
	},
	{
		value: "creative",
		label: "Creative",
	},
	{
		value: "qa",
		label: "Quality Assurance",
	},
	{
		value: "sm",
		label: "Sales & Marketing",
	},
];

export default function CareerFilter() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const updateQueryParams = (param, value) => {
		const current = new URLSearchParams(Array.from(searchParams.entries()));

		if (value) {
			current.set(param, value);
		} else {
			current.delete(param);
		}

		const search = current.toString();
		const query = search ? `?${search}` : "";

		router.push(`${window.location.pathname}${query}`, { scroll: false });
	};

	return (
		<>
			<LayoutLine className="pt-8" />
			<HorizontalBorder className="opacity-0 md:opacity-100" />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:px-8 w-full">
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group md:py-8">
								<Combobox
									label="work location"
									items={workLocations}
									value={searchParams.get("location") || ""}
									onSelect={(value) => updateQueryParams("location", value)}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group pt-4 md:py-8">
								<Combobox
									label="work type"
									items={workTypes}
									value={searchParams.get("type") || ""}
									onSelect={(value) => updateQueryParams("type", value)}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="flex flex-col w-full md:border-l md:border-r border-neutral-400 border-opacity-90 group pt-4 md:py-8">
								<Combobox
									label="work division"
									items={workDivisions}
									value={searchParams.get("division") || ""}
									onSelect={(value) => updateQueryParams("division", value)}
								/>
							</div>
						</div>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder className="opacity-0 md:opacity-100" />
		</>
	);
}
