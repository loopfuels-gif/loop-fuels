import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Loop Fuels for SAF partnerships, investment opportunities, or biostimulant inquiries. Reach us at loopfuels@gmail.com.",
  keywords: [
    "contact Loop Fuels",
    "SAF partnership India",
    "sustainable aviation fuel enquiry",
    "Loop Fuels email",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
