import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loopfuels.com";

  return [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/technology`, priority: 0.8 },
    { url: `${baseUrl}/sustainability`, priority: 0.8 },
    { url: `${baseUrl}/biostimulants`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/investors`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/blog`, priority: 0.7 },
    { url: `${baseUrl}/blog/sustainable-aviation-fuel-india`, priority: 0.6 },
    { url: `${baseUrl}/blog/what-are-biostimulants`, priority: 0.6 },
    { url: `${baseUrl}/blog/csir-iip-saf-technology`, priority: 0.6 },
  ];
}
