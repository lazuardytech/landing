import { Roboto_Mono as font } from "next/font/google";

const Roboto_Mono = font({
  weights: [300, 400, 500, 600, 700],
  styles: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default Roboto_Mono;
