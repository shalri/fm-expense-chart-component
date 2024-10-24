import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Expenses Chart Component| FScode",
  description:
    "Solution for Expenses chart component challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.className} min-h-screen scroll-smooth bg-ec-orange antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
