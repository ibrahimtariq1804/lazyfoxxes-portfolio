import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services";

const baseUrl = "https://lazyfoxxes-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();

  // Home page
  const homeEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Service pages
  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...homeEntry, ...serviceEntries];
}
