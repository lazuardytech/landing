import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function CareerList() {
	return (
		<LayoutLine>
			<LayoutLine className="md:mx-8">
				<div className="flex w-full h-[40vh] md:h-[50vh] justify-center items-center">
					<div className="flex flex-col w-full">
						<HorizontalBorder />
						<div className="flex flex-col w-full p-8 items-center">
							<Title className="text-xl text-center">
								There aren’t any job openings right now :(
							</Title>
							<p className="w-full font-light text-neutral-600 leading-snug text-xs md:text-sm text-center px-8 md:px-0 mt-4 md:max-w-md">
								Dont worry, we are always looking for new talents. Please follow
								our{" "}
								<Link
									href="https://linkedin.com/company/lazuardy/?viewAsMember=true"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-primary underline-offset-4 hover:underline text-xs"
								>
									LinkedIn Page
								</Link>{" "}
								to get the latest updates.
							</p>
						</div>
						<HorizontalBorder />
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</LayoutLine>
	);
}
