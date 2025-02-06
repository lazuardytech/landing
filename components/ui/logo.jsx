import { CompanyData } from "@/lib/config";
import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";

export default function Logo(props) {
	const { className, withTM } = props;
	return (
		<div className={`${Plus_Jakarta_Sans.className}`}>
			<span className={className}>{CompanyData.tradeName}</span>
			{withTM && <span className="ms-1 absolute">™</span>}
		</div>
	);
}
