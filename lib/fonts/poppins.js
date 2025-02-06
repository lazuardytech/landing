import { Poppins as font } from "next/font/google";

const Poppins = font({
	weight: ["300", "400", "500", "600", "700"],
	styles: ["normal"],
	display: "swap",
	subsets: ["latin"],
});

export default Poppins;
