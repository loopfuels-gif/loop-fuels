import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const posts = [
  {
    slug: "sustainable-aviation-fuel-india",
    title: "Why India Needs Sustainable Aviation Fuel Now",
    excerpt:
      "India's aviation sector is the fastest growing in the world. With SAF mandates coming by 2027, the opportunity for domestic SAF production has never been bigger.",
    date: "2026-04-10",
    readTime: "5 min read",
    tag: "Industry",
  },
  {
    slug: "what-are-biostimulants",
    title: "What Are Biostimulants and Why Do They Matter for Indian Agriculture?",
    excerpt:
      "Biostimulants are transforming farming worldwide. Learn how algae-derived biostimulants can boost crop yields by 20-30% and restore India's degrading farmland.",
    date: "2026-04-08",
    readTime: "6 min read",
    tag: "Agriculture",
  },
  {
    slug: "csir-iip-saf-technology",
    title: "CSIR-IIP Single-Step SAF Technology Explained",
    excerpt:
      "India's CSIR-IIP has developed a breakthrough single-step catalytic hydroprocessing method to convert algae oil into jet fuel. Here's how it works.",
    date: "2026-04-05",
    readTime: "4 min read",
    tag: "Technology",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Insights"
        title="Loop Fuels Blog"
        subtitle="Latest thinking on sustainable aviation fuel, biostimulants, and clean energy in India."
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-100 bg-white hover:border-brand-green/20 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors duration-300 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-brand-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
