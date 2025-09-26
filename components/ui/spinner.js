import { Loader } from "lucide-react";
import { forwardRef } from "react";

const Spinner = forwardRef(function Spinner({ className }, ref) {
	return (
		<Loader
			ref={ref}
			className={`animate-spin text-gray-900 h-6 w-6 md:h-8 md:w-8 ${className}`}
		/>
	);
});

Spinner.displayName = "Spinner";

export default Spinner;
