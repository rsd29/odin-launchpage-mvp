import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    { path: "./fonts/NeueMontreal-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odin — Coming Soon",
  description: "A new beginning is on the horizon. Count down to the launch of Odin.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={neueMontreal.variable}><body>{children}</body></html>;
}

