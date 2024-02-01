import {
  IBM_Plex_Sans,
  Poppins,
  Inter,
  Satisfy,
  Roboto,
} from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmplexsans",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const satisfy = Satisfy({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satisfy",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export { ibmPlexSans, poppins, inter, satisfy, roboto };
