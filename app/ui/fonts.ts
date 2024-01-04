import {
  Lato,
  Alex_Brush,
  Inter,
  Lusitana,
  Quattrocento,
  Overlock,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// voldri que fos molt gruixuda
export const alex_brush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const quattrocento = Quattrocento({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
