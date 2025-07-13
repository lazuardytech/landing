export default function LayoutLine({ children, className }) {
	return (
		<div className="flex items-center justify-center w-full z-20">
			<div
				className={`flex flex-col w-full md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 ${className}`}
			>
				{children}
			</div>
		</div>
	);
}
