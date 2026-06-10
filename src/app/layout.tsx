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
    default: "Sustainable Aviation Fuel from Algae | Loop Fuels India",
    template: "%s | Loop Fuels",
  },
  description:
    "Loop Fuels makes Sustainable Aviation Fuel (SAF) from algae in India, cutting aviation carbon emissions up to 80%. See how we're decarbonizing flight.",
  metadataBase: new URL("https://loopfuels.com"),
  openGraph: {
    type: "website",
    siteName: "Loop Fuels",
    title: "Sustainable Aviation Fuel from Algae | Loop Fuels India",
    description:
      "Loop Fuels makes Sustainable Aviation Fuel (SAF) from algae in India, cutting aviation carbon emissions up to 80%. See how we're decarbonizing flight.",
    url: "https://loopfuels.com",
    images: [
      {
        // TODO: replace with real 1200×630 branded image at /og-image.jpg
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loop Fuels — Sustainable Aviation Fuel from Algae",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Aviation Fuel from Algae | Loop Fuels India",
    description:
      "Loop Fuels makes Sustainable Aviation Fuel (SAF) from algae in India, cutting aviation carbon emissions up to 80%. See how we're decarbonizing flight.",
    // TODO: replace with real 1200×630 branded image at /og-image.jpg
    images: ["/og-image.jpg"],
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://loopfuels.com/#organization",
                  name: "Loop Fuels",
                  url: "https://loopfuels.com/",
                  logo: "https://loopfuels.com/logo.jpg",
                  description:
                    "Loop Fuels produces Sustainable Aviation Fuel (SAF) from algae in India, reducing aviation lifecycle carbon emissions by up to 80%.",
                  email: "loopfuels@gmail.com",
                  telephone: "+91-9075346665",
                  address: { "@type": "PostalAddress", addressCountry: "IN" },
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://loopfuels.com/#website",
                  url: "https://loopfuels.com/",
                  name: "Loop Fuels",
                  publisher: { "@id": "https://loopfuels.com/#organization" },
                },
              ],
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
