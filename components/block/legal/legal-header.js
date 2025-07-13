import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";

export default function LegalHeader({ title, date }) {
	return (
		<LayoutLine className="pt-[12vh] md:pt-[18vh] pb-16 px-8">
			<div className="flex flex-col justify-center items-center w-full">
				<div className="grid grid-cols-3 w-full md:max-w-3xl mt-6">
					<div className="flex flex-col w-full justify-center items-center col-span-3">
						<Title className="text-md md:text-lg text-center uppercase">
							Legal
						</Title>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center w-full mt-8">
				<Title className="w-full md:max-w-3xl text-3xl md:text-5xl text-center">
					{title}
				</Title>
				<div className="flex space-x-4 mt-8">
					<span className="flex md:max-w-2xl font-light text-sm text-black text-center leading-snug">
						{date}
					</span>
				</div>
			</div>
		</LayoutLine>
	);
}
