import Keypoint from "@/components/block/home/keypoint";
import Form from "@/components/block/inquiry/form";
import Hero from "@/components/block/inquiry/hero";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Inquiry() {
	return (
		<div className="relative w-full h-full">
			<Header />
			<Hero />
			<Form />
			<Keypoint titleCenter />
			<Footer />
		</div>
	);
}
