import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whale Intelligence League | DreamNet",
  description: "A receipt-driven paper market learning league with one disclosed teaching agent.",
  metadataBase: new URL("https://dreamnet-whale-league.pages.dev"),
  openGraph: {
    title: "Whale Intelligence League",
    description: "Train market judgment with paper scenarios and keep a receipt for every workout.",
    images: [{ url: "/league-preview.png", width: 1440, height: 1100 }],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
