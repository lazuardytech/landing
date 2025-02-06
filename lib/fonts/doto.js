import { Doto as font } from "next/font/google";

const Doto = font({
	weights: [300, 400, 500, 600, 700],
	styles: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export default Doto;
