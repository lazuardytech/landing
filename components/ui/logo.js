import Image from "next/image";
import lazuardyTech from "@/public/images/logo/lazuardy-tech.svg";
import { CompanyData } from "@/lib/config";

export default function Logo(props) {
	const { className, withTM } = props;
	return (
		<Image
			src={lazuardyTech}
			draggable={false}
			alt={CompanyData.tradeName}
			width={400}
			height={200}
			className={`flex min-w-28 w-28 h-auto select-none ${className}`}
		/>
	);
}
