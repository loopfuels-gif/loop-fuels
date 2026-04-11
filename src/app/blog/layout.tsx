import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest insights on Sustainable Aviation Fuel, biostimulants, algae technology, and clean energy in India from Loop Fuels.",
  keywords: [
    "sustainable aviation fuel blog",
    "SAF India news",
    "biostimulants blog",
    "clean aviation articles",
    "algae fuel insights",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
