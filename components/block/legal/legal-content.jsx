import LegalHeader from "@/components/block/legal/legal-header";
import LegalText from "@/components/block/legal/legal-text";

export default function LegalContent({ legal }) {
	return (
		<>
			<LegalHeader title={legal.headline} date={legal.date} />
			<LegalText content={legal.content} />
		</>
	);
}
