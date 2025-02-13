import Doto from "@/lib/fonts/doto";

export default function Title({ children, className }) {
	return (
		<h1
			className={`w-full font-extrabold text-black text-left leading-snug uppercase ${Doto.className} ${className}`}
		>
			{children}
		</h1>
	);
}
