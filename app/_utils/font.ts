import { Roboto, Rouge_Script } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const rs = Rouge_Script({
  weight: ["400"],
  subsets: ["latin"],
});
