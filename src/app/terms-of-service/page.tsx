import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Loop Fuels.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">Terms of Service</h1>
      <p className="text-gray-500 leading-relaxed">
        This page is under construction. Please check back soon or contact us at{" "}
        <a href="mailto:loopfuels@gmail.com" className="text-brand-green hover:underline">
          loopfuels@gmail.com
        </a>{" "}
        for any questions about our terms.
      </p>
    </main>
  );
}
