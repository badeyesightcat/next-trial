import { Yeseva_One, Inter } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  // display: "swap",
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export { yeseva, inter };