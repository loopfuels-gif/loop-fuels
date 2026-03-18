import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loop Fuels | Sustainable Aviation Fuel",
  description:
    "Loop Fuels is pioneering the production of Sustainable Aviation Fuel (SAF) to decarbonize the aviation industry and build a cleaner future for flight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ScrollAnimator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
