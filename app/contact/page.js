import Form from "@/components/block/contact/form";
import Hero from "@/components/block/contact/hero";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Contact() {
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
