import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

const routes = [
  "",
  "/demos/project-manager",
  "/demos/constructora-erp",
  "/projects/project-manager",
  "/projects/constructora-erp",
  "/projects/sonitus-erp",
  "/projects/contrato-digital",
  "/projects/anatomia-fitness",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
