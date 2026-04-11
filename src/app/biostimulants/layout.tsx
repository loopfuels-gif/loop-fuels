import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biostimulants",
  description:
    "Loop Fuels extracts algae-derived biostimulants that boost crop yield by 20-30%, improve soil health, and support India's agricultural revolution. Explore benefits, market growth, and impact.",
  keywords: [
    "algae biostimulants India",
    "biostimulants market India",
    "crop yield improvement",
    "soil health biostimulants",
    "algae agriculture India",
    "organic farming biostimulants",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly are biostimulants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biostimulants are naturally derived substances that enhance plant nutrition, growth, and stress tolerance — without being fertilizers or pesticides themselves. They work by stimulating natural biological processes in plants and soil.",
      },
    },
    {
      "@type": "Question",
      name: "How are biostimulants different from fertilizers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fertilizers supply nutrients directly. Biostimulants enhance how plants absorb and use those nutrients. They improve the efficiency of the entire plant-soil system rather than just adding more inputs.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Loop Fuels extract biostimulants from algae?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Algae are the most efficient biological source of biostimulant compounds. Our process extracts lipids for SAF production and biostimulants simultaneously — creating two high-value products with zero waste, making our entire operation more sustainable and economically viable.",
      },
    },
    {
      "@type": "Question",
      name: "Are algae-derived biostimulants safe for organic farming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Algae-derived biostimulants are 100% natural and compatible with organic farming practices. They contain no synthetic chemicals and enhance natural soil and plant processes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the long-term impact on soil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Over years of application, biostimulants fundamentally transform soil health — increasing organic matter, microbial diversity, water retention, and carbon storage. They effectively reverse soil degradation and build regenerative agricultural systems.",
      },
    },
  ],
};

export default function BiostimulantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
