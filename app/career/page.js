import Container from "@/components/block/career/container";
import Hero from "@/components/block/career/hero";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Article() {
	return (
		<div className="relative w-full h-full">
			<Header />
			<Hero />
			<Container />
			<Keypoint titleCenter={true} />
			<Footer />
		</div>
	);
}
