import CareerFilter from "@/components/block/career/career-filter";
import CareerList from "@/components/block/career/career-list";

export default function Container() {
	return (
		<div className="flex flex-col w-full">
			<CareerFilter />
			<CareerList />
		</div>
	);
}
