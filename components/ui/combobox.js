"use client";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import HorizontalBorder from "./horizontal-border";

export function Combobox({ className, items, label = "item", search = false }) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	search = typeof search === "string" ? search === "true" : search;

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<div className="flex flex-col w-full">
					<HorizontalBorder />
					<Button
						variant="default"
						role="combobox"
						aria-expanded={open}
						className={`"w-full font-light text-sm justify-between bg-transparent text-muted-foreground hover:bg-primary/90 hover:text-white px-8 py-6 ${className}`}
					>
						{value
							? items.find((item) => item.value === value)?.label
							: `Select ${label}...`}
						<ChevronsUpDown />
					</Button>
					<HorizontalBorder />
				</div>
			</PopoverTrigger>
			<PopoverContent className={`w-[298px] p-0 ${className}`}>
				<Command>
					{search && (
						<CommandInput placeholder={`Select ${label}...`} className="h-9" />
					)}
					<CommandList>
						<CommandEmpty>No {label} found.</CommandEmpty>
						<CommandGroup>
							{items.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									{item.label}
									<Check
										className={cn(
											"ml-auto",
											value === item.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
