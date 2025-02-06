import NotFound from "@/app/not-found";
import LegalContent from "@/components/block/legal/legal-content";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { getLegalByUuid } from "@/lib/services/legal-service";

export default async function LegalDetail({ params }) {
	const { slug } = await params;
	const legal = await getLegalByUuid(slug);

	if (!legal) return <NotFound />;

	return (
		<div className="relative w-full h-full">
			<Header />
			<LegalContent legal={legal} />
			<Footer />
		</div>
	);
}
