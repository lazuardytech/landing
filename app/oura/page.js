import CTA from "@/components/block/oura/cta";
import Hero from "@/components/block/oura/hero";
import Service from "@/components/block/oura/service";
import Certification from "@/components/block/oura/certification";
import Highlight from "@/components/block/oura/highlight";
import Compliance from "@/components/block/oura/compliance";
import Sector from "@/components/block/oura/sector";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
	return (
		<div className="relative h-full max-w-screen overflow-x-hidden">
			<Header />
			<Hero />
			<Service />
			<Certification />
			<Highlight />
			<Sector />
			<Compliance />
			<CTA />
			<Keypoint titleCenter />
			<Footer />
		</div>
	);
}
