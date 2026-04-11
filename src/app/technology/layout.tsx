import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Loop Fuels' HEFA and CSIR-IIP single-step catalytic hydroprocessing technology for producing Sustainable Aviation Fuel from algae and waste feedstocks in India.",
  keywords: [
    "HEFA technology",
    "sustainable aviation fuel production",
    "CSIR-IIP SAF technology",
    "hydroprocessing aviation fuel",
    "SAF manufacturing process India",
    "algae to jet fuel",
  ],
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
