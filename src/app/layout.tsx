import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Boat – Wooden Houseboat Gallery",
  description:
    "A simple, calm gallery celebrating the hand-built wooden houseboat Love Boat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f4f1ea] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
