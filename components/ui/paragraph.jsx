export default function Paragraph({ className, children }) {
	return (
		<p
			className={`w-full font-light text-neutral-600 text-justify leading-snug ${className}`}
		>
			{children}
		</p>
	);
}
