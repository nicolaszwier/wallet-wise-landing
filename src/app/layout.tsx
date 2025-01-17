import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const iowan = localFont({
  src: "./iowan-bold.ttf",
  display: "swap",
  variable: '--font-iowan'
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletWise - Personal Finances",
  description: "Simplify your finances planning with WalletWise! The easiest way to control your personal budget!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${inter.className} ${iowan.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
