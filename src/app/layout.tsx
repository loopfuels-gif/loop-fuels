import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Loop Fuels | Sustainable Aviation Fuel",
    template: "%s | Loop Fuels",
  },
  description:
    "Loop Fuels is pioneering the production of Sustainable Aviation Fuel (SAF) to decarbonize the aviation industry and build a cleaner future for flight.",
  metadataBase: new URL("https://loopfuels.com"),
  openGraph: {
    type: "website",
    siteName: "Loop Fuels",
    title: "Loop Fuels | Sustainable Aviation Fuel",
    description:
      "Loop Fuels is pioneering the production of Sustainable Aviation Fuel (SAF) to decarbonize the aviation industry and build a cleaner future for flight.",
    url: "https://loopfuels.com",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Loop Fuels Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loop Fuels | Sustainable Aviation Fuel",
    description:
      "Loop Fuels is pioneering the production of Sustainable Aviation Fuel (SAF) to decarbonize the aviation industry and build a cleaner future for flight.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32.png",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Loop Fuels",
              url: "https://loopfuels.com",
              logo: "https://loopfuels.com/logo.jpg",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Loop Fuels",
              url: "https://loopfuels.com",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <ScrollAnimator />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
