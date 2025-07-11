import CTA from "@/components/block/oura/cta";
import Hero from "@/components/block/oura/hero";
import Hook from "@/components/block/oura/hook";
import LEXA from "@/components/block/oura/lexa";
import Product from "@/components/block/oura/product";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
	return (
		<div className="relative w-full h-full">
			<Header />
			<Hero />
			<Hook />
			{/* <LEXA /> */}
			{/* <Product /> */}
			{/* <CTA /> */}
			<Keypoint titleCenter />
			<Footer />
		</div>
	);
}
