import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Barlow,
  Barlow_Condensed,
  IBM_Plex_Mono,
  Playfair_Display,
} from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const ui = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-condensed",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-data",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${display.variable} ${ui.variable} ${condensed.variable} ${mono.variable} font-root`}
    >
      <Component {...pageProps} />
    </div>
  );
}
