import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loopfuels.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/technology`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biostimulants`,
      lastModified: new Date(),
      priority: 0.8,
    },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/investors`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.7 },
    {
      url: `${baseUrl}/blog/sustainable-aviation-fuel-india`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/what-are-biostimulants`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/csir-iip-saf-technology`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
